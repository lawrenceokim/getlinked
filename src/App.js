import { useState } from "react";
import "./App.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import {
  RiTwitterXFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiMenu4Fill,
} from "react-icons/ri";

function App() {
  const [close, setClose] = useState(true);
  const [contact, setContact] = useState(false);

  const handleMobileNav = () => {
    setClose(false);
  };
  const handleCloseMobileNav = () => {
    setClose(true);
  };
  const handleContactNav = () => {
    setContact(true);
  };
  const handleCloseContactNav = () => {
    setContact(false);
  };

  return (
    <div className="bg-primary mx-auto h-screen w-screen text-white overflow-y-scroll overflow-x-hidden">
      {!contact ? (
        <>
          {close && (
            <>
              <Navbar
                handleMobileNav={handleMobileNav}
                handleCloseContactNav={handleCloseContactNav}
                handleContactNav={handleContactNav}
              />
              <Header />
              <Introduction />
              <RulesGuidelines />
              <JudgingCriteria />
              <FAQs />
              <Timeline />
              <PrizesReward />
              <PartnersSponsors />
              <PrivacyTerms />
              <Footer />
            </>
          )}{" "}
        </>
      ) : (
        <Contact handleCloseContactNav={handleCloseContactNav} />
      )}
      {!close && <NavbarMobile handleCloseMobileNav={handleCloseMobileNav} />}
    </div>
  );
}

export default App;

function Navbar({ handleMobileNav, handleContactNav }) {
  return (
    <section className="flex items-center justify-between py-5 md:px-20 px-4 border-b-[2px] border-b-pink/10 max-w-7xl mx-auto">
      <p className="text-4xl font-bold cursor-pointer">
        get<span className="text-pink">linked</span>
      </p>
      <nav className="hidden lg:flex items-center gap-20 font-serrat font-normal text-base">
        <ul className="hidden gap-10 sm:flex">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li onClick={handleContactNav}>Contact</li>
        </ul>
        <Button
          handleContactNav={handleContactNav}
          onClick={() => handleContactNav}
        >
          Register
        </Button>
      </nav>
      <div
        className="md:hidden block text-3xl rotate-180 cursor-pointer"
        onClick={handleMobileNav}
      >
        <RiMenu4Fill />
      </div>
    </section>
  );
}

function NavbarMobile({ handleCloseMobileNav }) {
  return (
    <section className=" md:hidden flex flex-col h-screen w-screen items-start py-10">
      <button
        className="flex self-end items-center justify-center font-normal cursor-pointer mr-5 outline outline-2 outline-purple rounded-full h-5 w-5"
        onClick={handleCloseMobileNav}
      >
        X
      </button>
      <nav className="md:hidden flex flex-col items-start ml-[10%] gap-20 font-serrat font-normal text-base mt-10">
        <ul className="gap-10 flex flex-col">
          <li
            className="flex self-start text-left justify-start"
            onClick={handleCloseMobileNav}
          >
            Timeline
          </li>
          <li
            className="flex self-start text-left justify-start"
            onClick={handleCloseMobileNav}
          >
            Overview
          </li>
          <li
            className="flex self-start text-left justify-start"
            onClick={handleCloseMobileNav}
          >
            FAQs
          </li>
          <li
            className="flex self-start text-left justify-start"
            onClick={handleCloseMobileNav}
          >
            Contact
          </li>
        </ul>
        <Button>Register</Button>
      </nav>
    </section>
  );
}

function Contact() {
  return (
    <div className="flex w-full items-center justify-between">
      <div>1</div>
      <div>2</div>
    </div>
  );
}

function Header() {
  return (
    <section className="relative flex flex-col xs:px-4 md:px-2 md:pt-16 xs:pt-5 min-h-max border-b-[2px] border-b-pink/10  max-w-7xl mx-auto">
      <h3 className="md:text-right text-center md:mr-14 font-serrat italic md:text-3xl font-bold">
        Igniting a Revolution in HR{" "}
        <span className="relative">
          Innovation
          <img
            src="./vector 4.png"
            alt="horizontal-vector-line"
            className="absolute right-0 md:max-w-xs"
          />
        </span>
      </h3>

      <div className="md:mt-10 flex md:flex-row xs:flex-col md:justify-center w-full">
        <div className="md:w-1/2 w-full flex flex-col xs:items-center md:ml-20 md:mt-[100px] xs:mt-16">
          <h3 className="md:text-[75px] xs:text-2xl xs:text-center md:text-3xl md:text-left font-bold xs:w-[60%] md:w-full">
            getlinked{" "}
            <span className="relative">
              Tech
              <img
                src="./Creative 1.png"
                alt="bulb light"
                className="absolute md:-top-[90%] md:right-10 xs:-top-[100%] xs:right-5 xs:w-[40%]"
              />
            </span>
          </h3>
          <h3 className="md:text-[75px] xs:text-2xl xs:text-center md:text-3xl md:text-left font-bold xs:w-[60%] md:w-full md:mt-14">
            Hackathon
            <span className="relative text-pink">
              1.0
              <img
                src="./chain.png"
                alt="chain"
                className="absolute w-full h-auto -right-[100%] top-0"
              />
              <img
                src="./1f4a5.png"
                alt="spark"
                className="absolute w-full h-auto -right-[200%] top-0"
              />
            </span>
          </h3>

          <p className="mt-5 md:text-left xs:text-center">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="flex w-full items-center md:justify-start xs:justify-center">
            <Button padx={30} margintop={30} maxW={200}>
              Register
            </Button>
          </div>
          <div className="flex gap-5 mt-4 md:mt-[77px] justify-center md:justify-start w-full">
            <p className="font-normal text-5xl md:text-6xl font-unica">
              00<span className="text-base">H</span>
            </p>
            <p className="font-normal text-5xl md:text-6xl font-unica">
              00<span className="text-base">M</span>
            </p>
            <p className="font-normal text-5xl md:text-6xl font-unica">
              00<span className="text-base">S</span>
            </p>
          </div>
          {/* <SetLogoutTimer /> */}
        </div>

        <div className="relative flex justify-center w-full md:w-1/2 h-full overflow-hidden">
          <img
            src="./image 1.png"
            alt="blue circle with lines"
            className="w-full h-auto z-[1] globe"
          />
          <img
            src="./main-figure.png"
            alt="man-wearing-smart-glasses-touching-virtual-screen"
            className="absolute w-full h-auto bottom-0"
          />
        </div>
      </div>
      <div className="absolute">
        <Star />
      </div>
      <div className="absolute top-[20%] left-1/2">
        <Star />
      </div>
      <div className="absolute bottom-[5%] left-[40%]">
        <Star name="purple" />
      </div>
      <div className="absolute top-[10%] right-[5%]">
        <Star name="gray" />
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="md:flex xs:flex-col md:flex-row xs:px-4 md:px-0 gap-5 py-16  items-center justify-center w-full border-b-[2px] border-b-pink/10  max-w-7xl mx-auto relative">
      <div className="flex items-center justify-center md:w-1/2 ">
        <img
          src="./the big idea 1.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="md:max-w-1/2 xs:w-[70%] h-auto"
        />
      </div>
      <div className="flex flex-col text-left items-start justify-center md:w-1/2 md:mt-0 xs:mt-5">
        <h5 className="font-bold text-3xl mb-4 xs:text-center md:text-left">
          Introduction to getlinked
          <br />
          <span className="text-pink">tech Hackathon 1.0</span>
        </h5>
        <p className="font-normal text-sm md:mr-20 xs:text-center md:text-left">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="absolute top-[10%] left-[10%]">
        <Star />
      </div>
      <div className="absolute top-[30%] right-[10%]">
        <Star name="purple" />
      </div>
    </section>
  );
}

function RulesGuidelines() {
  return (
    <section className="flex gap-5 py-16  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10 xs:flex-col-reverse md:flex-row xs:px-4 md:px-0 relative">
      <div className="flex flex-col md:text-left md:items-start justify-center md:w-1/2 ">
        <h5 className="font-bold text-3xl mb-4 md:ml-20 xs:text-center">
          Rules and
          <br />
          <span className="text-pink">Guidelines</span>
        </h5>
        <p className="font-normal text-sm md:ml-20 xs:text-center md:text-left">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <img
          src="./7450159 1.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="md:max-w-1/2 xs:w-full h-auto"
        />
      </div>
      <div className="absolute top-[20%] left-[30%]">
        <Star name="gray" />
      </div>
      <div className="absolute bottom-[30%] right-[50%]">
        <Star />
      </div>
    </section>
  );
}

function JudgingCriteria() {
  return (
    <section className="md:flex gap-5 py-16 xs:flex-col-reverse md:flex-row max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10 xs:px-4 relative">
      <div className="flex items-center justify-center md:w-1/2 xs:w-full ">
        <img
          src="./8046554 1.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="md:max-w-1/2 xs:w-full h-auto"
        />
      </div>
      <div className="flex flex-col md:text-left xs:text-center md:items-start justify-center md:w-1/2 ">
        <h5 className="font-bold text-3xl">
          Judging Criteria
          <br />
          <span className="text-pink">Key Attribute </span>
        </h5>
        <p className="font-normal text-sm md:mr-20 mt-4">
          <span className="text-red font-medium">
            Innovation and Creativity:
          </span>{" "}
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="font-normal text-sm md:mr-20 mt-4">
          <span className="text-red font-medium">Functionality:</span> Assess
          how well the solution works. Does it perform its intended functions
          effectively and without major issues? Judges would consider the
          completeness and robustness of the solution.
        </p>
        <p className="font-normal text-sm md:mr-20 mt-4">
          <span className="text-red font-medium">Impact and Relevance:</span>{" "}
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="font-normal text-sm md:mr-20 mt-4">
          <span className="text-red font-medium">Technical Complexity:</span>{" "}
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="font-normal text-sm md:mr-20 mt-4">
          <span className="text-red font-medium">
            Adherence to Hackathon Rules:
          </span>{" "}
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <div className="flex md:justify-start xs:justify-center">
          <Button padx={50} margintop={30}>
            Read More
          </Button>
        </div>
      </div>
      <div className="absolute top-[20%] left-[40%]">
        <Star name="purple" />
      </div>
      <div className="absolute bottom-[30%] right-[50%]">
        <Star name="gray" />
      </div>
      <div className="absolute bottom-[10%] right-[10%]">
        <Star />
      </div>
    </section>
  );
}

function FAQs() {
  return (
    <section className="flex xs:flex-col md:flex-row gap-5 py-16 md:px-20 xs:px-4 max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10 relative">
      <div className="flex flex-col xs:text-center md:text-left xs:items-center md:items-start justify-center md:w-[50%] xs:w-full">
        <h5 className="font-bold xs:text-center md:text-left text-3xl mb-4 md:w-[50%] xs:w-full">
          Frequently Ask
          <span className="text-pink"> Question</span>
        </h5>
        <p className="font-normal text-sm">
          We got answers to the questions that you might
          <br /> want to ask about
          <span className="font-bold"> getlinked Hackathon 1.0</span>
        </p>
        <div className="flex flex-col gap-6 w-full mt-[68px]">
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal md:text-center xs:text-left">
              Can I work on a project I started before the hackathon?
            </p>
            <button className="text-pink ml-3">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal md:text-center xs:text-left">
              What happens if I need help during the hackathon?
            </p>
            <button className="text-pink ml-3">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal md:text-center xs:text-left">
              What happens if I don't have an idea for a project?
            </p>
            <button className="text-pink ml-3">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal md:text-center xs:text-left">
              Can I join a team or do I have to come with one?
            </p>
            <button className="text-pink ml-3">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal md:text-center xs:text-left">
              What happens after the hackathon ends
            </p>
            <button className="text-pink ml-3">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal md:text-center xs:text-left">
              Can I work on a project I started before the hackathon?
            </p>
            <button className="text-pink ml-3">+</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-[50%] xs:w-full">
        <img
          src="./thinking.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="max-w-1/2 h-auto"
        />
      </div>
      <div className="absolute top-[20%] left-[40%]">
        <Star name="purple" />
      </div>
      <div className="absolute bottom-[30%] right-[50%]">
        <Star name="gray" />
      </div>
      <div className="absolute bottom-[10%] right-[10%]">
        <Star />
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="flex gap-5 py-16 xs:px-4 md:px-20  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10 font-serrat relative">
      <div className="flex flex-col items-center">
        <h1 className="text-lg text-center font-bold md:text-[32px] mb-2">
          Timeline
        </h1>
        <p className="text-center text-sm font-normal">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        <div className="mt-[56px] md:ml-[100%] md:gap-7 flex gap-3 w-[90%] md:w-full">
          <div className="flex flex-col items-center justify-end gap-1">
            <span className="h-[80%] w-[2px] md:w-[4px] bg-pink"></span>
            <span className="h-4 w-4 md:h-6 md:w-6 md:flex md:items-center md:justify-center rounded-full bg-gradient-to-r from-red to-purple text-xs md:text-sm text-center">
              1
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:justify-end md:text-right gap-1 md:-ml-[410px] md:w-[70%]">
              <span className="text-pink font-bold text-xs md:text-2xl md:font-bold">
                Hackathon Announcement
              </span>
              <span className="text-xs font-normal font-serrat md:-mb-7 md:text-sm md:font-normal">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </span>
            </div>
            <span className="text-pink font-bold text-xs md:text-2xl md:font-bold">
              November 18, 2023
            </span>
          </div>
        </div>

        <div className="mt-7 flex gap-3 md:gap-7 w-[90%] md:w-full md:ml-[100%]">
          <div className="flex flex-col items-center justify-end gap-1">
            <span className="h-[80%] w-[2px] md:w-[4px] bg-pink"></span>
            <span className="h-4 w-4 md:h-6 md:w-6 md:flex md:items-center md:justify-center rounded-full bg-gradient-to-r from-red to-purple text-xs md:text-sm text-center">
              2
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="md:w-[50%] flex flex-col gap-3">
              <span className="text-pink font-bold text-xs  md:text-2xl md:font-bold">
                Teams Registration begins
              </span>
              <span className="text-xs font-normal font-serrat md:-mb-7 md:text-sm md:font-normal">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </span>
            </div>
            <div className="flex flex-col md:justify-end md:text-left gap-3 md:-ml-[200px]">
              <span className="text-pink font-bold text-xs md:text-2xl md:font-bold md:-ml-[13%]">
                November 18, 2023
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[56px] md:ml-[100%] md:gap-7 flex gap-3 w-[90%] md:w-full">
          <div className="flex flex-col items-center justify-end gap-1">
            <span className="h-[80%] w-[2px] md:w-[4px] bg-pink"></span>
            <span className="h-4 w-4 md:h-6 md:w-6 md:flex md:items-center md:justify-center rounded-full bg-gradient-to-r from-red to-purple text-xs md:text-sm text-center">
              3
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:justify-end md:text-right gap-1 md:-ml-[410px] md:w-[70%]">
              <span className="text-pink font-bold text-xs md:text-2xl md:font-bold">
                Hackathon Announcement
              </span>
              <span className="text-xs font-normal font-serrat md:-mb-7 md:text-sm md:font-normal">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </span>
            </div>
            <span className="text-pink font-bold text-xs md:text-2xl md:font-bold">
              November 18, 2023
            </span>
          </div>
        </div>

        <div className="mt-7 flex gap-3 md:gap-7 w-[90%] md:w-full md:ml-[100%]">
          <div className="flex flex-col items-center justify-end gap-1">
            <span className="h-[80%] w-[2px] md:w-[4px] bg-pink"></span>
            <span className="h-4 w-4 md:h-6 md:w-6 md:flex md:items-center md:justify-center rounded-full bg-gradient-to-r from-red to-purple text-xs md:text-sm text-center">
              4
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="md:w-[50%] flex flex-col gap-3">
              <span className="text-pink font-bold text-xs  md:text-2xl md:font-bold">
                Teams Registration begins
              </span>
              <span className="text-xs font-normal font-serrat md:-mb-7 md:text-sm md:font-normal">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </span>
            </div>
            <div className="flex flex-col md:justify-end md:text-left gap-3 md:-ml-[200px]">
              <span className="text-pink font-bold text-xs md:text-2xl md:font-bold md:-ml-[13%]">
                November 18, 2023
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[56px] md:ml-[100%] md:gap-7 flex gap-3 w-[90%] md:w-full">
          <div className="flex flex-col items-center justify-end gap-1">
            <span className="h-[80%] w-[2px] md:w-[4px] bg-pink"></span>
            <span className="h-4 w-4 md:h-6 md:w-6 md:flex md:items-center md:justify-center rounded-full bg-gradient-to-r from-red to-purple text-xs md:text-sm text-center">
              5
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:justify-end md:text-right gap-1 md:-ml-[410px] md:w-[70%]">
              <span className="text-pink font-bold text-xs md:text-2xl md:font-bold">
                Hackathon Announcement
              </span>
              <span className="text-xs font-normal font-serrat md:-mb-7 md:text-sm md:font-normal">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </span>
            </div>
            <span className="text-pink font-bold text-xs md:text-2xl md:font-bold">
              November 18, 2023
            </span>
          </div>
        </div>

        <div className="mt-7 flex gap-3 md:gap-7 w-[90%] md:w-full md:ml-[100%]">
          <div className="flex flex-col items-center justify-end gap-1">
            <span className="h-[80%] w-[2px] md:w-[4px] bg-pink"></span>
            <span className="h-4 w-4 md:h-6 md:w-6 md:flex md:items-center md:justify-center rounded-full bg-gradient-to-r from-red to-purple text-xs md:text-sm text-center">
              6
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="md:w-[50%] flex flex-col gap-3">
              <span className="text-pink font-bold text-xs  md:text-2xl md:font-bold">
                Teams Registration begins
              </span>
              <span className="text-xs font-normal font-serrat md:-mb-7 md:text-sm md:font-normal">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </span>
            </div>
            <div className="flex flex-col md:justify-end md:text-left gap-3 md:-ml-[200px]">
              <span className="text-pink font-bold text-xs md:text-2xl md:font-bold md:-ml-[13%]">
                November 18, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[20%] left-[20%]">
        <Star name="purple" />
      </div>
      <div className="absolute top-[50%] right-[10%]">
        <Star />
      </div>
      <div className="absolute bottom-[10%] left-[10%]">
        <Star name="gray" />
      </div>
    </section>
  );
}

function PrizesReward() {
  return (
    <section className="flex flex-col gap-5 py-16  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10 xs:px-4 md:px-0 relative">
      <div className="flex flex-col xs:w-50% md:w-[30%] xs:mx-auto md:mx-0 md:ml-[30%]">
        <h5 className="font-bold text-3xl xs:text-center md:text-left">
          Prizes and
          <span className="text-pink"> Rewards</span>
        </h5>
        <p className="pt-6 xs:text-center md:text-left">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="flex xs:flex-col md:flex-row  items-end justify-between xs:gap-[100px] md:gap-5 w-full xs:mt-10 md:mt-[80px]">
        <img src="./trophy.png" alt="trophy" className="md:w-[40%] h-auto" />

        <div className="flex gap-4 md:gap-6 items-center justify-center xs:w-full md:w-[60%] px-2">
          <div className="relative flex flex-col items-center justify-center xs:px-4 md:px-[25px] pb-[33px] xs:pt-14 md:pt-[170px] bg-pink/10 rounded-md border border-pink">
            <div className="absolute xs:w-[100px] md:w-[200px] -top-[30%]">
              <img
                src="./silver.png"
                alt="trophy"
                className="w-[100%] h-auto"
              />
            </div>
            <h1 className="font-bold text-xs md:text-4xl">2nd</h1>
            <p className="font-semibold text-xs md:text-2xl">Runner</p>
            <p className="font-bold text-sm md:text-3xl text-pink mt-3">
              N300,000
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center xs:px-4 md:px-[25px] pb-[33px] xs:pt-[70px] md:pt-[180px] bg-pink/10 rounded-md border-2 border-purple">
            <div className="absolute xs:w-[150px] md:w-[300px] xs:-top-[50%] md:-top-[40%]">
              <img src="./gold.png" alt="trophy" className="w-[100%] h-auto" />
            </div>
            <h1 className="font-bold text-xs md:text-4xl">1st</h1>
            <p className="font-semibold text-xs md:text-2xl">Runner</p>
            <p className="font-bold text-sm md:text-3xl text-purple mt-3">
              N400,000
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center xs:px-4 md:px-[25px] pb-[33px] xs:pt-14 md:pt-[170px] bg-pink/10 rounded-md border border-pink">
            <div className="absolute xs:w-[100px] md:w-[200px] -top-[30%]">
              <img
                src="./bronze.png"
                alt="trophy"
                className=" w-[100%] h-auto"
              />
            </div>
            <h1 className="font-bold text-xs md:text-4xl">3rd</h1>
            <p className="font-semibold text-xs md:text-2xl">Runner</p>
            <p className="font-bold text-sm md:text-3xl text-pink mt-3">
              N150,000
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[20%] left-[20%]">
        <Star name="purple" />
      </div>
      <div className="absolute top-[50%] right-[10%]">
        <Star />
      </div>
      <div className="absolute bottom-[10%] left-[10%]">
        <Star name="gray" />
      </div>
    </section>
  );
}

function PartnersSponsors() {
  return (
    <section className="flex flex-col gap-5 py-16 xs:px-4 md:px-20  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10 relative">
      <div className="flex flex-col justify-center items-center xs:w-[80%] md:w-[50%]">
        <h1 className="text-center font-bold text-[32px] mb-2">
          Partners and Sponsors
        </h1>
        <p className="text-center">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="mt-[65px] w-full border border-pink rounded-lg flex items-center justify-center">
        <div className="flex flex-col xs:gap-3 md:gap-14 items-center justify-center py-[5%] max-w-max">
          <div className="flex xs:gap-[0px] md:gap-[100px] w-full">
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="libertyassured.png"
                alt="liberty assured company logo"
                className="xs:w-[40%] md:w-[70%] h-auto"
              />
              <div className="absolute xs:w-[60%] md:w-[110%] border-b-[3px] border-b-pink  xs:-bottom-[15%] md:-bottom-[20%]" />
              <div className="absolute xs:w-[30%] md:w-[50%] border-b-[3px] border-b-pink rotate-90 xs:-right-[15%] md:-right-[50%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="libertypay.png"
                alt="liberty pay company logo"
                className="xs:w-[60%] md:w-full h-auto"
              />
              <div className="absolute xs:w-[70%] md:w-[120%] border-b-[3px] border-b-pink  xs:-bottom-[15%] md:-bottom-[20%]" />
              <div className="absolute xs:w-[30%] md:w-[50%] border-b-[3px] border-b-pink rotate-90 xs:-right-[15%] md:-right-[50%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="winwise.png"
                alt="winwise company logo"
                className="xs:w-[40%] md:w-[70%] h-auto"
              />
              <div className="absolute xs:w-[70%] md:w-[110%] border-b-[3px] border-b-pink xs:-bottom-[15%] md:-bottom-[20%]" />
            </div>
          </div>

          <div className="flex xs:gap-0 md:gap-[100px] w-full">
            <div className=" w-full relative p-2 flex items-center justify-center">
              <img
                src="whispersms.png"
                alt="whispersms company logo"
                className="xs:w-[40%] md:w-[70%] h-auto"
              />
              <div className="absolute xs:w-[30%] md:w-[50%] border-b-[3px] border-b-pink rotate-90 xs:-right-[12%] md:-right-[50%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="paybox.png"
                alt="paybox company logo"
                className="xs:w-[60%] md:w-full h-auto"
              />
              <div className="absolute xs:w-[30%] md:w-[50%] border-b-[3px] border-b-pink rotate-90 xs:-right-[12%] md:-right-[50%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="visualplus.png"
                alt="visualplus company logo"
                className="xs:w-[40%] md:w-[70%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[20%] left-[20%]">
        <Star name="purple" />
      </div>
      <div className="absolute top-[50%] right-[10%]">
        <Star name="purple" />
      </div>
      <div className="absolute bottom-[10%] left-[10%]">
        <Star name="gray" />
      </div>
      <div className="absolute bottom-[10%] right-[5%]">
        <Star />
      </div>
    </section>
  );
}

function PrivacyTerms() {
  return (
    <section className="flex xs:flex-col xs:items-center md:flex-row gap-10 py-16 md:pl-20  max-w-7xl mx-auto w-full xs:px-4 md:px-0 relative">
      <div className="flex flex-col text-left xs:items-center md:items-start justify-center md:w-[50%] xs:w-full">
        <h5 className="font-bold text-3xl mb-4 xs:text-center md:text-left">
          Privacy Policy and
          <br />
          <span className="text-pink">Terms</span>
        </h5>
        <p className="font-normal text-sm">
          Last updated on September 12, 2023
        </p>
        <p className="text-sm font-normal mt-10">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="mt-[65px] w-full border border-pink rounded-lg flex flex-col items-start justify-center p-9">
          <p className="md:text-left xs:text-center">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h6 className="text-pink font-bold text-base mt-10">
            Licensing Policy
          </h6>
          <p className="font-bold text-sm mt-2">
            Here are terms of our Standard License:
          </p>
          <div className="flex items-start gap-4 mt-9">
            <img src="list terms.svg" alt="check" />
            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className="flex items-start gap-4 mt-9">
            <img src="list terms.svg" alt="check" />
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <Button
            padx={40}
            margintop={30}
            maxW={300}
            flex={"flex"}
            center={"center"}
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:w-[50%] p-10 pb-0">
        <img
          src="./shield.png"
          alt="shield outline"
          className="w-full h-auto"
        />
        <img
          src="./padlock.png"
          alt="padlock"
          className="w-full h-auto -mt-[90%]"
        />
      </div>
      <div className="absolute top-[20%] left-[20%]">
        <Star name="purple" />
      </div>
      <div className="absolute top-[50%] right-[10%]">
        <Star name="purple" />
      </div>
      <div className="absolute bottom-[10%] left-[10%]">
        <Star name="gray" />
      </div>
      <div className="absolute bottom-[10%] right-[5%]">
        <Star />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="flex flex-col gap-10 py-16 pl-20  max-w-7xl mx-auto w-full bg-[#100B20] xs:px-4 md:px-0 relative">
      <div className="flex xs:flex-col md:flex-row w-full gap-10 xs:items-center md:items-start justify-between">
        <div className="flex flex-col md:w-1/2 xs:w-3/4 md:pl-20">
          <h5 className="font-bold text-3xl mb-1">
            get
            <span className="text-pink">linked</span>
          </h5>
          <p className="font-normal text-xs mt-3">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organization with the aim of showing young
            and talented individuals in the field of technology
          </p>
          <p className="flex font-normal text-xs mt-20 items-end">
            Terms of Use<span className="mx-2 text-pink text-[18px]">|</span>
            Privacy Policy
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/4 xs:w-3/4">
          <h3 className="text-pink font-semibold text-sm">Useful Links</h3>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer text-sm font-normal">Overview</li>
            <li className="cursor-pointer text-sm font-normal">Timeline</li>
            <li className="cursor-pointer text-sm font-normal">FAQs</li>
            <li className="cursor-pointer text-sm font-normal">Register</li>
          </ul>
          <p className="flex items-center gap-5 text-pink font-normal text-xs">
            Follow us
            <span className="flex items-center gap-3 text-white text-2xl">
              <AiOutlineInstagram className="cursor-pointer" />
              <RiTwitterXFill className="cursor-pointer" />
              <RiFacebookFill className="cursor-pointer" />
              <RiLinkedinFill className="cursor-pointer" />
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4  md:w-1/4 xs:w-3/4 md:mr-5">
          <h3 className="text-pink font-semibold text-sm">Contact Us</h3>
          <div className="flex items-center gap-5">
            <BsFillTelephoneFill />
            <a href="tel:+234 6707653444" className=" text-sm font-normal">
              +234 6707653444
            </a>
          </div>
          <div className="flex items-start gap-5">
            <HiLocationMarker className="text-2xl" />
            <p className=" text-sm font-normal">
              27,Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>
      </div>
      <p className="flex items-center justify-center text-xs font-normal">
        All rights reserved. © getlinked Ltd.
      </p>
      <div className="absolute top-[20%] left-[20%]">
        <Star name="purple" />
      </div>
      <div className="absolute top-[50%] right-[10%]">
        <Star name="purple" />
      </div>
      <div className="absolute bottom-[10%] left-[10%]">
        <Star name="gray" />
      </div>
      <div className="absolute bottom-[10%] right-[5%]">
        <Star />
      </div>
    </section>
  );
}

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function Button({
  children,
  padx = 56,
  pady = 16,
  margintop = 0,
  maxW,
  flex,
  center,
  onClick,
}) {
  const style = {
    paddingRight: `${padx}px`,
    paddingLeft: `${padx}px`,
    paddingTop: `${pady}px`,
    paddingBottom: `${pady}px`,
    marginTop: `${margintop}px`,
    maxWidth: `${maxW}px`,
    display: flex,
    alignSelf: center,
  };
  return (
    <button
      className="bg-gradient-to-r from-red to-purple rounded-md"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Star({ name = "white" }) {
  return (
    <img
      src={`./star-${name}.png`}
      alt="star"
      class="xs:w-[30%] md:w-full h-auto loader-pulse"
    />
  );
}
