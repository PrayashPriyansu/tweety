import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const links = [
  { name: "Features", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
];

async function Header() {
  const { userId } = await auth();

  return (
    <header className=" w-full bg-[#020617] backdrop-blur-lg ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-3xl font-bold tracking-wide text-white">
          Tweety
        </span>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {userId ? (
            <Link href={"/dashboard"}>
              <button className="px-4 py-2 text-white hover:cursor-pointer bg-purple-500 rounded-2xl hover:bg-purple-600 transition-all duration-300">
                Dashboard
              </button>
            </Link>
          ) : (
            <SignInButton withSignUp>
              <span className="px-4 py-2 text-white bg-purple-500   rounded-2xl hover:bg-purple-600 hover:cursor-pointer  transition-all duration-300">
                Sign In
              </span>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
