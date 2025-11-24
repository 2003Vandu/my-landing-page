import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Code,
  Users,
  Briefcase,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import bgImage from '../assets/bg.png';
import profileImage from '../assets/image1.jpg';
import resumePDF from '../assets/Doc/VAndeshGhodkeResume-update.pdf';
import aiResumeImage from '../assets/Doc/AI-Resume_generator/Ai-Resume.png';
import journalApp from'../assets/Doc/JournalAPP/journalApp.png'
import HackaThon from '../assets/Doc/Hackathon/HackaThon.jpg'
import Army512 from '../assets/Doc/Army512/Army512.jfif'
import uipathcert from '../assets/Doc/Uipath/uipathcert.jfif'
import GenAi from '../assets/Doc/GenAi/GenAi.jpeg'
import DroneFOR2DEnvironementMapping from '../assets/Doc/DroneFOR2DEnvironementMapping/DroneFOR2DEnvironementMapping.png'

const Navbar = ({ isMenuOpen, toggleMenu, scrollToSection }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 shadow-xl backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <h1
            className="text-xl sm:text-2xl font-extrabold text-white cursor-pointer hover:text-indigo-400 transition-colors"
            onClick={() => scrollToSection("home")}
          >
            &lt;DevVandesh&gt;
          </h1>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-8">
          {["Home", "About", "Services", "Portfolio", "Reviews", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-indigo-400 px-3 lg:px-5 py-4 text-sm font-medium transition duration-300"
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-gray-800 border-t border-gray-700">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Home", "About", "Services", "Portfolio", "Reviews", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  toggleMenu();
                }}
                className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition duration-300"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    )}
  </nav>
);

const HomeSection = ({ scrollToSection }) => (
  <section
    id="home"
    className="relative h-screen w-full flex items-center justify-center bg-gray-900"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative text-center text-white px-4 py-12 max-w-5xl mx-auto w-full">
      <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-indigo-300">
        Hello World!
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
        I'm <span className="text-indigo-500">Vandesh Ghodke</span>,
      </h1>
      <h2 className="text-2xl text-bold md:text-3xl lg:text-4xl font-light mb-10">
        Discipline from the Army, logic in code, heart in poetry—Full Stack Developer in a creative mode.
      </h2>
      <div className="flex justify-center">
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 md:px-10 lg:px-12 rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 active:scale-100 text-base md:text-lg"
        >
          Get In Touch
        </button>
      </div>
    </div>
  </section>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 md:mb-20 text-center px-4 w-full">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-5">
      {title}
    </h2>
    
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
      {subtitle}
    </p>
  </div>
);

const AboutSection = () => (
  <section id="about" className="bg-white dark:bg-gray-800 py-20 md:py-32 min-h-screen w-full flex items-center justify-center">
    <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl w-full">
      
        <SectionTitle
        title="About Me"
        
        />
        
       <div>  <h3 className="text-gray-800">.</h3> </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center gap-12 lg:gap-20 w-full">
        {/* Left: Portrait */}
        <div className="flex justify-center w-full lg:w-auto flex-shrink-0">
          <img
            src={profileImage}
            alt="Developer Portrait"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-indigo-400"
          />
        </div>

        {/* Right: Text + Skills */}
        <div className="w-full lg:flex-1 max-w-3xl">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-center lg:text-left">
            I’m Vandesh Ghodke, a Full Stack Developer skilled in HTML, CSS, Java, Spring Boot, JavaScript, React, and Bootstrap. I focus on building scalable, user-friendly applications and simplifying complex problems into clean, lasting solutions.

My internship at Army Workshop 512 (ASA Core Mechanical Training) trained me in a high-pressure, disciplined environment where accuracy, resilience, and critical thinking were essential. This mindset now drives the way I work.

Beyond coding, I express myself through poetry and shayari, blending creativity with logic to craft impactful solutions—both for machines and for people.
          </p>

          <div className="space-y-7 mb-10">
            {[
              { name: "Java", percentage: 87 },
              { name: "Spring Boot", percentage: 87 },
              { name: "React", percentage: 60 },
              { name: "Database [ MySql, MongoDB ]", percentage: 70 },
              { name: "Daisy UI, Chakra UI", percentage: 50 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-3">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-base md:text-lg">
                    {skill.name}
                  </p>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-base md:text-lg">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start mb-8 gap-8">
            <a
              href="https://github.com/2003Vandu"
              aria-label="Github"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Github className="w-8 h-8 md:w-9 md:h-9" />
            </a>
            <a
              href="https://www.linkedin.com/in/vandesh-ghodke-b832b730b"
              aria-label="Linkedin"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-8 h-8 md:w-9 md:h-9" />
            </a>
            <a
              href="mailto:vandeshghodke2003@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-8 h-8 md:w-9 md:h-9" />
            </a>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-10 md:px-12 rounded-full shadow-xl transition duration-300 transform hover:scale-105 text-base md:text-lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = {resumePDF}
                link.download = "Vandesh_Ghodke_Resume.pdf";
                link.click();
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-700 p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-indigo-200 dark:border-indigo-800 text-center h-full flex flex-col items-center justify-center">
    <Icon className="w-14 h-14 md:w-16 md:h-16 text-indigo-500 mx-auto mb-6" />
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
      {description}
    </p>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="bg-white dark:bg-gray-900 py-20 md:py-32 min-h-screen w-full flex items-center justify-center">
    <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl w-full">
      <SectionTitle
        title="My Services"
        subtitle="."
      />
      
      <div className="w-full">
        <div className="flex justify-center">
        <p className=" text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed text-center max-w-4xl mx-auto px-4">
          I offer a range of services to help drive your project forward,
          including web development, backend APIs, and consulting.
        </p>
        </div>
         <div>  <h3 className="text-gray-800">.</h3> </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          <ServiceCard
            icon={Code}
            title="Web Development"
            description="Building responsive and efficient web applications using modern frameworks like React, Daisy UI, Chakra UI."
          />
          <ServiceCard
            icon={Briefcase}
            title="Backend APIs"
            description="Designing and developing robust, scalable RESTful using Spring boot, or Python frameworks with secure database integration."
          />
          <ServiceCard
            icon={Users}
            title="Consulting"
            description="technology strategy, team mentorship for optimal development flow and project success."
          />
        </div>
      </div>
    </div>
  </section>
);

const PortfolioCard = ({ title, description, imageUrl, link }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-indigo-500/70 bg-gray-800 h-full flex flex-col mx-auto w-full">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center">{title}</h3>
      <p className="text-gray-300 text-base md:text-lg mb-6 flex-grow text-center leading-relaxed">{description}</p>
      <div className="flex justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group-hover:underline text-base md:text-lg"
        >
          View Project <ChevronRight className="w-5 h-5 ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const PortfolioSection = () => (
  <section
    id="portfolio"
    className="py-20 md:py-32 bg-white dark:bg-gray-800 min-h-screen w-full flex items-center justify-center"
  >
    <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl w-full">
      <SectionTitle
        title="Portfolio"
        subtitle="."
      />
      <div>  <h3 className="text-gray-800">.</h3> </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        <PortfolioCard
          title="AI-Resume Generator"
          description="Ai resume Generator To generate a resume Use open-source framework and Deepseek locally hosted llm with SpringBoot to get resume Content "
          imageUrl={aiResumeImage}
          link="https://github.com/2003Vandu/ai-resume-generator.git"
        />
        <PortfolioCard
          title="RealTime Chatting App"
          description="A real-time collaborative task manager built with React and Firebase Firestore, focusing on fast performance."
          imageUrl="https://placehold.co/600x400/93c5fd/1f2937?text=Chat+App"
          link="#"
        />
        <PortfolioCard
          title="JournalAPP"
          description="Journal App built with Spring Boot  backend application designed to manage journal entries, user accounts, and potentially provide functionalities like sentiment analysis or integration with other services to store and important work and details."
          imageUrl={journalApp}
          link="https://github.com/2003Vandu/journalApp.git"
        />
        <PortfolioCard
          title="DroneFOR2DEnvironementMapping"
          description="Drone FOR 2D Environement Mapping is used to create detailed maps of dangerous areas that humans cannot safely access, such as disaster sites, industrial facilities, or hazardous terrain"
          imageUrl={DroneFOR2DEnvironementMapping}
          link="https://github.com/2003Vandu/journalApp.git"
        />
      </div>
    </div>
  </section>
);

const ReviewCard = ({ name, role, review, imageUrl }) => (
  <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-2xl p-8 md:p-10 text-center border-t-4 border-indigo-500 h-full flex flex-col justify-between w-full">
    <p className="italic text-gray-700 dark:text-gray-300 mb-8 flex-grow leading-relaxed text-base md:text-lg">
      "{review}"
    </p>
    <div className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-5 border-4 border-indigo-500"
      />
      <p className="font-bold text-gray-900 dark:text-white text-base md:text-lg mb-1">{name}</p>
      <p className="text-sm md:text-base text-indigo-600 dark:text-indigo-400">{role}</p>
    </div>
  </div>
);

const ReviewsSection = () => (
  <section
    id="reviews"
    className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 min-h-screen w-full flex items-center justify-center"
  >
    <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl w-full">
      <SectionTitle
        title="Internship and Experience"
        subtitle="."
      />
          <div>  <h3 className="text-gray-800">.</h3> </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        <ReviewCard
          name="VM3 Tech Solutions LLP"
          role="Current Software Inter "
          review="Learning full-stack development using Spring Boot (backend) and React.js (frontend). 
                  Contributing to small-scale full-stack applications under senior guidance.
                  Nov-15-2025"
          imageUrl="https://placehold.co/200x200/4f46e5/ffffff?text=A"
        />
        <a href={Army512} target="_blank" rel="noopener noreferrer">
        <ReviewCard
          name="Indian Army Workshop 512, Pune (2024) "
          role=" Technical Intern "
          review="Assisted in system diagnostics, inventory data handling, and maintenance logs.
          Exposure to process automation, reporting tools, and workflow optimization.
          Learned discipline and precision in defense-grade environments"
          imageUrl={Army512}
          />
          </a>
        <a href={uipathcert} target="_blank" rel="noopener noreferrer">
        <ReviewCard
          name="UiPath RPA Developer Foundation Diploma – UiPath Academy"
          role="Automation Developer"
          review="To make a task autonomous, you use tools like UiPath Studio to build the automation, and then you can run it using the UiPath Assistant or manage it centrally with UiPath Orchestrator"
          imageUrl={uipathcert}
          />
          </a>
        <a href={HackaThon} target="_blank" rel="noopener noreferrer">
        <ReviewCard
          name="Techsurf-2025 @ Contentstack "
          role="participate Techsurf-2025"
          review="learn about frontend react and web dev frameworks and get valuable knowledge of new emerging technology"
          imageUrl={HackaThon}
        />
        </a>
        <a href={GenAi} target="_blank" rel="noopener noreferrer">
        <ReviewCard
          name="Generative AI Workshop"
          role="Generative AI Workshop"
          review="Hands-on with prompt engineering, API integration, and automation"
          imageUrl={GenAi}
          />
          </a>
        
  
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    id="contact"
    className="py-20 md:py-32 bg-white dark:bg-gray-800 min-h-screen w-full flex items-center justify-center"
  >
    <div className="w-full flex justify-center px-6 md:px-12">
      <div className="w-full max-w-5xl">
        <SectionTitle
          title="Get In Touch"
          
        />
         <div>  <h3 className="text-gray-800">.</h3> </div>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-3xl p-8 md:p-12 lg:p-16 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-2xl">
            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-5 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-5 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-5 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-none placeholder-gray-400"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 md:py-16">
    <div className="container mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center gap-10 md:gap-12 mb-8">
          <a
            href="https://github.com/2003Vandu"
            aria-label="Github"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <Github className="w-7 h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/vandesh-ghodke-b832b730b"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <Linkedin className="w-7 h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="mailto:vandeshghodke2003@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <Mail className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div>
        <p className="text-sm md:text-base text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Vandesh Ghodke. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />

      <main>
        <HomeSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}