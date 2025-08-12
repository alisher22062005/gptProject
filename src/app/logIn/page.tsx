"use client";
import Info from "./components/Info/Info/Info";
import Header from "@/shared/Header/Header";
import LogInForm from "./components/Info/LogInForm/LogInForm";
import { useEffect } from "react";

export default function LogIn() {
  useEffect(() => {
    // Dynamically load GSAP
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Reset elements to initial state
        gsap.set(".header-animate", {
          y: -50,
          opacity: 0,
        });

        gsap.set(".info-animate", {
          y: 80,
          opacity: 0,
        });

        gsap.set(".form-animate", {
          y: 100,
          opacity: 0,
        });

        // Animation for Header (appears immediately)
        gsap.to(".header-animate", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });

        // Animation for Info component
        gsap.to(".info-animate", {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".info-animate",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Animation for LoginForm component
        gsap.to(".form-animate", {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".form-animate",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Cleanup function
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    };

    loadGSAP();
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className="bg-gray-100">
      <style jsx>{`
        .header-animate {
          transform: translateY(-50px);
          opacity: 0;
        }
        .info-animate {
          transform: translateY(80px);
          opacity: 0;
        }
        .form-animate {
          transform: translateY(100px);
          opacity: 0;
        }
      `}</style>

      <div className="header-animate">
        <Header />
      </div>

      <div className="info-animate">
        <Info />
      </div>

      <div className="form-animate">
        <LogInForm />
      </div>
    </div>
  );
}
