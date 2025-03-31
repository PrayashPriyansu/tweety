import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-[100dvh] flex flex-col bg-gray-900 text-white py-12">
      {/* Container */}
      <div className="grow"></div>
      <div className="max-w-6xl mx-auto  px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Company</h2>
          <p className="text-gray-400 mt-2 max-w-xs">
            Crafting innovative digital experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold text-white">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            {[
              { icon: Twitter, link: "#", label: "Twitter" },
              { icon: Linkedin, link: "#", label: "LinkedIn" },
              { icon: Github, link: "#", label: "GitHub" },
            ].map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8 mx-auto max-w-6xl"></div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Company. All rights reserved.
      </p>
    </footer>
  );
}
