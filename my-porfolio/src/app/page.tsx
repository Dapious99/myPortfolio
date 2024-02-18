import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    // Animation for "Coming soon..." text
    gsap.fromTo(
      ".coming-soon",
      {
        y: -20,
      },
      {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );

    // Animation for boxes
    gsap.to(".box", {
      x: "random(-200, 200)",
      y: "random(-200, 200)",
      rotation: "random(-360, 360)",
      repeat: -1,
      duration: 3,
      ease: "power1.inOut",
      stagger: 0.5,
    });
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1 className="coming-soon" style={{ fontSize: "2rem" }}>
        Coming soon...
      </h1>
      <div>
        <div className="box" style={{ width: "50px", height: "50px", backgroundColor: "red", position: "absolute" }}></div>
        <div className="box" style={{ width: "50px", height: "50px", backgroundColor: "blue", position: "absolute" }}></div>
        <div className="box" style={{ width: "50px", height: "50px", backgroundColor: "green", position: "absolute" }}></div>
        <div className="box" style={{ width: "50px", height: "50px", backgroundColor: "yellow", position: "absolute" }}></div>
      </div>
    </div>
  );
}
