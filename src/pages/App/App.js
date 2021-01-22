import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

import CalcValues from "./components/CalcValues";
import Indicated from "./components/Indicated";
import Form from "./components/Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <div>learn react</div>
      <Container>Fab Calculator</Container>
      {/* <Form></Form>
      <Indicated></Indicated>
      <CalcValues></CalcValues> */}
    </>
  );
}

export default App;
