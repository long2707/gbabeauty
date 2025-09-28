"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
	FilePenLine,
	IdCard,
	Mails,
	MessageSquareText,
	PackageSearch,
	Users,
} from "lucide-react";
import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "react-day-picker";
import { tree } from "next/dist/build/templates/app-page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { ProductConfig } from "@/configs/Product";
import Link from "next/link";

const MENU = [
	{
		icon: MessageSquareText,
		name: "Tư vấn dịch vụ",
		link: true,
		href: "dich-vu/tu-van-dich-vu",
	},
	{
		icon: FilePenLine,
		name: "Đăng ký dịch vụ",
		link: true,
		href: "dich-vu/dang-ky-dich-vu",
	},
	{
		icon: Users,
		name: "Tư vấn 1-1 cùng chuyên gia",
		link: true,
		href: "dich-vu/1-1-cung-chuyen-gia",
	},
	{
		icon: PackageSearch,
		name: "Sản phẩm",
		link: false,
		href: "san-pham",
	},
	{
		icon: IdCard,
		name: "Đăng ký thẻ thành viên",
		link: true,
		href: "dich-vu/dang-ky-the-thanh-vien",
	},

	{
		icon: Mails,
		name: "Góp ý/Phản hồi",
		link: true,
		href: "dich-vu/gop-y",
	},
];

const Page = () => {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onHandlerItem = (item: any) => {
		if (item.link) {
			router.push(item.href);
		}
	};
	return (
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full pb-4">
			<Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
			<div className="w-full flex flex-col items-center gap-5">
				<h2 className="uppercase text-3xl lg:text-3xl font-semibold text-amber-500">
					Danh Mục Dịch Vụ
				</h2>
				<div className="w-full grid grid-cols-1  gap-2 ">
					{MENU.map((item) =>
						item.href == "san-pham" ? (
							<Dialog
								open={open}
								onOpenChange={setOpen}
								key={item.name}
							>
								<DialogTrigger asChild>
									<Button className="bg-white  flex items-center justify-center px-5 py-10 gap-3 rounded-2xl text-lg font-medium ">
										{item.name}
									</Button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle>
											<ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
												<div className="flex flex-col gap-4">
													{ProductConfig.map(
														(item) => (
															<Card
																className="p-4"
																key={item.name}
															>
																<div className="flex items-center gap-4">
																	<Link
																		href={
																			item.href
																		}
																		className="block px-3 py-2 rounded-md hover:bg-gray-100 transition"
																	>
																		{" "}
																		{
																			item.name
																		}{" "}
																	</Link>
																</div>
															</Card>
														)
													)}
												</div>
											</ScrollArea>
										</DialogTitle>
										<DialogDescription></DialogDescription>
									</DialogHeader>
								</DialogContent>
							</Dialog>
						) : (
							<button
								onClick={() => {
									onHandlerItem(item);
								}}
								key={item.name}
								className=" bg-white  flex items-center justify-center px-5 py-10 gap-3 rounded-2xl text-lg font-medium  "
							>
								<item.icon />
								{item.name}
							</button>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Page;
