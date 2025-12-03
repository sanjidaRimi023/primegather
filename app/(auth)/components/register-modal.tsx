"use client";

import { RegisterModalProps } from "@/lib/types/register";
import Image from "next/image";
import RegisterModalBase from "./register-modal-base";
import RegisterForm from "./register-form";

export default function RegisterModal({ open, onClose }: RegisterModalProps) {
  return (
    <RegisterModalBase open={open} onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6">
          <RegisterForm />
        </div>

        {/* Right: Image */}
        <div className="hidden md:block">
          <Image
            width={300}
            height={300}
            src="/image2.jpg"
            alt="Register"
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
      </div>
    </RegisterModalBase>
  );
}
