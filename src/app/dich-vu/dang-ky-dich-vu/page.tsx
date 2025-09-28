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
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
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

	const router = useRouter();

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
		router.push("cam-on");
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
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full overflow-y-auto mb-2.5">
			<Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
			<h1 className="uppercase text-4xl lg:text-3xl font-semibold text-amber-500 ">
				Đăng ký dịch vụ
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
									Bạn muốn sử dụng dịch vụ nào tại GBA?
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
										<SelectItem value="Xông thải độc: hòa - trị liệu">
											{" "}
											Xông thải độc: hòa - trị liệu
										</SelectItem>
										<SelectItem value="Massage trị liệu chuyên sâu">
											Massage trị liệu chuyên sâu
										</SelectItem>
										<SelectItem value="Massage cổ vai gáy">
											Massage cổ vai gáy
										</SelectItem>
										<SelectItem value="Gội đầu dưỡng sinh">
											Gội đầu dưỡng sinh
										</SelectItem>
										<SelectItem value="Gội đầu thường">
											Gội đầu thường
										</SelectItem>
										<SelectItem value="Ngâm chân thảo dược">
											Ngâm chân thảo dược
										</SelectItem>
										<SelectItem value=" Tắm lá thuốc người Dao đỏ">
											{" "}
											Tắm lá thuốc người Dao đỏ
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="time"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>
									Bạn sẽ ghé GBA vào ngày nào?
								</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												className={cn(
													"w-full pl-3 text-left font-normal border !border-black",
													!field.value &&
														"text-muted-foreground"
												)}
											>
												{field.value ? (
													format(
														field.value,
														"MM/dd/yyyy HH:mm"
													)
												) : (
													<span>
														MM/DD/YYYY HH:mm
													</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<div className="sm:flex">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={handleDateSelect}
												initialFocus
											/>
											<div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
												<ScrollArea className="w-64 sm:w-auto">
													<div className="flex sm:flex-col p-2">
														{Array.from(
															{ length: 24 },
															(_, i) => i
														)
															.reverse()
															.map((hour) => (
																<Button
																	key={hour}
																	size="icon"
																	variant={
																		field.value &&
																		field.value.getHours() ===
																			hour
																			? "default"
																			: "ghost"
																	}
																	className="sm:w-full shrink-0 aspect-square"
																	onClick={() =>
																		handleTimeChange(
																			"hour",
																			hour.toString()
																		)
																	}
																>
																	{hour}
																</Button>
															))}
													</div>
													<ScrollBar
														orientation="horizontal"
														className="sm:hidden"
													/>
												</ScrollArea>
												<ScrollArea className="w-64 sm:w-auto">
													<div className="flex sm:flex-col p-2">
														{Array.from(
															{ length: 12 },
															(_, i) => i * 5
														).map((minute) => (
															<Button
																key={minute}
																size="icon"
																variant={
																	field.value &&
																	field.value.getMinutes() ===
																		minute
																		? "default"
																		: "ghost"
																}
																className="sm:w-full shrink-0 aspect-square"
																onClick={() =>
																	handleTimeChange(
																		"minute",
																		minute.toString()
																	)
																}
															>
																{minute
																	.toString()
																	.padStart(
																		2,
																		"0"
																	)}
															</Button>
														))}
													</div>
													<ScrollBar
														orientation="horizontal"
														className="sm:hidden"
													/>
												</ScrollArea>
											</div>
										</div>
									</PopoverContent>
								</Popover>

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
