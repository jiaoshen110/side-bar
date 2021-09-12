import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../components/Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background: transparent;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function Overview() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div className="home">
        <h1>Overview</h1>
      </div>
      <Container>
        <Button onClick={openModal}>I am a modal</Button>
        <Modal setShowModal={setShowModal} showModal={showModal} />
      </Container>
    </>
  );
}

export default Overview;
