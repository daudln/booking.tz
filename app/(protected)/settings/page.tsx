import { Button } from "@/components/ui/button";
import { signOut, auth } from "@/lib/auth";

const SettingsPage = async() => {
    const session = await auth()
  return (
    <div>
        <p>{JSON.stringify(session, null, 2)}</p>
        <form action={
          async() => {
            "use server"
            await signOut()
          }
        }>
          <Button variant="destructive" type="submit">Signout</Button>
        </form>
        
    </div>
  )
}

export default SettingsPage