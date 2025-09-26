import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect } from "react";

const ImagesGrid = () => {
  const allImageSources = Array.from(
    { length: 35 },
    (_, i) => `/imgs/img${i + 1}.png`
  );

  const getRandomImageSet = () => {
    const shuffled = [...allImageSources].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 9);
  };

  useGSAP(() => {
    const gridImages = gsap.utils.toArray(".img");
    const heroImg = document.querySelector(".hero-img");
    const images = gridImages.filter((img) => img !== heroImg);

    function startImageRotation() {
      const totalCycles = 20;

      for (let cycle = 0; cycle < totalCycles; cycle++) {
        const randomImages = getRandomImageSet();

        gsap.to(
          {},
          {
            duration: 1,
            delay: cycle * 0.15,
            onComplete: () => {
              gridImages.forEach((img, index) => {
                const imgElement = img.querySelector("img");
                if (cycle === totalCycles - 1 && img === heroImg) {
                  imgElement.src = "/imgs/img23.png";
                  gsap.set(".hero-img img", { scale: 2 });
                } else {
                  imgElement.src = randomImages[index];
                }
              });
            },
          }
        );
      }
    }

    const imagesTl = gsap.timeline();

    imagesTl.to(".img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      delay: 2.5,
      stagger: 0.05,
      ease: "power2.inOut",
      onStart: () => {
        setTimeout(() => {
          startImageRotation();

          gsap.to("#loader", { opacity: 0, duration: 0.3 });
        }, 1000);
      },
    });

    imagesTl.to(images, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      delay: 2.5,
      duration: 1,
      stagger: 0.05,
    });

    imagesTl.to(heroImg, {
      y: -50,
      duration: 1,
      ease: "power2.inOut",
    });

    imagesTl.to(heroImg, {
      scale: 4,
      duration: 1.5,
      clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
      ease: "back",
      onStart: () => {
        gsap.to(".hero-img img", {
          scale: 1,
          duration: 1,
        });
        gsap.to(".banner-img", { scale: 1, duration: 0.5, delay: 0.5 });
        gsap.to("#app", { backgroundColor: "#fff", duration: 1 });
        gsap.to("#nav", {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "expo",
        });
      },
    });

    imagesTl.to("#banner-img-1", {
      rotate: 20,
      duration: 1.5,
      delay: 0.5,
      left: "60%",
      ease: "bounce",
    });
    imagesTl.to(
      "#banner-img-2",
      {
        rotate: -20,
        duration: 1.5,
        left: "40%",
        ease: "bounce",
      },
      "<"
    );
  });

  return (
    <>
      <div
        id="images-grid"
        className="w-[30%] pt-7 fixed top-1/2 left-1/2 -translate-1/2 z-[2] flex flex-col gap-4 aspect-square"
      >
        <div className="grid-row w-full flex gap-3">
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img1.png" />
          </div>
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img2.png" />
          </div>
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img3.png" />
          </div>
        </div>

        <div className="grid-row w-full flex gap-3">
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img4.png" />
          </div>
          <div
            className="img hero-img aspect-square flex-1 "
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img23.png" />
          </div>
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img6.png" />
          </div>
        </div>

        <div className="grid-row w-full flex gap-3">
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img7.png" />
          </div>
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img8.png" />
          </div>
          <div
            className="img flex-1 aspect-square"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <img src="/imgs/img9.png" />
          </div>
        </div>
      </div>
      <div id="banner-img-1" className="banner-img ">
        <img src="/imgs/img20.png" />
      </div>
      <div id="banner-img-2" className="banner-img">
        <img src="/imgs/img21.png" />
      </div>
    </>
  );
};

export default ImagesGrid;
