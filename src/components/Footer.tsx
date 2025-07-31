export default function Footer() {
  return (
    <footer className="text-black bg-white">
      <div className="flex flex-col lg:justify-between w-full lg:items-center">
        <div className="flex flex-col lg:flex-row w-full border-t border-zinc-300">
          {/* Left section: Find Us */}
          <div className="w-full flex flex-col gap-3 sm:gap-4 items-center lg:items-start py-4 sm:py-6 lg:py-7 border-b lg:border-0 border-zinc-300 px-4 sm:px-6">
            <p className="text-gray-600 text-center lg:text-left font-light text-sm sm:text-base lg:text-lg lg:pl-8">
              FIND US
            </p>
            <div className="text-xs sm:text-sm lg:pl-8 leading-none pr-2 font-light flex flex-wrap justify-center lg:justify-start lg:max-w-[400px] items-center gap-2 sm:gap-3">
              {[
                {
                  href: "https://www.linkedin.com/company/lunchboxdigital/about/?viewAsMember=true",
                  label: "LINKEDIN",
                },
                {
                  href: "https://www.facebook.com/share/1DMabhZrma/",
                  label: "FACEBOOK",
                },
                {
                  href: "https://www.instagram.com/lunchb0x.ca?igsh=NXMwbWNpOGd1Z3Bs",
                  label: "INSTAGRAM",
                },
              ].map(({ href, label }) => (
                <div
                  key={label}
                  className="flex gap-1 sm:gap-2 justify-center items-center text-xs sm:text-sm leading-none"
                >
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-2 sm:h-2"
                  >
                    <circle cx="4" cy="4" r="4" fill="black" />
                  </svg>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                  >
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right section: Addresses */}
          {/* <div className="w-full flex flex-col md:flex-row divide-y divide-black-700 md:divide-y-0">
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
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-zinc-300 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 md:gap-8">
            <a
              href="/privacy-policy"
              className="text-gray-600 font-light text-xs sm:text-sm md:text-base leading-[130%] hover:text-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:howdy@alphasquad.tech"
              className="text-gray-600 font-light text-xs sm:text-sm md:text-base leading-[130%] hover:text-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              Contact Us: howdy@alphasquad.tech
            </a>
          </div>
          <p className="text-gray-600 font-light text-xs sm:text-sm md:text-base leading-[130%] text-center sm:text-right">
            © LUNCHBOX 2025 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}