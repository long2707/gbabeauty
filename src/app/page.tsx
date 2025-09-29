"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen ">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
				<TypeAnimation
					className="uppercase text-lg lg:text-3xl font-semibold text-amber-500"
					sequence={[
						500,
						"Lễ tân GBA xin Kính chào quý khách!",
						1000,
						"",
					]}
					repeat={Infinity}
				/>
				<video src="/le-tan.mp4" playsInline autoPlay loop></video>
				<Button className="w-sm bg-amber-500" asChild>
					<Link href="/dich-vu">Tư vấn viên</Link>
				</Button>
			</main>
		</div>
	);
}
