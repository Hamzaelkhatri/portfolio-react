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
                Confirm
            </Button>
            <Button size="small" onClick={() => {
                notification.close(key)
                setIsModalVisible(false)
            }} style={{ background: 'red', color: '#fff' }}>
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
        <>
            <Modal  visible={isModalVisible}
                onOk={() => {
                    setIsModalVisible(false)
                }}
                onCancel={() => {
                    setIsModalVisible(false)
                }}
                footer={null}
                width={'56%'}>
                <div style={{ textAlign: 'center', width: '100%',height:'100%' }}>
                    <Canvas />
                </div>
            </Modal>
        </>
    );
};
