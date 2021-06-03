import logo from '../logo.svg';
// import './App.css';
import styled from 'styled-components';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Confetti from 'react-confetti'
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
  width: 500px;
  height: 300px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1em;
  lineHeight 1em;
  color: black;
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;`;

  const Link = styled.a`
    color: black;
    text-decoration: none;
    margin-left: 10px;
    &:hover, &:active {
        // text-decoration: underline;
        color: gray;
    }
`;

  const LinkBack = styled.a`
  color: gray;
  text-decoration: none;
  position: absolute;
  top: 5%;
  left: 3%;
  &:hover, &:active {
      // text-decoration: underline;
      color: black;
  };
  width: 40px;
  height: 40px;
  `;

function Hireme() {
  let history = useHistory();

  return (
        <Container>
          <LinkBack onClick={() => history.goBack()}><FaChevronCircleLeft style={{width: '20px' ,height: '20px'}}/></LinkBack>
          <Wrapper> 
            {/* <Confetti /> */}
            {/* <Text>congrats to me...</Text> */}
            {/* <Text></Text> */}
            <Text>nareegarn tansuwansophon</Text>
            <Text>nareegarn.tan@gmail.com</Text>
            <Text>+66851125999 (TH)</Text>
            <Text></Text>
            <span>
              <Link target="_blank" href="https://www.facebook.com/icechycoco/"><FaFacebook/></Link> 
              <Link target="_blank" href="https://github.com/icechycoco" ><FaGithub/></Link> 
              <Link target="_blank" href="https://www.linkedin.com/in/nareegarn/" ><FaLinkedin/></Link> 
            </span>
          </Wrapper>
        </Container>
  );
}

export default Hireme;
