import React, { useEffect, useState } from 'react';
import { Modal, Button, Space, notification } from 'antd';
import Canvas from './Canvas';
import { SmileOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';

export default function Modals() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const key = 'updatable';

    const btn = (
        <Space>
            <Button size="small" onClick={() => {
                notification.close(key)
                setIsModalVisible(true)
            }
            } style={{ background: '#1890ff', color: '#fff' }}>
                YES
            </Button>
            <Button size="small" onClick={() => {
                notification.close(key)
                setIsModalVisible(false)
            }} style={{ background: 'red', color: '#fff' }}>
                NOP
            </Button>
        </Space>
    );


    const openNotification = () => {
        notification.open({
            key,
            message: 'Welcome to My Portfolio',
            description: 'Do you want to play a game with My bot?',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            duration: 0,
            btn,

        });
    };
    useEffect(() => {
        openNotification();
    }, []);

    return (
        <>
            <Modal visible={isModalVisible}
                onOk={() => {
                    setIsModalVisible(false)
                }}
                onCancel={() => {
                    setIsModalVisible(false)
                }}
                footer={null}
                style={{
                    color: '#0d117D0'
                }}
                width={'56%'}>
                <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                    <Canvas />
                </div>
            </Modal>
        </>
    );
};
