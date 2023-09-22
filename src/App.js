import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-primary h-screen w-screen text-white overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <Header />
      <Introduction />
      <RulesGuidelines />
      <JudgingCriteria />
      <FAQs />
      <Timeline />
      <PrizesReward />
      <PartnersSponsors />
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <section className="flex items-center justify-between py-5 px-20 border-b-[2px] border-b-pink/10">
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
    <section className="relative flex flex-col pt-20 min-h-max border-b-[2px] border-b-pink/10">
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
                src="./chain-9365116-7621444.png"
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
            src="./man-wearing-smart-glasses-touching-virtual-screen 1.png"
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
    <section className="flex gap-5 py-16 mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
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
    <section className="flex gap-5 py-16 mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
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
    <section className="flex gap-5 py-16 mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
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
    <section className="flex gap-5 py-16 px-20 mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
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
    <section className="flex gap-5 py-16 px-20 mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
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
    <section className="flex flex-col gap-5 py-16 mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
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
    <section className="flex flex-col gap-5 py-16 px-20 mx-auto items-center justify-center w-full border-b-[2px] border-b-pink/10">
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
        <div className="flex flex-col items-center justify-center py-[5%] max-w-max">
          <div className="flex gap-14 w-full">
            <div className="w-[100%] p-[5%] border-b-[3px] border-b-pink flex items-center justify-center">
              <img
                src="libertyassured.png"
                alt="liberty assured company logo"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[100%] p-[5%] border-b-[3px] border-b-pink flex items-center justify-center">
              <img
                src="libertypay.png"
                alt="liberty pay company logo"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[100%] p-[5%] border-b-[3px] border-b-pink flex items-center justify-center">
              <img
                src="winwise.png"
                alt="winwise company logo"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex gap-14 w-full">
            <div className="w-[100%] p-[3%] flex items-center justify-center">
              <img
                src="whispersms.png"
                alt="whispersms company logo"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[100%] p-[3%] flex items-center justify-center">
              <img
                src="paybox.png"
                alt="paybox company logo"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[100%] p-[3%] flex items-center justify-center">
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

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function Button({ children, padx = 56, pady = 16, margintop = 0, maxW }) {
  const style = {
    paddingRight: `${padx}px`,
    paddingLeft: `${padx}px`,
    paddingTop: `${pady}px`,
    paddingBottom: `${pady}px`,
    marginTop: `${margintop}px`,
    maxWidth: `${maxW}px`,
  };
  return (
    <button
      className="bg-gradient-to-r from-pink to-purple rounded-md"
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
