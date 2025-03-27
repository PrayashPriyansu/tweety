const links = [
  { name: "Features", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
];

function Header() {
  return (
    <div className="flex w-full border-b border-gray-200 h-fit px-4 py-4 items-center">
      <span className="text-3xl font-bold tracking-wide">Tweety</span>
      <div className="grow"></div>
      <ul className="flex gap-6 items-center ">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="grow"></div>
      <ul className="flex items-center gap-6">
        <li>
          <button className=" rounded-lg shadow cursor-pointer py-2 px-4 hover:bg-gray-100 bg-transparent font-semibold">
            Sign In
          </button>
        </li>
        <li>
          <button className="bg-black rounded-lg shadow cursor-pointer py-2 px-4 text-white">
            Get Started
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Header;
