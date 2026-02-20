import Image from "next/image";
import { addUser } from "./server-action/action";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <form action={addUser}>
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            className="border p-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2">
            Yuborish
          </button>
        </form>
    </div>
  );
}
