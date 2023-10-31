import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import CompleteReading from "../../components/CompleteReading";
import config from "../../config";
import User from "../../models/User";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server component which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from("users")
    .select()
    .eq("id", session.user.id)
    .single<User>();

  if (data?.customerId !== "admin") {
    redirect(config.auth.loginUrl);
  }

  return (
    <main className="min-h-screen p-8 pb-24">
      <div className="flex">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Voltar
        </Link>
      </div>
      <CompleteReading />
    </main>
  );
}
