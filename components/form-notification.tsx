import { cn } from "@/lib/utils";
import { Info, IconNode } from "lucide-react";

type Props = {
  message: string;
  type: "error" | "success" | "info";
  icon?: IconNode;
};

const FormNotification = ({ type, message, icon }: Props) => {
  return (
    <div
      className={cn(
        "w-full rounded-md p-3 text-sm flex items-center gap-x-2 text-center justify-center",
        type === "error"
          ? "bg-destructive/15 text-destructive"
          : type === "success"
          ? "bg-emerald-500/15 text-emerald-500"
          : type === "info"
          ? "bg-yellow-500/15 text-yellow-500"
          : ""
      )}
    >
      <Info className="h-5 w-5" />
      <span>{message}</span>
    </div>
  );
};

export default FormNotification;
