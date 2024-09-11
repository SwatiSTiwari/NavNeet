
import { useToast } from "@/hooks/use-toast";
import { Toast } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 flex flex-col gap-2">
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} />
      ))}
    </div>
  );
}
