"use client";
import React, { useEffect } from "react";

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
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";
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
		window.location.href = "/dich-vu/tu-van-dich-vu/" + item.href;
	};

	useEffect(() => {
		// Chỉ reload khi quay lại (trang được lấy từ cache bfcache)
		const handlePageShow = (event: PageTransitionEvent) => {
			if (event.persisted) {
				window.location.reload();
			}
		};
	}, []);

	return (
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full mb-12">
			<Image src={"/letan1.gif"} alt="le-tan" width={400} height={500} />
			<video
				src="/letan1.webm"
				playsInline
				autoPlay
				loop
				className="h-0 w-0"
			></video>
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
							className=" bg-red-500 text-white shadow-2xl hover:bg-red-200  flex items-center justify-center px-5 py-10 gap-3 rounded-2xl text-lg font-medium  "
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
