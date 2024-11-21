// Importazioni necessarie
// 1. useState per gestire lo stato (apertura/chiusura del menu).
// 2. LinkScroll per gestire i link con uno scorrimento fluido.
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

// Componente Header
// Questo componente rappresenta l'intestazione principale del sito, includendo:
// - Un logo
// - Un menu di navigazione
// - Un pulsante per aprire/chiudere il menu su dispositivi mobili
const Header = () => {
  const [hasScrolled, sethasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      sethasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Componente NavLink
  // Questo componente rappresenta un singolo link di navigazione.
  const NavLink = ({ title }) => (
    // Il link utilizza il componente "LinkScroll" per abilitare lo scorrimento fluido.
    // Viene applicato uno stile di base con una classe CSS e un effetto hover.
    <LinkScroll
      onClick={() => setisOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  // Stato "isOpen" per gestire l'apertura del menu mobile.
  // Valore iniziale: false (menu chiuso).
  const [isOpen, setisOpen] = useState(false);

  return (
    // Contenitore principale dell'intestazione
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Logo visibile solo su dispositivi mobili */}
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        {/* Contenitore del menu di navigazione */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            {/* Navigazione */}
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                {/* Colonna di sinistra con due link: Features e Pricing */}
                <li className="nav-li">
                  {/* Link per "Features" */}
                  <NavLink title="features" />
                  {/* Separatore decorativo (es. un punto) */}
                  <div className="dot" />
                  {/* Link per "Pricing" */}
                  <NavLink title="Pricing" />
                </li>

                {/* Logo centrale visibile solo su schermi grandi */}
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                {/* Colonna di destra con due link: FAQ e Download */}
                <li className="nav-li">
                  {/* Link per "FAQ" */}
                  <NavLink title="faq" />
                  {/* Separatore decorativo */}
                  <div className="dot"></div>
                  {/* Link per "Download" */}
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        {/* Pulsante per aprire/chiudere il menu su dispositivi mobili */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full justify-center items-center flex"
          onClick={() => setisOpen((prevState) => !prevState)} // Cambia lo stato "isOpen"
        >
          {/* Cambia l'icona in base allo stato "isOpen" */}
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
