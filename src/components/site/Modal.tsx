import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-up"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg glass-strong rounded-3xl p-8 md:p-10">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition"
        >
          <X className="h-4 w-4" />
        </button>
        {title && (
          <h3 className="text-2xl md:text-3xl font-display font-semibold pr-8">
            {title}
          </h3>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
