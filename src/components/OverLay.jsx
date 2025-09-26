import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { projectsData } from "../utils/projects.js";

const OverLay = () => {
  useGSAP(() => {
    const overlayTl = gsap.timeline();

    overlayTl.to("#loader h1:first-of-type", {
      backgroundPosition: "0% 0%",
      delay: 0.5,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to("#loader h1:last-of-type", {
          backgroundPosition: "0% 0%",
          duration: 1.5,
          ease: "power2.out",
        });
      },
    });

    //text animation

    overlayTl.to(["#projects-header", ".project-item"], {
      opacity: 1,
      duration: 0.15,
      ease: "power2.out",
      stagger: 0.07,
      delay: 1.5,
    });
    overlayTl.to(
      ["#directors-header", ".director-item"],
      {
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
        stagger: 0.07,
      },
      "<"
    );

    overlayTl.to(
      ["#locations-header", ".location-item"],
      {
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
        stagger: 0.07,
      },
      "<"
    );

    overlayTl.to(".project-item", {
      color: "#fff",
      duration: 0.015,
      ease: "power2.out",
      stagger: 0.07,
    });
    overlayTl.to(
      ".director-item",
      {
        color: "#fff",
        duration: 0.015,
        ease: "power2.out",
        stagger: 0.07,
      },
      "<"
    );
    overlayTl.to(
      ".location-item",
      {
        color: "#fff",
        duration: 0.015,
        ease: "power2.out",
        stagger: 0.07,
      },
      "<"
    );

    overlayTl.to(["#projects-header", ".project-item"], {
      opacity: 0,
      duration: 0.015,
      ease: "power2.out",
      stagger: 0.07,
    });
    overlayTl.to(
      ["#directors-header", ".director-item"],
      {
        opacity: 0,
        duration: 0.015,
        ease: "power2.out",
        stagger: 0.07,
      },
      "<"
    );
    overlayTl.to(
      ["#locations-header", ".location-item"],
      {
        opacity: 0,
        duration: 0.015,
        ease: "power2.out",
        stagger: 0.07,
      },
      "<"
    );
  });

  return (
    <div className="fixed top-0 left-0 w-screen h-dvh flex gap-6 overflow-hidden px-11">
      {/* projects */}
      <div id="projects" className="hidden flex-1 md:flex py-8 h-screen">
        <div className="flex flex-1 gap-8 uppercase">
          <div className="flex flex-1 flex-col gap-2">
            <p
              id="projects-header"
              className="uppercase opacity-0 text-white text-sm"
            >
              projects
            </p>
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="project-item flex opacity-0 flex-1 text-sm justify-between text-left text-[#4f4f4f]"
              >
                <p>{project.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <p
              id="directors-header"
              className="uppercase opacity-0 text-white text-sm"
            >
              directors
            </p>
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="director-item flex flex-1 opacity-0 text-sm justify-between text-left text-[#4f4f4f]"
              >
                <p>{project.director}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="loader"
        className="flex-1 justify-center items-center flex flex-col"
      >
        <h1>Hello</h1>
        <h1>World</h1>
      </div>
      <div
        id="locations"
        className="hidden md:flex flex-1 flex-col justify-center gap-2 py-8 h-screen"
      >
        <div
          id="locations-header"
          className="flex-1 opacity-0 text-white uppercase"
        >
          locations
        </div>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="location-item flex opacity-0 flex-1 gap-8 w-1/2 text-sm text-[#4f4f4f]"
          >
            <p>{project.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverLay;
