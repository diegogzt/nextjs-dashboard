import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true;
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}