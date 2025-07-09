export default function Footer() {
  return (
    <footer className="text-black">
      <div className="flex flex-col lg:justify-between w-full lg:items-center">
        <div className="flex flex-col lg:flex-row w-full border-t border-zinc-700">
          {/* Left section: Find Us */}
          <div className="w-full flex flex-col gap-4 items-center lg:items-start py-7 lg:py-8 border-b lg:border-0 border-zinc-700">
            <p className="text-black-400 text-center md:text-left font-light text-base lg:text-lg lg:pl-20">
              FIND US
            </p>
            <div className="text-[14px] lg:pl-20 leading-none pr-2 font-light flex flex-wrap md:flex-nowrap md:max-w-[302px] items-end gap-3">
              {[
                {
                  href: "https://dribbble.com/alphasquadstudio",
                  label: "DRIBBBLE",
                },
                {
                  href: "https://www.linkedin.com/company/alphasquad-tech/",
                  label: "LINKEDIN",
                },
                {
                  href: "https://www.instagram.com/alphasquadtech/",
                  label: "INSTAGRAM",
                },
              ].map(({ href, label }) => (
                <div
                  key={label}
                  className="flex gap-1 md:gap-2 justify-center items-center text-xs md:text-sm leading-none"
                >
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="white" />
                  </svg>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right section: Addresses */}
          <div className="w-full flex flex-col md:flex-row divide-y divide-black-700 md:divide-y-0">
            {[
              "4275 Executive Square, Suite 200, LA Jolla, CA 92037, USA",
              "76/F, The Center, 99 Queens Road, Central, Hong Kong SAR",
              "12/14, rond-point des Champs Elysées, Paris, 75008",
              "The Olympus, F-11 Markaz, Islamabad, Pakistan",
            ].map((address, idx) => (
              <div
                key={idx}
                className="w-full flex justify-center items-center text-center md:py-7 p-6 lg:py-0 md:px-8 border-0 lg:border-l border-zinc-700 font-light text-xs md:text-sm text-[18px] text-black-400 leading-[125%]"
              >
                {address}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-zinc-700 py-6 md:py-8 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-8 mb-4 md:mb-0">
            <a
              href="/privacy-policy"
              className="text-black-400 font-light text-sm md:text-base leading-[130%] hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:howdy@alphasquad.tech"
              className="text-black-400 font-light text-sm md:text-base leading-[130%] hover:text-white"
            >
              Contact Us: <span className="text-black">howdy@alphasquad.tech</span>
            </a>
          </div>
          <p className="text-black-400 pt-8 md:pt-0 font-light text-xs md:text-base leading-[130%] text-center md:text-right">
            © ALPHASQUAD LLC 2025 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}