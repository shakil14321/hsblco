"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, User, Briefcase, Link as LinkIcon, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// 1. Define the Schema with Zod
const careerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    designation: z.string().min(2, "Please specify a role"),
    cvLink: z.string().url("Please provide a valid URL for your CV"),
    address: z.string().min(5, "Address is required"),
    coverLetter: z.string().min(20, "Please provide a brief introduction (min 20 chars)")
});

type CareerFormValues = z.infer<typeof careerSchema>;

export const CareerFormSection = () => {
    // 2. Initialize React Hook Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<CareerFormValues>({
        resolver: zodResolver(careerSchema)
    });

    const onSubmit = async (data: CareerFormValues) => {
        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Validated Data:", data);
        alert("Application submitted successfully!");
        reset();
    };

    return (
        <section className=" px-4">
            <div className="rounded-[2.5rem] philosophy-bg p-8 md:p-20 text-white overflow-hidden relative shadow-2xl">
                <div className="container mx-auto px-3">
                    <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-secondary rounded-full blur-[120px] opacity-40"></div>
                    <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                Can&apos;t Find the <br /> <span className="text-secondary">Perfect Role?</span>
                            </h2>
                            <p className="text-lg text-blue-50 leading-relaxed max-w-md">
                                Submit your profile to our talent pool. We prioritize proactive candidates for upcoming AI and engineering projects.
                            </p>

                            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                                <div className="bg-white p-3 rounded-xl shadow-lg"><Mail className="text-primary" size={24} /></div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-secondary font-bold">Direct Inquiry</p>
                                    <a href="mailto:hr@hsblco.com" className="font-bold text-xl hover:text-secondary transition-colors">hr@hsblco.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="border border-blue-300/50 rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><User size={12} /> Name</label>
                                        <Input {...register("name")} placeholder="John Doe" className={errors.name ? "border-red-500" : ""} />
                                        {errors.name && <p className="text-[10px] text-red-500 font-medium">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><Mail size={12} /> Email</label>
                                        <Input {...register("email")} type="email" placeholder="john@example.com" className={errors.email ? "border-red-500" : ""} />
                                        {errors.email && <p className="text-[10px] text-red-500 font-medium">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><Briefcase size={12} /> Role</label>
                                        <Input {...register("designation")} placeholder="e.g. Lead Dev" className={errors.designation ? "border-red-500" : ""} />
                                        {errors.designation && <p className="text-[10px] text-red-500 font-medium">{errors.designation.message}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><LinkIcon size={12} /> CV Link</label>
                                        <Input {...register("cvLink")} placeholder="Link to PDF/Drive" className={errors.cvLink ? "border-red-500" : ""} />
                                        {errors.cvLink && <p className="text-[10px] text-red-500 font-medium">{errors.cvLink.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><MapPin size={12} /> Address</label>
                                    <Input {...register("address")} placeholder="City, Country" className={errors.address ? "border-red-500" : ""} />
                                    {errors.address && <p className="text-[10px] text-red-500 font-medium">{errors.address.message}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><FileText size={12} /> Cover Letter</label>
                                    <Textarea {...register("coverLetter")} placeholder="Tell us about yourself..." className={`min-h-20 ${errors.coverLetter ? "border-red-500" : ""}`} />
                                    {errors.coverLetter && <p className="text-[10px] text-red-500 font-medium">{errors.coverLetter.message}</p>}
                                </div>

                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full bg-primary hover:bg-slate-900 text-white py-6 rounded-2xl font-bold transition-all"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Application"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};