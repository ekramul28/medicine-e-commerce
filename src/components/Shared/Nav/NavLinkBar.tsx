"use client";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const NavLinkBar = () => {
  const pathname = usePathname();

  const pages = [
    {
      nav: "Home",
      route: "/",
    },
    {
      nav: "Challenges",
      route: "/challenges",
    },
    {
      nav: "Pricing",
      route: "/pricing",
    },
    {
      nav: "Blog",
      route: "/blog",
    },
    {
      nav: "Trainers",
      route: "/trainers",
    },
    {
      nav: "Dashboard",
      route: "/dashboard",
    },
  ];

  const handleCloseNavMenu = () => {};

  return (
    <div className="flex justify-center items-center gap-4 border-t-2 font-medium text-base py-3">
      {pages.map((page) => (
        <Link href={page.route} key={page.route}>
          <div
            className={`text-center ${
              pathname === page.route ? "text-blue-500" : "text-black"
            }`}
            onClick={handleCloseNavMenu}
          >
            {page.nav}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavLinkBar;
