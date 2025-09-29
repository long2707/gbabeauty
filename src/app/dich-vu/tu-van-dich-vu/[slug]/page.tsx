"use server";
import { Button } from "@/components/ui/button";
import { Services } from "@/configs/Services";
import Image from "next/image";
import Link from "next/link";
export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	console.log(slug);
	const ItemService = Services.find((x) => x.href === slug);

	return (
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full">
			<Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
			<h1 className="uppercase sm:text-2xl md:text-3xl font-semibold text-amber-500">
				{ItemService?.name}
			</h1>
			{/* <iframe
				width="800"
				height="450"
				src="https://www.youtube.com/embed/al3bP-8pgBs?autoplay=1&mute=0"
				title="Video demo"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="rounded-lg shadow-lg w-full max-w-3xl"
			></iframe> */}
			<video
				src={ItemService?.linkVideo}
				key={slug}
				playsInline
				autoPlay
				loop
				className="w-full h-auto max-h-screen object-contain"
			></video>
			<Button className="mt-4 bg-amber-500 animate-bounce " asChild>
				<Link href={"/dich-vu/dang-ky-dich-vu"}>Đăng ký dịch vụ</Link>
			</Button>
		</div>
	);
}
