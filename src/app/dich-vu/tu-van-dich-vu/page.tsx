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
import { Services } from "@/configs/Services";

const MENU = [
	{
		icon: MessageSquareText,
		name: "Xông thải độc: hòa - trị liệu",
		link: true,
		href: "xong-thai-doc-hoa-tri-lieu",
	},
	{
		icon: FilePenLine,
		name: "Massage trị liệu chuyên sâu",
	},
	{
		icon: Users,
		name: "Massage cổ vai gáy",
	},
	{
		icon: IdCard,
		name: "Gội đầu dưỡng sinh",
	},
	{
		icon: Mails,
		name: "Gội đầu thường",
	},
	{
		icon: PackageSearch,
		name: "Ngâm chân thảo dược",
	},
	{
		icon: PackageSearch,
		name: "Tắm lá thuốc người Dao đỏ",
	},
];

const Page = () => {
	const router = useRouter();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onHandlerItem = (item: any) => {
		console.log(item);
		router.push("/dich-vu/tu-van-dich-vu/" + item.href);
	};
	return (
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full mb-12">
			<Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
			<div className="w-full flex flex-col items-center gap-5">
				<h2 className="uppercase text-3xl lg:text-3xl font-semibold text-amber-500">
					Danh Mục Dịch Vụ
				</h2>
				<div className="w-full grid grid-cols-1  gap-2 ">
					{Services.map((item) => (
						<button
							onClick={() => {
								onHandlerItem(item);
							}}
							key={item.name}
							className=" bg-blue-50 text-black shadow-2xl hover:bg-red-200  flex items-center justify-center px-5 py-10 gap-3 rounded-2xl text-lg font-medium  "
						>
							{item.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
