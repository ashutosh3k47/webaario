"use client"
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    email: "",
    phone: "",
    website: "",
  });
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [submitting, setSubmitting] = useState(false); // State for form submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return; // Prevent multiple submissions
    setSubmitting(true);
    setLoading(true); // Start loading indicator

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwR7ZS-N7vJcBtkr55ckimT4-X5FZWX5-7GeCLPGPdgS9aJdwT_PYup5Z2oZ3-UsFh8/exec";

    const form = new FormData();
    form.append("name", formData.name);
    form.append("companyname", formData.companyname);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("website", formData.website);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });
      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Stop loading indicator
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-32">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Webaario
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Book a free consultation now to gain expert advice tailored to your
        specific needs.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Tyler Durden"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="companyname">Company name</Label>
            <Input
              id="companyname"
              name="companyname"
              placeholder="webmaker"
              type="text"
              value={formData.companyname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+91890XXXXXX"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="website">Web site link if applicable</Label>
          <Input
            id="website"
            name="website"
            placeholder="https://www.xyz.com"
            type="url"
            value={formData.website}
            onChange={handleChange}
          />
        </LabelInputContainer>

        {/* Conditional rendering of loading spinner/text */}
        {loading ? (
          <div className="flex items-center justify-center">
            <p className="text-neutral-600 dark:text-neutral-300"></p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white-900"></div>
          </div>
        ) : (
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={submitting}
            
             // Disable button while submitting
          >
            Send &rarr;
            <BottomGradient />
          </button>
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default SignupFormDemo;
