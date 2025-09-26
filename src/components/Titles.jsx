import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Titles = () => {
  useGSAP(() => {
    const introSplit = SplitText.create("#intro h3", {
      type: "words",
    });
    const titleSplit = SplitText.create("#title h1", {
      type: "words",
    });

    gsap.set(introSplit.words, { yPercent: 120 });
    gsap.set(titleSplit.words, { yPercent: 150 });

    const textTl = gsap.timeline();

    textTl.to(introSplit.words, {
      yPercent: 0,
      delay: 9.5,
      duration: 1,
      stagger: 0.06,
      ease: "bounce.inOut",
    });
    textTl.to(
      titleSplit.words,
      {
        yPercent: 0,
        duration: 1,
        stagger: 0.06,
        ease: "bounce.inOut",
      },
      "<"
    );
  });
  return (
    <>
      <div
        id="intro"
        className="w-full absolute top-1/2 flex justify-between px-8 items-center -translate-y-1/2"
      >
        <h3
          className="uppercase italic leading-[0.9] text-black text-2xl font-semibold"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          Creative Solutions
        </h3>
        <h3
          className="uppercase italic leading-[0.9] text-black text-2xl font-semibold"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          Impactful Results
        </h3>
      </div>

      <div id="title" className="absolute bottom-2.5 left-1/2 -translate-x-1/2">
        <h1
          className="uppercase italic text-3xl font-bold"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          Crafting Bold Experiences
        </h1>
      </div>
    </>
  );
};

export default Titles;
