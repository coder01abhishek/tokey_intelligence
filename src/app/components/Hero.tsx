"use client";

import React from "react";
import { SparklesCore } from "../components/Backgrounds/sparkles";
import Link from "next/link";
import { getAssetUrl } from '../config/assets';
// import { LayoutTextFlip } from "./ui/LayoutTextFlip";
// import { motion } from "motion/react";
import ChangingWordHero from "./ChangingWordHero";

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center bg-[#111111] text-center sm:px-4 sm:py-20 py-8  min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]" id="home">
            {/* Sparkles Background */}
            <div className="w-full absolute inset-0 bg-[#111111] h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Character GIF with transparent background for aesthetics */}
            <div className="relative w-full sm:max-w-md max-w-sm">
                <video
                    src={getAssetUrl("/videos/doll.mp4")} // use the proper video file path
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="z-10 w-full object-contain"
                />


                {/* Mobile fade overlay */}
                <div
                    className="absolute inset-x-0 bottom-0 h-24 sm:hidden"
                    style={{
                        background:
                            "linear-gradient(to top, #111111 40%, rgba(17,17,17,0) 100%)",
                    }}
                />

                {/* Desktop fade overlay (your old one) */}
                <div
                    className="absolute inset-0 pointer-events-none sm:block hidden"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(17, 17, 17, 0) 35.17%, #111111 90.42%)",
                    }}
                />
                {/* <img src="/Gradient.png" alt="Gradient" className="absolute bottom-0 left-0 w-full"/> */}
            </div>

            {/* Headline */}
            {/* <h1 className="sm:mt-8 mt-4 text-white">AI Streamer Launchpad</h1> */}
            {/* <motion.div className="relative  flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
                <h1 className="sm:mt-8 mt-2 text-white relative z-40">AI&nbsp; 
                    <LayoutTextFlip
                        text=""
                        words={["Streamer", "Friend", "Buddy", "Gamer", "Creator","Companion","Baddie","Helper","Assistant"]}
                    />
                      &nbsp;Launchpad</h1>
            </motion.div> */}
            <ChangingWordHero />

            {/* Subtext */}
            <p className="sm:mt-4 mt-2 text-[#A0A0A0] z-20 relative sm:px-0 px-2">
                Choose a character, customize their world, and start real conversations
                powered by AI.
            </p>

            {/* Buttons */}
            <div className="sm:mt-14 mt-8 flex gap-4 flex-wrap justify-center">
                <Link
                    href="https://app.tokyoproject.ai"
                    className="sm:px-9 sm:py-3 z-20 px-6 py-2 rounded-full bg-[#0071E3] hover:bg-blue-700 text-white text-sm md:text-base transition flex items-center justify-center"
                >
                    Launch App
                </Link>
                <Link
                    href="#"
                    className="relative sm:px-9 z-20 sm:py-3 text-[#0071E3] text-lg
                   rounded-full border border-blue-500 
                   hover:text-white
                   transition-all duration-300 ease-in-out
                   shadow-[0_0_15px_rgba(0,0,255,0.5)] 
                   backdrop-blur-sm text-sm px-6 py-3 hover:bg-[#0071E3]"
                >
                    Visit Livestream
                </Link>
            </div>
        </section>
    );
};

export default Hero;
