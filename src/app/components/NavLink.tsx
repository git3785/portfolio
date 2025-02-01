import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  ariaLabel?: string; // Optional aria-label for accessibility
}

const NavLink = ({ href, title, ariaLabel }: NavLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel || title} // Provide aria-label if available
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
