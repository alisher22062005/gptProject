"use client";
import Header from "@/shared/Header/Header";
import Get from "@/app/menu/components/Get_gpt/Get";
import Reasons from "@/app/menu/components/Reasons/Reasons";
import Links from "@/app/menu/components/Links/Links";
import Footer from "@/app/menu/components/Footer/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Menu() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Reset elements to initial state
    gsap.set(".get-animate", {
      y: 80,
      opacity: 0,
    });

    gsap.set(".reasons-animate", {
      x: -100,
      opacity: 0,
    });

    gsap.set(".links-animate", {
      scale: 0.8,
      opacity: 0,
    });

    gsap.set(".footer-animate", {
      y: 30,
      opacity: 0,
    });

    gsap.set(".stagger-animate", {
      y: 60,
      opacity: 0,
    });

    // Reset header to initial state
    gsap.set(".header-animate", {
      y: -100,
      opacity: 0,
    });

    // Animation for Header (appears immediately)
    gsap.to(".header-animate", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Animation for Get component
    gsap.to(".get-animate", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".get-animate",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animation for Reasons component
    gsap.to(".reasons-animate", {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".reasons-animate",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animation for Links component
    gsap.to(".links-animate", {
      scale: 1,
      opacity: 1,
      duration: 1.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".links-animate",
        start: "top 75%",
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

    // Staggered animation for multiple elements (if you have lists or cards)
    gsap.to(".stagger-animate", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stagger-container",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
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
        .get-animate {
          transform: translateY(80px);
          opacity: 0;
        }
        .reasons-animate {
          transform: translateX(-100px);
          opacity: 0;
        }
        .links-animate {
          transform: scale(0.8);
          opacity: 0;
        }
        .footer-animate {
          transform: translateY(30px);
          opacity: 0;
        }
        .stagger-animate {
          transform: translateY(60px);
          opacity: 0;
        }
      `}</style>

      <div className="header-animate">
        <Header />
      </div>

      <div className="get-animate">
        <Get />
      </div>

      <div className="reasons-animate">
        <Reasons />
      </div>

      <div className="links-animate">
        <Links />
      </div>

      <div className="footer-animate">
        <Footer />
      </div>
    </div>
  );
}
