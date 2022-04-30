import React from "react";
import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('particles-bg'), {
    ssr: false,
});


export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-white" style={{ background: '#0d1117D0',height:'100%',width:'100%', }}>
            <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={50} />
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-white">
                        <span className="font-semibold tracking-wide text-2xl sm:text-3xl">
                            <span className="text-white">Hi, I'm</span>
                            <span className="text-white"> </span>
                            <span className="text-white">Hamza</span>
                        </span>
                        <br className="hidden lg:inline" />
                            <img alt="my Photo" src="https://avatars.githubusercontent.com/u/40549481?s=400&u=ecbf1b8f09252aad5121ea5a9df5121b918e6706&v=4" style={{"borderRadius":"50%","width":"300px","height":"300px","border":"5px solid white",display:"inline-block"}} className="inline-block" />
                        <span className="mt-1 text-lg">
                            Cs Student at 1337 school and a web/mobile developer from Morocco 🇲🇦
                        </span>
                        <br className="hidden lg:inline" />
                        <span className="mt-1 text-lg">
                            I'm a passionate about Mobile development and I love to learn new things.
                        </span>
                        <br />
                        <span className="mt-2 text-lg">
                            <a href="https://github.com/hamzaelkhatri" className="font-medium text-white">
                                <img src="https://img.icons8.com/color/48/000000/github.png" alt="github" className="inline-block h-11 w-11" />
                            </a>
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" className="inline-block h-11 w-11" />
                            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" className="inline-block h-11 w-11" />
                            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" className="inline-block h-11 w-11" />
                        </span>
                    </p>
                </div>
            </div>
            {children}
        </div>
    )
}