import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "GBA Beauty Spa",
	description: "GBA Beauty Spa",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
			>
				<div
					className="font-sans  items-center justify-items-center  w-full min-h-screen h-full bg-no-repeat bg-cover 
    bg-[url('/360x800.jpg')]  
    sm:bg-[url('/768x1024.jpg')] 
    lg:bg-[url('/pc.jpg')]"
				>
					<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center min-h-screen h-full w-full mb-2">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
