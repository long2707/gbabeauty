import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // tuỳ bạn
	variable: "--font-poppins",
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
			<body className={`${poppins.variable} antialiased  `}>
				<div
					className="font-sans  items-center justify-items-center  w-full min-h-screen h-full bg-no-repeat bg-cover 
    bg-[url('/360x800.jpg')]  
    sm:bg-[url('/768x1024.jpg')] 
    lg:bg-[url('/pc.jpg')]"
				>
					<main className="flex flex-col gap-[32px]  items-center sm:items-center min-h-screen h-full w-full ">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
