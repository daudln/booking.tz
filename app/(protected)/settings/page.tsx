import { auth } from "@/lib/auth";

const SettingsPage = async() => {
    const session = await auth()
  return (
    <div>
        <p>{JSON.stringify(session, null, 2)}</p>
    </div>
  )
}

export default SettingsPage