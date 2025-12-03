"use client";
import { RegisterModalProps } from "@/lib/types/register";
import { X } from "lucide-react";
import React from "react";

export default function RegisterModal({ open, onClose, children }:RegisterModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-black rounded-xl shadow-lg w-full max-w-4xl p-0 relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X/>
        </button>

        {children}
      </div>
    </div>
  );
}
