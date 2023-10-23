import { useState } from "react";

const links = [
  {
    name: 'Alimentación',
    href: './pages/Dietas.tsx',
    alt: 'Alimentación saludable'
  },
  {
    name: 'Ejercitación',
    href: './pages/Rutinas.tsx',
    alt: 'Series de ejercicios para hacer'
  },
  {
    name: 'Acerca de Nosotros',
    href: '/#AcercaDe',
  },
  {
    name: 'Contacto',
    href: '/#Contacto',
  },
  {
    name: 'Blog',
    href: '/#Informacion',
  },
  {
    name: 'perfil',
    href: '/#PerfilUsuario',
  },
  {
    name: 'Iniciar Sesión',
    href: '/#PerfilUsuario',
  },
  {
    name: 'Crear Cuenta',
    href: '/#PerfilUsuario',
  }
];


const AppHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div id="header" className="flex fixed z-50 w-full bg-gray-800 bg-gradient-to-b from-black/80 to-red-950/80 text-red-100 border-b border-red-50/30">
        <a href="/"
          className="flex my-4 mx-4 font-bold text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-600 hover:text-white group transform active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="red" className="h-6 w-6 group-hover:stroke-white"
            viewBox="-20 0 131 173">
            <path id="mejor" fill="none" stroke-width="6"
              d="M 104.05,170.13 C 96.05,166.63 76.55,141.26 77.80,132.13 78.93,134.99 95.95,150.01 94.12,146.00M 22.71,53.73 C 59.67,67.09 74.13,28.95 55.75,11.00 30.87,-12.96 -11.06,21.77 22.75,53.38 23.00,67.03 -8.99,80.27 10.00,122.00 9.94,123.73 25.22,126.68 25.25,125.75 27.88,137.88 72.88,137.24 77.80,132.13M 16.64,113.31 C 17.91,114.72 8.71,116.73 7.00,114.82M 37.81,56.49 C 37.81,56.49 37.44,91.88 37.44,91.88 57.10,65.00 82.62,83.61 89.27,110.47 92.98,130.68 98.61,146.14 128.55,150.50M 119.00,81.50 C 111.45,76.38 87.64,75.08 77.71,88.26M 29.25,81.40 C 26.31,76.68 36.46,65.39 37.81,56.50M 88.16,106.61 C 83.14,118.84 44.65,121.24 38.86,101.63 37.30,99.96 35.13,101.45 37.44,91.91 37.44,91.91 26.25,100.19 26.25,100.12M 59.74,89.91 C 49.26,88.26 41.52,96.26 38.86,101.65M 93.02,125.33 C 83.19,126.75 71.62,124.77 68.36,115.96 72.38,124.50 74.66,122.97 77.80,132.13M 58.59,115.59 C 53.92,123.25 33.98,126.38 25.27,125.80M 56.83,128.62 C 56.75,129.07 45.18,124.98 45.51,123.23M 36.39,45.38 C 12.83,44.23 19.37,12.70 37.07,13.56M 36.39,45.38 C 54.00,48.12 60.88,15.90 37.07,13.56M 36.28,25.09 C 31.51,24.45 28.56,33.66 36.39,34.57M 36.39,34.57 C 41.44,34.99 44.01,25.68 36.28,25.09" />
          </svg>
          <p>CBOOM</p>
          <svg xmlns="http://www.w3.org/2000/svg" stroke="red" className="h-6 w-6 tansform scale-x-[-1] group-hover:stroke-white" viewBox="-20 0 131 173">
            <path id="mejor" fill="none" stroke-width="6"
              d="M 104.05,170.13 C 96.05,166.63 76.55,141.26 77.80,132.13 78.93,134.99 95.95,150.01 94.12,146.00M 22.71,53.73 C 59.67,67.09 74.13,28.95 55.75,11.00 30.87,-12.96 -11.06,21.77 22.75,53.38 23.00,67.03 -8.99,80.27 10.00,122.00 9.94,123.73 25.22,126.68 25.25,125.75 27.88,137.88 72.88,137.24 77.80,132.13M 16.64,113.31 C 17.91,114.72 8.71,116.73 7.00,114.82M 37.81,56.49 C 37.81,56.49 37.44,91.88 37.44,91.88 57.10,65.00 82.62,83.61 89.27,110.47 92.98,130.68 98.61,146.14 128.55,150.50M 119.00,81.50 C 111.45,76.38 87.64,75.08 77.71,88.26M 29.25,81.40 C 26.31,76.68 36.46,65.39 37.81,56.50M 88.16,106.61 C 83.14,118.84 44.65,121.24 38.86,101.63 37.30,99.96 35.13,101.45 37.44,91.91 37.44,91.91 26.25,100.19 26.25,100.12M 59.74,89.91 C 49.26,88.26 41.52,96.26 38.86,101.65M 93.02,125.33 C 83.19,126.75 71.62,124.77 68.36,115.96 72.38,124.50 74.66,122.97 77.80,132.13M 58.59,115.59 C 53.92,123.25 33.98,126.38 25.27,125.80M 56.83,128.62 C 56.75,129.07 45.18,124.98 45.51,123.23M 36.39,45.38 C 12.83,44.23 19.37,12.70 37.07,13.56M 36.39,45.38 C 54.00,48.12 60.88,15.90 37.07,13.56M 36.28,25.09 C 31.51,24.45 28.56,33.66 36.39,34.57M 36.39,34.57 C 41.44,34.99 44.01,25.68 36.28,25.09" />
          </svg>
        </a>
        <nav id="navbar" className="hidden md:flex">
          <ul className="flex my-4 mr-4 divide-x divide-red-500/40">
            {links.map((link, i) => <li key={`nav-item-${i}`} className="text-sm text-gray-400 hover:text-gray-300 px-3 hover:underline-offset-4 hover:underline"><a className="transform active:scale-90" href={link.href}>{link.name}</a></li>)}
            
          </ul>
        </nav>

        <div className="inline-flex md:hidden ml-auto mr-8 transform active:scale-90">
          <button
            id="mobile-menu-button"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="-m-2.5  text-stale-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`${isMobileMenuOpen ? 'flex flex-col' : 'hidden'} w-full z-40 mt-20 text-stale-600 text-lg text-center gap-y-1 py-8 `}
        >
          {links.map((link, i) => <a key={`mobile-nav-item-${i}`} href={link.href} className="rounded-xl hover:bg-red-800 hover:text-stale-400 py-3 transform active:scale-90">{link.name}</a>)}
        </div>
      </div>

    </>
  );
};

export default AppHeader;


