import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import picture from "../assets/groceria-logo.png";
import mockup from "../assets/mockup.png";

export default function Projects() {
  return (
    <section id="projects" className="py-12 lg:py-24">
      <div className="from-yellow-300 via-purple-500 to-red-300 bg-gradient-to-br pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/4 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-6 h-full sm:max-w-3xl lg:h-full lg:p-0">
              <div data-aos="fade-up" className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none h-full lg:h-full hover:-translate-y-2 transition duration-300 ">
                <img className="relative object-cover h-full w-full max-w-full z-10" src={mockup} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div data-aos="fade-left">
                  <h2 className="text-2xl font-bold text-white mb-3 opacity-80 tracking-wide">PROJECTS</h2>
                  <img src={picture} alt="Groceria logo" className="h-12 mt-6" />
                  <p className="mt-6 text-md text-white">
                    Groceria is a robust <b>online grocery platform</b> offering authentication, cart management, and product recommendations. It leverages <b>user location for personalized store suggestions</b> within a 30 km radius, while
                    granting discounts, including buy one get one deals, and customizable vouchers. Admins efficiently handle orders, enhancing the shopping experience with a referral program for additional discounts.
                  </p>
                </div>
                <footer className="mt-6">
                  <div data-aos="fade-up" class="mt-10 flex justify-center gap-8 lg:justify-start">
                    <a
                      class="rounded-lg border text-white font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-white/[0.15] -my-1 -mx-1.5 pr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/purwadhikafullstack/JCWDOL0905"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-white">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                        ></path>
                      </svg>
                      Source Code
                    </a>
                    <a
                      class="rounded-lg border text-white font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-white/[0.15] -my-1 -mx-1.5 pr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://jcwdol0905.purwadhikabootcamp.com/"
                    >
                      <RocketLaunchIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                      Live Site
                    </a>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
