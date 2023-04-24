import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  const [isInput, setIsInput] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setIserror] = useState(false);

  const handleClick = () => {
    setIsInput(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
      setSubmitted(true);

  };

  const handleBlur = () => {
    setIsInput(false);
  };
  useEffect(() => {
    const spotlight = document.getElementById("spotlight");
    const spotlight_child = document.getElementById("spotlight-child");
    const main = document.getElementById("main");
    main.addEventListener("mousemove", moveSpotlight);
    main.addEventListener("touchmove", moveSpotlight);
    function moveSpotlight(e) {
      let pos, x, y;
      e.preventDefault();
      x = e.clientX - 200;
      y = e.clientY - 350;
      spotlight.style.left = x + "px";
      spotlight.style.top = y + "px";
      spotlight_child.style.left = x + "px";
      spotlight_child.style.top = y + "px";
    }
  });

  return (
    <>
      <main className="min-h-screen main md:overflow-hidden overflow-scroll" id="main">
        <div className="header">
          <Image
            src="/logo-dark.svg"
            width={160}
            height={80}
            className=" mx-9 mt-4 h-20 "
          />
        </div>
        <div className="main-content-section md:w-4/5 w-full text-center m-auto relative">
          <div className="middleware font-bold ">
            <div className="child-1 text-center rounded-br w-fit m-auto">
              <h1 className="flex rounded-br p-p20 mix-blend-darken bg-mainBg text-white leaading-160 align-middle">
                100<span className="inline-block text-white">x</span>
              </h1>
            </div>
            <p className="child-2 text-68 text-white mt-8">
              your release process
            </p>
          </div>

          {isInput ? (
            <div className="email_inputarea">
              <form
                className="flex rounded-3xl align-middle bg-mainBg justify-around"
                onSubmit={handleSubmit}
              >
                <input
                  onBlur={handleBlur}
                  placeholder="kalyankool56@gmail.com"
                  className="text-white pl-3 bg-transparent text-base"
                />
                <button className="join_emai">Join</button>
              </form>
            </div>
          ) : (
            <button onClick={handleClick} className="box">
              Join the beta
            </button>
          )}
          {submitted && 
          <div className=" w-full fixed top-0 left-0 bg-mainBg h-screen flex justify-center align-middle greetings">
          <p className="flex align-middle justify-center md:text-100 text-68 text-white mb-3">Thank you</p>
          <span className="child_2 text-white text-24">You won't regret it. Trust us</span>
          </div>
          }
        </div>
        <div className="cursor-box" id="spotlight">
          <div className="cursor-box-child " id="spotlight-child"></div>
        </div>
        <div className="highlighted_spotlight fixed top-0 left-0 w-screen h-screen ">
          <div className="highlighted_spotlight_child w-full h-full ">
            <video
              loop
              muted
              autoPlay
              controls="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
              src="/gradient.mp4"
            ></video>
            <h2 className=" text-600 text-white bg-mainBg font-bold leading-450">
              LIVEOPS
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
