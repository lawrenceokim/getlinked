import "./App.css";

function App() {
  return (
    <div className="bg-primary h-screen w-screen text-white overflow-y-scroll ">
      <Navbar />
      <Header />
      <Introduction />
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <section className="flex items-center justify-between py-5 px-32 border-b-[2px] border-b-pink/10">
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
    <section className="relative flex flex-col mt-10 min-h-max ">
      <h3 className="text-right mr-14 font-serrat italic text-4xl font-bold">
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

      <div className="my-10 flex w-full">
        <div className="w-1/2 flex flex-col ml-[120px] mt-10">
          <h1 className="text-[80px] font-bold">
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
          </h1>
          <p className="mt-5">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button padx={20} margintop={30} maxW={200}>
            Register
          </Button>

          {/* <SetLogoutTimer /> */}
        </div>

        <div className="relative flex w-1/2 h-full">
          <img
            src="./image 1.png"
            alt="blue circle with lines"
            className="absolute w-full h-auto z-[1] -top-12"
          />
          <img
            src="./man-wearing-smart-glasses-touching-virtual-screen 1.png"
            alt="man-wearing-smart-glasses-touching-virtual-screen"
            className="absolute w-full h-auto top-auto"
          />
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return <div>hello world</div>;
}

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

// function SetLogoutTimer() {
//   let time = 300;
//   const countDown = function () {
//     const sec = String(time % 60).padStart(2, 0);
//     const min = String(Math.trunc(time / 60) % 60).padStart(2, 0);
//     const hour = String(Math.trunc(min / 60)).padStart(2, 0);

//     time--;
//   };
//   countDown();
//   setInterval(countDown, 1000);
//   return (
//     <div>
//       <p>
//         {hour}
//         <span>H</span>
//       </p>
//       <p>
//         {min}
//         <span>M</span>
//       </p>
//       <p>
//         {sec}
//         <span>S</span>
//       </p>
//     </div>
//   );
// }
