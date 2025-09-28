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
					{MENU.map((item) => (
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
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
