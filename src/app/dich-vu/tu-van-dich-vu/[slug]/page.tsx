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
  const ItemService = Services.find((x) => (x.href = slug));
  console.log(ItemService);

  return (
    <div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full">
      <Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
      <h1 className="uppercase text-4xl lg:text-3xl font-semibold text-amber-500">
        {ItemService?.name}
      </h1>
      <video
        src={ItemService?.linkVideo}
        playsInline
        muted
        autoPlay
        loop
      ></video>
      <Button className="mt-4 bg-amber-500 animate-bounce " asChild>
        <Link href={"/dich-vu/dang-ky-dich-vu"}>Đăng ký dịch vụ</Link>
      </Button>
    </div>
  );
}
