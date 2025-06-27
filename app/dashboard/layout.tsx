import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true;
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen bg-black">
      <SideNav />
      <main className="flex-1 p-6 bg-black">
        {children}
      </main>
    </div>
  );
}