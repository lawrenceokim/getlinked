import "./App.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { RiTwitterXFill, RiFacebookFill, RiLinkedinFill } from "react-icons/ri";

function App() {
  return (
    <div className="bg-primary mx-auto h-screen w-screen text-white overflow-y-scroll overflow-x-hidden">
      <Navbar />
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
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <section className="flex items-center justify-between py-5 px-20 border-b-[2px] border-b-pink/10 max-w-7xl mx-auto">
      <p className="text-4xl font-bold cursor-pointer">
        get<span className="text-pink">linked</span>
      </p>
      <nav className="flex items-center gap-20 font-serrat font-normal text-base">
        <ul className="hidden gap-10 sm:flex">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <Button>Register</Button>
      </nav>
    </section>
  );
}

function Header() {
  return (
    <section className="relative flex flex-col pt-20 min-h-max border-b-[2px] border-b-pink/10  max-w-7xl mx-auto">
      <h3 className="text-right mr-14 font-serrat italic text-3xl font-bold">
        Igniting a Revolution in HR{" "}
        <span className="relative">
          Innovation
          <img
            src="./vector 4.png"
            alt="horizontal-vector-line"
            className="absolute right-0 max-w-xs"
          />
        </span>
      </h3>

      <div className="mt-10 flex w-full">
        <div className="w-1/2 flex flex-col ml-20 mt-10">
          <h3 className="text-[75px] font-bold">
            getlinked <span>Tech</span>
            <br />
            Hackathon{" "}
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
          <p className="mt-5">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button padx={20} margintop={30} maxW={200}>
            Register
          </Button>

          {/* <SetLogoutTimer /> */}
        </div>

        <div className="relative flex justify-center w-1/2 h-full overflow-hidden">
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
    </section>
  );
}

function Introduction() {
  return (
    <section className="flex gap-5 py-16  items-center justify-center w-full border-b-[2px] border-b-pink/10  max-w-7xl mx-auto">
      <div className="flex items-center justify-center w-1/2 ">
        <img
          src="./the big idea 1.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="max-w-1/2 h-auto"
        />
      </div>
      <div className="flex flex-col text-left items-start justify-center w-1/2 ">
        <h5 className="font-bold text-3xl mb-4">
          Introduction to getlinked
          <br />
          <span className="text-pink">tech Hackathon 1.0</span>
        </h5>
        <p className="font-normal text-sm mr-20">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>
  );
}

function RulesGuidelines() {
  return (
    <section className="flex gap-5 py-16  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
      <div className="flex flex-col text-left items-start justify-center w-1/2 ">
        <h5 className="font-bold text-3xl mb-4 ml-20">
          Rules and
          <br />
          <span className="text-pink">Guidelines</span>
        </h5>
        <p className="font-normal text-sm ml-20">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img
          src="./7450159 1.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="max-w-1/2 h-auto"
        />
      </div>
    </section>
  );
}

function JudgingCriteria() {
  return (
    <section className="flex gap-5 py-16  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
      <div className="flex items-center justify-center w-1/2 ">
        <img
          src="./8046554 1.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="max-w-1/2 h-auto"
        />
      </div>
      <div className="flex flex-col text-left items-start justify-center w-1/2 ">
        <h5 className="font-bold text-3xl">
          Judging Criteria
          <br />
          <span className="text-pink">Key Attribute </span>
        </h5>
        <p className="font-normal text-sm mr-20 mt-4">
          <span className="text-red font-medium">
            Innovation and Creativity:
          </span>{" "}
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="font-normal text-sm mr-20 mt-4">
          <span className="text-red font-medium">Functionality:</span> Assess
          how well the solution works. Does it perform its intended functions
          effectively and without major issues? Judges would consider the
          completeness and robustness of the solution.
        </p>
        <p className="font-normal text-sm mr-20 mt-4">
          <span className="text-red font-medium">Impact and Relevance:</span>{" "}
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="font-normal text-sm mr-20 mt-4">
          <span className="text-red font-medium">Technical Complexity:</span>{" "}
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="font-normal text-sm mr-20 mt-4">
          <span className="text-red font-medium">
            Adherence to Hackathon Rules:
          </span>{" "}
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <Button padx={50} margintop={30} maxW={300}>
          Read More
        </Button>
      </div>
    </section>
  );
}

function FAQs() {
  return (
    <section className="flex gap-5 py-16 px-20  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
      <div className="flex flex-col text-left items-start justify-center w-[50%] ">
        <h5 className="font-bold text-3xl mb-4">
          Frequently Ask
          <br />
          <span className="text-pink">Question</span>
        </h5>
        <p className="font-normal text-sm">
          We got answers to the questions that you might
          <br /> want to ask about
          <span className="font-bold"> getlinked Hackathon 1.0</span>
        </p>
        <div className="flex flex-col gap-6 w-full mt-[68px]">
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal">
              Can I work on a project I started before the hackathon?
            </p>
            <button className="text-pink">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal">
              What happens if I need help during the hackathon?
            </p>
            <button className="text-pink">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal">
              What happens if I don't have an idea for a project?
            </p>
            <button className="text-pink">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal">
              Can I join a team or do I have to come with one?
            </p>
            <button className="text-pink">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal">
              What happens after the hackathon ends
            </p>
            <button className="text-pink">+</button>
          </div>
          <div className="flex items-center justify-between border-b border-b-pink pb-3">
            <p className="text-sm font-normal">
              Can I work on a project I started before the hackathon?
            </p>
            <button className="text-pink">+</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-[50%]">
        <img
          src="./thinking.png"
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="max-w-1/2 h-auto"
        />
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="flex gap-5 py-16 px-20  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="text-center font-bold text-[32px] mb-2">Timeline</h1>
        <p className="text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
    </section>
  );
}

function PrizesReward() {
  return (
    <section className="flex flex-col gap-5 py-16  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
      <div className="flex flex-col w-[30%] ml-[30%]">
        <h5 className="font-bold text-3xl text-left">
          Prizes and
          <br />
          <span className="text-pink"> Rewards</span>
        </h5>
        <p className="pt-6">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="flex items-end justify-between gap-5 w-full mt-[80px]">
        <img src="./trophy.png" alt="trophy" className="w-[40%] h-auto" />

        <div className="flex gap-6 items-end justify-center w-[60%]">
          <div className="relative flex flex-col items-center justify-center px-[25px] pb-[33px] pt-[170px] bg-pink/10 rounded-md">
            <div className="absolute w-[200px] -top-[30%]">
              <img
                src="./silver.png"
                alt="trophy"
                className="w-[100%] h-auto"
              />
            </div>
            <h1 className="font-bold text-4xl">2nd</h1>
            <p className="font-semibold text-2xl">Runner</p>
            <p className="font-bold text-3xl text-pink mt-3">N300,000</p>
          </div>
          <div className="relative flex flex-col items-center justify-center px-[25px] pb-[33px] pt-[170px] bg-purple/10 rounded-md -mb-4">
            <div className="absolute w-[300px] -top-[50%]">
              <img src="./gold.png" alt="trophy" className="w-[100%] h-auto" />
            </div>
            <h1 className="font-bold text-4xl">1st</h1>
            <p className="font-semibold text-2xl">Runner</p>
            <p className="font-bold text-3xl text-purple mt-3">N400,000</p>
          </div>
          <div className="relative flex flex-col items-center justify-center px-[25px] pb-[33px] pt-[170px] bg-pink/10 rounded-md">
            <div className="absolute w-[200px] -top-[30%]">
              <img
                src="./bronze.png"
                alt="trophy"
                className=" w-[100%] h-auto"
              />
            </div>
            <h1 className="font-bold text-4xl">3rd</h1>
            <p className="font-semibold text-2xl">Runner</p>
            <p className="font-bold text-3xl text-pink mt-3">N150,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSponsors() {
  return (
    <section className="flex flex-col gap-5 py-16 px-20  max-w-7xl mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
      <div className="flex flex-col justify-center items-center w-[50%]">
        <h1 className="text-center font-bold text-[32px] mb-2">
          Partners and Sponsors
        </h1>
        <p className="text-center">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="mt-[65px] w-full border border-pink rounded-lg flex items-center justify-center">
        <div className="flex flex-col gap-14 items-center justify-center py-[5%] max-w-max">
          <div className="flex gap-[100px] w-full">
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="libertyassured.png"
                alt="liberty assured company logo"
                className="w-[70%] h-auto"
              />
              <div className="absolute w-[110%] border-b-[3px] border-b-pink -bottom-[20%]" />
              <div className="absolute w-[50%] border-b-[3px] border-b-pink rotate-90 -right-[50%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="libertypay.png"
                alt="liberty pay company logo"
                className="w-full h-auto"
              />
              <div className="absolute w-[120%] border-b-[3px] border-b-pink -bottom-[20%]" />
              <div className="absolute w-[50%] border-b-[3px] border-b-pink rotate-90 -right-[50%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="winwise.png"
                alt="winwise company logo"
                className="w-[70%] h-auto"
              />
              <div className="absolute w-[110%] border-b-[3px] border-b-pink -bottom-[20%]" />
            </div>
          </div>
          <div className="flex gap-[100px] w-full">
            <div className=" w-full relative p-2 flex items-center justify-center">
              <img
                src="whispersms.png"
                alt="whispersms company logo"
                className="w-[70%] h-auto"
              />
              <div className="absolute w-[50%] border-b-[3px] border-b-pink rotate-90 -right-[48%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="paybox.png"
                alt="paybox company logo"
                className="w-full h-auto"
              />
              <div className="absolute w-[50%] border-b-[3px] border-b-pink rotate-90 -right-[50%]" />
            </div>
            <div className="w-full relative p-1 flex items-center justify-center">
              <img
                src="visualplus.png"
                alt="visualplus company logo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyTerms() {
  return (
    <section className="flex gap-10 py-16 pl-20  max-w-7xl mx-auto w-full">
      <div className="flex flex-col text-left items-start justify-center w-[50%] ">
        <h5 className="font-bold text-3xl mb-4">
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
          <p>
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
      <div className="flex flex-col w-[50%] p-10 pb-0">
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
    </section>
  );
}

function Footer() {
  return (
    <section className="flex flex-col gap-10 py-16 pl-20  max-w-7xl mx-auto w-full bg-[#100B20]">
      <div className="flex w-full gap-10 items-start justify-between">
        <div className="flex flex-col w-1/2">
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
        <div className="flex flex-col gap-4 w-1/4">
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
        <div className="flex flex-col gap-4 w-1/4 mr-5">
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
    >
      {children}
    </button>
  );
}

function Star({ name = "white" }) {
  return (
    <div class="item">
      <img
        src={`./star-${name}.png`}
        alt="star"
        class="w-full h-auto loader-pulse"
      />
    </div>
  );
}
