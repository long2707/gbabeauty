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
				className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-linear-to-r from-amber-50 to-amber-200`}
			>
				<div className="font-sans  items-center justify-items-center min-h-screen w-full">
					<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center min-h-screen h-full w-full mb-2 mx-2">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
