// import './App.css';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";


const Container = styled.div`
  
  flex: 1;
  width: 100vw;
  height: 100vh;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Wrapper = styled.div`
  
  // flex: 1;
  // width: 500px;
  // height: 300px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
`;

const Text = styled.p`
  font-size: 1em;
  lineHeight 1em;
  color: black;
  text-align: center;
  // margin-block-start: 0.2em;
  // margin-block-end: 0.2em;
  `;

  const Link = styled.a`
    color: gray;
    text-decoration: none;
    position: absolute;
    top: 5%;
    left: 3%;
    &:hover, &:active {
        // text-decoration: underline;
        color: black;
    };
`;

function Aboutme() {
  let history = useHistory();

  return (
        <Container>
          <Link onClick={() => history.goBack()}>
            <FaChevronCircleLeft style={{width: '20px' ,height: '20px'}}/>
            {/* <p style={{fontSize:'20px'}}>👈</p> */}
            </Link>
          <Wrapper>
            <Text>nareegarn here.<br/>
            i like data stuffs, coding, and design.
            a hybrid data person 🤓</Text>
          </Wrapper>
        </Container>
  );
}

export default Aboutme;
