"use client";

import Image from "next/image";
import streamflixLogo from "../../public/streamflix-logo.png";
import moviesBackdrop from "../../public/movies-backdrop.jpg";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen w-screen flex items-center flex-col justify-between">
            <div className="w-full h-[90%] relative shadow-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${moviesBackdrop.src})` }}
                />
                <div className="flex flex-col w-full h-full">
                    <div className="flex justify-between p-5 items-center w-full h-[10%] z-10">
                        <Link href={"/"}>
                            <Image className="hover:scale-105 hover:brightness-125 transition-transform" src={streamflixLogo} alt="Streamflix logo" width={200} height={200}/>
                        </Link>
                        <div className="flex items-center space-x-5">
                          <span className="font-semibold select-none">Already have an account?</span>
                          <button className="p-2 rounded-md bg-primary_accent text-md font-bold hover:bg-secondary_accent hover:scale-105 transition-transform">Sign in</button>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-80" />
                    <div className="relative flex flex-col space-y-10 justify-center items-center w-full h-full z-10">
                        <span className="w-1/3 text-center text-6xl leading-snug font-bold select-none">
                            Unlimited TV Shows, movies, and much more
                        </span>
                        <button className="p-4 rounded-md bg-primary_accent text-xl font-bold hover:bg-secondary_accent hover:scale-105 transition-transform">
                            GET STARTED
                        </button>
                    </div>
                </div>
            </div>
            <footer className="w-full h-[10%] border-t-2 border-primary_accent border-opacity-50 shadow-[0px_0px_20px_rgba(255,69,0,0.6)] row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <span className="text-sm select-none opacity-75 w-1/3 text-center">This is a sample streaming website that contains copyrighted images. You are not allowed to sell or distribute the code for it. For more information visit my <a href="https://github.com/cardosodev04" target="_blank" className="text-primary_accent hover:brightness-50 hover:cursor-pointer">Github</a></span>
            </footer>
        </div>
    );
}
