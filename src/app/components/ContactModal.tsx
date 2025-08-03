"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import content from "@/lib/content"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    message: z.string().min(1, { message: "Message is required" }),
})

interface ContactModalProps {
    isOpen: boolean;
    onCloseAction: () => void;
}

export function ContactModal({ isOpen, onCloseAction  }: ContactModalProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // This would typically send the form data to a server
        console.log(values)
        alert("Form submitted successfully!")
        form.reset()
        onCloseAction()
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-[2px] bg-black/10 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold">{content.contactUs.title}</h2>
                    <button
                        onClick={onCloseAction}
                        className="text-black hover:text-gray-700 cursor-pointer"
                        aria-label="Close"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    <p className="text-black mb-6">
                        {content.contactUs.subtitle}
                    </p>

                    <Card className="border-0 shadow-none">
                        <CardContent className="p-0">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="firstName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{content.contactUs.form.firstName.label}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={content.contactUs.form.firstName.placeholder} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="lastName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{content.contactUs.form.lastName.label}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={content.contactUs.form.lastName.placeholder} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{content.contactUs.form.email.label}</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder={content.contactUs.form.email.placeholder} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{content.contactUs.form.message.label}</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder={content.contactUs.form.message.placeholder}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex justify-end gap-4">
                                        <Button type="button" variant="outline" onClick={onCloseAction} className="cursor-pointer">
                                            Cancel
                                        </Button>
                                        <Button type="submit" className="text-white cursor-pointer">
                                            {content.contactUs.form.submitButton}
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
