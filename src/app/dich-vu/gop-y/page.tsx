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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	feedback: z.string({
		message: "vui lòng nhập ",
	}),
});
type FormValues = z.infer<typeof formSchema>;
export default function Page() {
	const [open, setOpen] = React.useState(false);
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema), // <- KHÔNG truyền generic vào zodResolver
		defaultValues: {
			feedback: "",
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="min-h-screen px-2 h-full flex flex-col gap-4 items-center justify-center w-full ">
			<Image src={"/le-tan.gif"} alt="le-tan" width={400} height={500} />
			<h1 className="uppercase text-4xl lg:text-3xl font-semibold text-amber-500 ">
				Góp ý/phản hồi
			</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-80 md:w-xl "
				>
					<FormField
						control={form.control}
						name="feedback"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Bạn có góp ý / phản hồi gì về GBA, hãy cho
									chúng tôi biết nhé!
								</FormLabel>
								<FormControl className="border !border-black">
									<Textarea
										{...field}
										placeholder="Nhập góp ý hoặc phản hồi..."
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-full bg-amber-600" type="submit">
						Gửi phản hồi
					</Button>
				</form>
			</Form>
		</div>
	);
}
