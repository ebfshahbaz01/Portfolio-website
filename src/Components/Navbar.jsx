import { useState } from "react";
import { X, Menu } from "lucide-react";

import { Link } from "react-router-dom";

function Navbar() {
  const data = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/About" },
    { id: 3, name: "Skills", href: "/skills" },
    { id: 4, name: "Portfolio", href: "/portfolio" },
    { id: 5, name: "Contact Us", href: "/contactus" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="sticky top-4 z-50 md:mx-40 text-xl flex justify-between items-center border-white/10 px-8 py-5 rounded-2xl border bg-black/2 backdrop-blur-lg text-white">
        
        <div className="font-bold text-2xl text-white/80">
          Shahbaz Rahar
        </div>

        {/* Desktop Links Container */}
        <div>
          <ul className="lg:flex hidden justify-between gap-8">
            {data.map((item) => (
              <li key={item.id} className="nav-item">
                <Link to={item.href} className="nav-link hover:text-white/60 transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="lg:hidden flex items-center">
          <button className="focus:outline-none" onClick={handleToggle} aria-label="Toggle Menu">
            {!menuOpen ? <Menu size={36} strokeWidth={2.5} /> : <X size={36} strokeWidth={2.5} />}
          </button>

          
          {menuOpen && (
            <ul className="absolute top-[calc(100%+12px)] left-0 right-0 flex flex-col items-center gap-6 p-8 bg-white/20 backdrop-blur border border-white/10 rounded-2xl text-2xl animateNav shadow-2xl z-50">
              {data.map((item) => (
                <li key={item.id} className="nav-item w-full text-center">
                  <Link to={item.href} className="nav-link block py-2 hover:text-white/60 transition-colors" onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
