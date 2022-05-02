import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import { Button, notification, Space } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import Modals from "./Modals";
// import 'antd/dist/antd.css';



const key = 'updatable';
export default function Content({ children }: { children: React.ReactNode }) {

    const btn = (
        <Space>
            <Button size="small" onClick={() => notification.close(key)} style={{ background: '#1890ff', color: '#fff' }}>
                Confirm
            </Button>
            <Button size="small" onClick={() => notification.close(key)} style={{ background: 'red', color: '#fff' }}>
                Cancel
            </Button>
        </Space>
    );


    const openNotification = () => {
        notification.open({
            key,
            message: 'Welcome to My Portfolio',
            description: 'Do you want to play a game?',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
        setTimeout(() => {
            notification.open({
                key,
                message: 'Welcome to My Portfolio',
                description: 'Im not jocking. ',
                btn,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                duration: 0,

            });
        }, 2000);
    };
    useEffect(() => {
        openNotification();
    }, []);
    return (
        <div style={{ background: '#0d117D0', height: '100%', width: '100%', }}>
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-white">
                        <span className="font-semibold tracking-wide text-2xl sm:text-3xl">
                            <span className="text-white">Hi, I'm</span>
                            <span className="text-white"> </span>
                            <span className="text-white">Hamza</span>
                        </span>
                        <br className="hidden lg:inline" />
                        {/* <img alt="my Photo" src="https://avatars.githubusercontent.com/u/40549481?s=400&u=ecbf1b8f09252aad5121ea5a9df5121b918e6706&v=4" style={{"borderRadius":"50%","width":"300px","height":"300px","border":"5px solid white",display:"inline-block"}} className="inline-block" /> */}
                        <span className="mt-1 text-lg">
                            Computer Student at 1337 school and a web/mobile developer from Morocco 🇲🇦
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
                            <a href="https://www.linkedin.com/in/hamza-elkhatri/" className="font-medium text-white">
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" className="inline-block h-11 w-11" />
                            </a>
                            <a href="https://twitter.com/HElkhatri" className="font-medium text-white">
                                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" className="inline-block h-11 w-11" />
                            </a>
                            <a href="https://www.instagram.com/hamzaelkhatri/" className="font-medium text-white">
                                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" className="inline-block h-11 w-11" />
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            {children}
        </div>
    )
}