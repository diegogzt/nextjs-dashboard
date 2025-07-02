"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

interface NavLinksProps {
  onLinkClick?: () => void;
}

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2 rounded-md p-2 md:p-3 text-xs md:text-sm font-medium transition-all duration-300 md:h-[48px] md:grow md:flex-none ${
              isActive
                ? "bg-lime-400 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-lime-400"
            }`}
          >
            <LinkIcon className="w-5 h-5 md:w-6 md:h-6" />
            <p className="md:hidden text-xs">{link.name}</p>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
