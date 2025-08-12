"use client";
import Footer from "./components/Footer/Footer";
import ListCard from "./components/ListCard/ListCard";
import Saving from "./components/Saving/saving";
import Header from "@/shared/Header/Header";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Price() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Reset header to initial state
    gsap.set(".header-animate", {
      y: -100,
      opacity: 0,
    });

    // Reset elements to initial state
    gsap.set(".saving-animate", {
      y: 80,
      opacity: 0,
    });

    gsap.set(".listcard-animate", {
      x: -100,
      opacity: 0,
    });

    gsap.set(".footer-animate", {
      y: 30,
      opacity: 0,
    });

    // Animation for Header (appears immediately)
    gsap.to(".header-animate", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Animation for Saving component
    gsap.to(".saving-animate", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".saving-animate",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animation for ListCard component
    gsap.to(".listcard-animate", {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".listcard-animate",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animation for Footer component
    gsap.to(".footer-animate", {
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-animate",
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <style jsx>{`
        .saving-animate {
          transform: translateY(80px);
          opacity: 0;
        }
        .listcard-animate {
          transform: translateX(-100px);
          opacity: 0;
        }
        .footer-animate {
          transform: translateY(30px);
          opacity: 0;
        }
      `}</style>

      <div className="header-animate">
        <Header />
      </div>

      <div className="saving-animate">
        <Saving />
      </div>

      <div className="listcard-animate">
        <ListCard />
      </div>

      <div className="footer-animate">
        <Footer />
      </div>
    </div>
  );
}
