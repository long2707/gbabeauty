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

const emailOptional = z.preprocess(
	(v) =>
		typeof v === "string"
			? v.trim() === ""
				? undefined
				: v.trim().toLowerCase()
			: v,
	z.string().email("Email không hợp lệ").optional()
);

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
	email: z.string({
		message: "vui lòng chọn dịch vụ",
	}),
	service: z.string({
		message: "vui lòng chọn dịch vụ",
	}),
	time: z.date({
		message: "Vui lòng chọn ngày",
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
			time: new Date(),
			email: "", // "" -> preprocess -> undefined (OK)
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	function handleDateSelect(date: Date | undefined) {
		if (date) {
			form.setValue("time", date);
		}
	}

	function handleTimeChange(type: "hour" | "minute", value: string) {
		const currentDate = form.getValues("time") || new Date();
		// eslint-disable-next-line prefer-const
		let newDate = new Date(currentDate);

		if (type === "hour") {
			const hour = parseInt(value, 10);
			newDate.setHours(hour);
		} else if (type === "minute") {
			newDate.setMinutes(parseInt(value, 10));
		}

		form.setValue("time", newDate);
	}
	return (
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full ">
			<Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
			<h1 className="uppercase text-2xl md:text-3xl font-semibold text-amber-500  text-center">
				Đăng ký thẻ thành viên để nhận ưu đãi
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
								<FormControl className="border !border-black">
									<Input
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
								<FormControl className="border !border-black">
									<Input
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
								<FormControl className="border !border-black">
									<Input
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
								<FormControl className="border !border-black">
									<Input
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
									Bạn muốn đăng ký gói combo nào?
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl className="w-full border !border-black">
										<SelectTrigger>
											<SelectValue placeholder="chọn dịch vụ bạn muốn dùng" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value=" Liệu trình xông thủy/hòa trị liệu (21 buổi) - 3.000.000đ">
											{" "}
											Liệu trình xông thủy/hòa trị liệu
											(21 buổi) - 3.000.000đ
										</SelectItem>
										<SelectItem value="Liệu trình gội đầu dưỡng sinh (12 buổi) - 1.500.000đ">
											Liệu trình gội đầu dưỡng sinh (12
											buổi) - 1.500.000đ
										</SelectItem>
										<SelectItem value="Liệu trình tác động sau xông (12 buổi) - 1.200.000đ">
											Liệu trình tác động sau xông (12
											buổi) - 1.200.000đ
										</SelectItem>
									</SelectContent>
								</Select>
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
