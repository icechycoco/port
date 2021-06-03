import logo from '../logo.svg';
// import './.css';
import styled from 'styled-components';
import { Nav, Row, Col } from 'react';
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
  font-size: 1.2em;
  color: black;
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;`;

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
  width: 40px;
  height: 40px;
`;

function Sandbox() {
  let history = useHistory();

  return (
        <Container>
          <Link onClick={() => history.goBack()}><FaChevronCircleLeft style={{width: '20px' ,height: '20px'}}/></Link>
          <Wrapper>
            <Text>🚧</Text>
            <Text>in progress of collecting my projects</Text>
            {/* <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row> */}
          </Wrapper>
        </Container>
  );
}

export default Sandbox;
