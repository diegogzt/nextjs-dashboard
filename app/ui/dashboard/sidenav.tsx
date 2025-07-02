import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full flex-col px-3 py-4 md:px-2 bg-gray-900 border-r border-gray-800 w-64">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-lime-400 p-4 md:h-40"
          href="/"
        >
          <div className="w-32 text-black md:w-40">
            <AcmeLogo />
          </div>
        </Link>
        <div className="flex grow flex-col space-y-2">
          <NavLinks />
          <div className="h-auto w-full grow rounded-md bg-gray-800"></div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="flex h-[48px] w-full items-center justify-start gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium text-gray-300 hover:bg-lime-400 hover:text-black transition-all duration-300">
              <PowerIcon className="w-6" />
              <div>Sign Out</div>
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800">
        <div className="flex justify-around items-center py-2">
          <NavLinks />
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="flex flex-col items-center justify-center p-2 text-xs font-medium text-gray-300 hover:text-lime-400 transition-all duration-300">
              <PowerIcon className="w-6 h-6 mb-1" />
              <span>Salir</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
