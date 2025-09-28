import Link from "next/link";

export default function ThankYouPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-6">
			<div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg text-center">
				<h1 className="text-3xl font-bold text-pink-600 mb-4">
					🎉 Cảm ơn quý khách!
				</h1>
				<p className="text-gray-700 mb-6 leading-relaxed">
					Quý khách đã đăng ký dịch vụ của{" "}
					<span className="font-semibold text-pink-500">
						GBA Beauty
					</span>
					. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất để xác
					nhận và hỗ trợ quý khách.
				</p>
				<Link
					href="/"
					className="inline-block bg-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
				>
					Quay về trang chủ
				</Link>
			</div>
		</main>
	);
}
