import React, { useState } from 'react';
import { Modal, Button } from 'antd';
// import 'antd/dist/antd.css';

export default function Modals() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={true} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

// export default App

// export default function Modals() {
//     return (
//     <Button onClick={countDown}>Open modal to close in 5s</Button>
//     )
// }