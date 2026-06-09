"use client";

import { useEffect, useState } from "react";

import ScrollIndicator from "./ScrollIndicator";
import LeftHand from "../common/LeftHand";
import RightHand from "../common/RightHand";
import PhoneMockup from "../phone/phoneComponent";

export default function Hero1() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                background: "linear-gradient(0deg, #FDF8F2 0%, #FFE1DA 102.37%)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Oval Scene Container */}
            <div
                style={{
                    position: "relative",
                    width: "min(1130px, 100vw)",
                    aspectRatio: "1440 / 960",
                    //   aspectRatio: "1440 / 900",
                    borderRadius: "1200px",
                    overflow: "hidden",
                    background: "#fff",
                    marginTop: 100,
                }}
            >

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "url(/bg-scene.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center bottom",
                    }}
                />
                 <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(133.07deg, rgba(0,0,0,0) 65.7%, rgba(0,0,0,0.63) 88.96%), linear-gradient(236.77deg, rgba(0,0,0,0) 43.3%, rgba(0,0,0,0.63) 82.77%)",
          }}
        />
               {/* Left hand with phone */}
                <LeftHand mounted={mounted} >
                  <PhoneMockup />
                </LeftHand>

                 {/* Right Hand */}
                 <RightHand mounted={mounted} 
                 style={{
                   position: "absolute",
                   right: "12.4%",
                     bottom: "-15%",
                 }} />
                 {/* Left Copy */}
        <div
          className={mounted ? "animate-slide-left" : ""}
          style={{
            position: "absolute",
            left: "4%",
            top: "30%",
            zIndex: 1,
            opacity: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(30px, 4.2vw, 80px)",
              lineHeight: 1.27,
              letterSpacing: "-0.02em",
              color: "#FEE3DC",
              whiteSpace: "nowrap",
              // zIndex: 1,
            }}
          >
            In a world that
          </h2>
          <p
            className={mounted ? "animate-fade-up delay-300" : ""}
            style={{
              opacity: 0,
              marginTop: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.4vw, 20px)",
              lineHeight: "26px",
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 376,
            }}
          >
            Financing of global chain supply could be challenging,
            we are your reliable partner from the first step to your big day
          </p>
        </div>

        {/* Right Copy */}
        <div
          className={mounted ? "animate-slide-right delay-100" : ""}
          style={{
            position: "absolute",
            right: "4%",
            top: "38%",
            textAlign: "right",
            zIndex: 25,
            opacity: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(20px, 4.2vw, 69px)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              color: "#FEE3DC",
              whiteSpace: "nowrap",
            }}
          >
            shifting fast...
          </h2>
          <p
            style={{
              marginTop: 11,
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.24vw, 17.8px)",
              lineHeight: "27px",
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            we help you stay in motion
          </p>
        </div>
            <ScrollIndicator />

            </div>


        </section>
    );


}