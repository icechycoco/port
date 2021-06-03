import logo from '../logo.svg';
// import './.css';
// import {Link } from "react-router-dom";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const Container = styled.div`
  
  // flex: 1;
  // width: 100vw;
  // height: 100vh;

  background-color: white;

  // display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.2em;
  color: black;
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;`;

  // const Nav = styled.nav`
  // font-size: 1.2em;
  // color: black;
  // margin-block-start: 0.2em;
  // margin-block-end: 0.2em;`;

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

function Interest() {
  let history = useHistory();

  return (
    <Container>
      {/* <Nav fixed="top">
      <Link to='/'>
      <img
        src="/logo.svg"
        width="30"
        height="30"
        // className="d-inline-block align-top"
        // alt="React Bootstrap logo"
      />
      </Link>
      </Nav> */}
        <Link onClick={() => history.goBack()}><FaChevronCircleLeft style={{width: '20px' ,height: '20px'}}/></Link> 
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            {/* <span style={{ }}>seem like i'm doing nothing. </span> */}
              <span style={{ }}>Let't me show you what's spining in my head 😀</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ }}>I'm FadeUpScrollOut ✨</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={FadeUp}>
              <span style={{ }}>I'm FadeUp ⛅️</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <span style={{ }}>
                <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
            <   Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ }}>Done</span>
              <span style={{ }}>
                There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
              </span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
    </Container>
  );
}

export default Interest;
