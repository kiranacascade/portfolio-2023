import Feeds from "../components/Feeds";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div data-aos="fade-right" className="w-full px-4 mb-10 lg:w-1/2">
            <div className="relative lg:right-0">
              <div className="absolute top-4 -left-0 w-72 h-72 md:scale-125 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
              <div className="absolute top-4 right-10 lg:right-12 w-72 h-72 md:scale-125 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-16 left-16 lg:left-36 w-72 h-72 md:scale-125 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-4000"></div>
              <div className="relative mt-4 lg:mt-10 px-5">
                <Feeds />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="w-full mt-4 px-4 lg:w-1/2 my-auto">
            <h2 className="text-3xl font-bold text-darkGray mb-4">ABOUT ME</h2>
            <p className="mb-2 text-darkGray">
              Hello! I'm Kirana Devita Cascade, a Visual Communication Design graduate and a <b>passionate graphic designer evolved into a tech enthusiast</b>. I ventured into crafting diverse designs, including captivating web interfaces,
              which ignited my fervor for technology. Fueled by a belief in its boundless potential, I embarked on a self-guided programming journey, sculpting my coding proficiency.
            </p>
            <p className="mb-2 text-darkGray">
              Armed with a comprehensive <b>Full Stack Web Development education from Purwadhika</b>, I stand at the convergence of creativity and technology. Having delved into real projects, I've honed my skills in{" "}
              <b>HTML, CSS, JavaScript, React.js, Express.js, Node.js, and MySQL</b>. Ready to craft captivating digital stories, I'm poised to contribute to the evolving tech landscape, channeling enthusiasm into impactful innovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
