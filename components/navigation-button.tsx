"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  to: string;
  label:string
};

const NavigationButton = ({ to, label }: Props) => {
  const router = useRouter();
  return <Button variant="link" onClick={() => router.push(to)}>{label}</Button>;
};

export default NavigationButton;
