import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-white/70">
          {label}
          {props.required && <span className="text-brand-coral ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={`w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral/50 focus:shadow-[0_0_15px_rgba(255,59,48,0.1)] ${error ? "border-brand-coral/50" : ""} ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-brand-coral">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-white/70">
          {label}
          {props.required && <span className="text-brand-coral ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          className={`w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral/50 focus:shadow-[0_0_15px_rgba(255,59,48,0.1)] resize-none ${error ? "border-brand-coral/50" : ""} ${className}`}
          rows={5}
          {...props}
        />
        {error && <p className="text-sm text-brand-coral">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
