import cv from "../assets/pdf/cv-kirana-cascade.pdf";
import picture from "../assets/kirana-cascade.png";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section id="home" className="pt-36 md:pt-0">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          <div data-aos="fade-right" className="w-full self-center px-4 md:w-1/2 lg:w-7/12">
            <h1 className="text-4xl font-bold text-dark lg:text-6xl">
              Hi<span className="text-gray">,</span>
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold text-dark">
              I am <span className="text-primary">Kirana Cascade</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium pt-2 md:pt-3 lg:pt-4 mb-2 lg:mb-4 text-darkGray">Fullstack Web Developer</h2>
            <p className="text-base text-gray pt-2 mb-10 leading-relaxed">
              A <b>Visual Communication Design graduate</b> exploring <b>Full Stack Web Development</b>, fusing design finesse with coding for captivating digital experiences. On a continuous journey of learning and growth, I eagerly
              explore the dynamic convergence of creativity and technology. Let's embark on this exciting path together!
            </p>
            <a href={cv} download="cv-kirana-cascade.pdf" className="text-white text-base font-semibold bg-primary py-2 px-6 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mr-6">
              Download CV
            </a>
            <a href="https://github.com/kiranacascade" target="_blank" rel="noopener noreferrer" className="text-darkGray text-base font-semibold py-2 hover:underline hover:underline-offset-2 duration duration-300">
              See my Github
              <ArrowSmallRightIcon className="inline ml-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div className="w-full self-end px-4 md:w-1/2 lg:w-5/12">
            <div className="relative lg:right-0">
              <div className="absolute top-4 -left-4 w-72 h-72 md:scale-125 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-4 right-10 lg:-righ-4 w-72 h-72 md:scale-125 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
              <div className="absolute top-16 left-8 lg:left-24 w-72 h-72 md:scale-125 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-4000"></div>

              <div className="relative mt-10 px-5 md:px-0 lg:px-5">
                <img src={picture} alt="Kirana Cascade" className="max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
