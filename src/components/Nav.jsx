import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Nav = () => {
  useGSAP(() => {
    gsap.set("#nav", { opacity: 0, yPercent: -125 });
  });

  return (
    <nav id="nav" className="flex gap-5 fixed w-screen py-4 text-center">
      <div className="links flex-1 flex justify-between items-center">
        <p className="flex-1 uppercase text-sm font-semibold">index</p>
        <p className="flex-1 uppercase text-sm font-semibold">work</p>
      </div>
      <div
        id="logo"
        className="uppercase text-3xl font-extrabold flex-1 leading-6"
      >
        <p>hakona</p>
        <p className="pl-5">matata</p>
      </div>
      <div className="links flex-1 flex justify-between items-center">
        <p className="flex-1 uppercase text-sm font-semibold">about</p>
        <p className="flex-1 uppercase text-sm font-semibold">contact</p>
      </div>
    </nav>
  );
};

export default Nav;
