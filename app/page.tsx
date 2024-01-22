import NavigationButton from "@/components/navigation-button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4">
      <div>
        <h1 className="text-3xl font-bold  drop-shadow-md">Booking TZ</h1>
      </div>
      <div >
        <NavigationButton to="/signin" label="Signin"/>
      </div>
    </main>
  );
}
