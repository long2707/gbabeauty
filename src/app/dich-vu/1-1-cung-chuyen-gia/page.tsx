"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import React from "react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	fullname: z.string().min(2, {
		message: "Vui lòng nhập họ tên",
	}),
	phone: z
		.string()
		.trim()
		.min(1, "Vui lòng nhập số điện thoại")
		.regex(
			/^(?:\+84|0)(?:3|5|7|8|9)\d{8}$/,
			"Số điện thoại không hợp lệ (VN: 03/05/07/08/09 + 8 số)"
		),
	address: z.string().min(2, {
		message: "Vui lòng nhập họ tên",
	}),
	email: z
		.string({
			message: "vui lòng nhập email",
		})
		.optional(),
	service: z.string({
		message: "vui lòng chọn dịch vụ",
	}),
	other_request: z.string({
		message: "vui lòng nhập email",
	}),
});
type FormValues = z.infer<typeof formSchema>;
export default function Page() {
	const [open, setOpen] = React.useState(false);
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema), // <- KHÔNG truyền generic vào zodResolver
		defaultValues: {
			fullname: "",
			phone: "",
			address: "",
			service: "",
			other_request: "",
			email: "", // "" -> preprocess -> undefined (OK)
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full ">
			<Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
			<h1 className="uppercase text-xl md:text-3xl font-semibold text-amber-500 ">
				Đăng ký 1-1 cùng chuyên gia
			</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-80 md:w-xl "
				>
					<FormField
						control={form.control}
						name="fullname"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Họ và tên{" "}
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<Input
										className="border !border-black"
										placeholder="nhập họ và tên"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Số điện thoại{" "}
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<Input
										className="border !border-black"
										placeholder="Nhập số điện thoại"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="address"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Địa chỉ{" "}
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<Input
										className="border !border-black"
										placeholder="Nhập địa chỉ"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										className="border !border-black"
										placeholder="your.email@example.com"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="service"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Chào bạn, bạn đang gặp vấn đề gì?
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl className="w-full border !border-black">
										<SelectTrigger>
											<SelectValue placeholder="Chọn vấn đề" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="Đau mỏi vai gáy">
											Đau mỏi vai gáy
										</SelectItem>
										<SelectItem value="Căng cơ, đau cơ sau vận động">
											Căng cơ, đau cơ sau vận động
										</SelectItem>
										<SelectItem value="Đau lưng mãn tính hoặc cấp tính">
											Đau lưng mãn tính hoặc cấp tính
										</SelectItem>
										<SelectItem value="Mỏi gối, thoái hóa khớp gối">
											Mỏi gối, thoái hóa khớp gối
										</SelectItem>
										<SelectItem value="Đau đầu, mất ngủ do căng thẳng">
											Đau đầu, mất ngủ do căng thẳng
										</SelectItem>
										<SelectItem value="Tê bì tay chân, tuần hoàn kém">
											Tê bì tay chân, tuần hoàn kém
										</SelectItem>
										<SelectItem value="Đau cổ, cứng cổ khi ngồi lâu">
											Đau cổ, cứng cổ khi ngồi lâu
										</SelectItem>
										<SelectItem value="Đau thần kinh tọa">
											Đau thần kinh tọa
										</SelectItem>
										<SelectItem value="Đau khớp vai, hạn chế vận động khớp">
											Đau khớp vai, hạn chế vận động khớp
										</SelectItem>
										<SelectItem value="Stress, lo âu, mệt mỏi tinh thần">
											Stress, lo âu, mệt mỏi tinh thần
										</SelectItem>
										<SelectItem value="Khác…">
											Khác…
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="other_request"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Bạn có yêu cầu gì khác không?
								</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										className="border !border-black"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-full bg-amber-600" type="submit">
						Gửi đăng ký
					</Button>
				</form>
			</Form>
		</div>
	);
}
