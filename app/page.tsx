import LoginForm from "@/components/login-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 justify-center">
      <div>
        <h1 className="text-3xl font-bold">Booking Tz</h1>
      </div>
      <div>
        <Button variant="default">Book</Button>
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        <LoginForm/>
      </div>
    </main>
  );
}
