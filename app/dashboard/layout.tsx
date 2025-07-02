import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop layout */}
      <div className="hidden md:flex">
        <SideNav />
        <main className="flex-1 p-6 bg-black overflow-y-auto">{children}</main>
      </div>
      
      {/* Mobile layout */}
      <div className="md:hidden">
        <main className="p-4 pb-20 bg-black min-h-screen">{children}</main>
        <SideNav />
      </div>
    </div>
  );
}
