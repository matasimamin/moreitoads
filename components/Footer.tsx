// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d3c7e004-c129-4f58-a53a-5762a61a044d/cb89d83ea394b25d9c6c70d8f6c44ee8.png"
              alt="Moreito Logo"
              className="w-40 h-auto filter brightness-0 invert opacity-90"
            />
            <p className="mt-4 text-sm">
              Professionella videotjänster för företag
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <h3 className="text-white font-medium mb-3">Tjänster</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Reklamvideos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sociala Medier
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Landningssidor
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Företag</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Om Oss
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Juridik</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Integritetspolicy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Villkor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Moreito. Alla rättigheter reserverade.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/moreito100?igsh=cDEyNGJjbHhscnR3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="..." clipRule="evenodd" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@moreito3?_t=ZN-8vfs6E6U0By&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="TikTok"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="..." />
              </svg>
            </a>

            <a
              href="#"
              className="hover:text-white transition"
              aria-label="YouTube"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="..." clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
