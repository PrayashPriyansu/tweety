const links = [
  { name: "Features", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
];

function Header() {
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
          <button className="px-4 py-2 text-white bg-transparent border border-gray-400 rounded-lg hover:bg-gray-700 transition">
            Sign In
          </button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
