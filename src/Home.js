
import {Link } from "react-router-dom";
// import { Blob } from 'react-blob'
import styled from 'styled-components';
import './BlobStyles.css';

const Container = styled.div`
  
  flex: 1;
  width: 100vw;
  height: 100vh;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
	position: relative;
`;

const Button = styled.p`
  // font-size: 1.2em;
  margin-block-start: 0.3em;
  margin-block-end: 0.3em;
  color: black
  background-color: white
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover, &:active {
        text-decoration: underline;
    }
    cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👈</text></svg>") 16 0,auto; /*!emojicursor.app*/

`;

     
  // const { height, width } = useWindowDimensions();

function Home() {
  

  return (
        <Container>
          {/* <BackgroundBlobTop/>
          <BackgroundBlobBottom/> */}
          {/* <p>width: {width} ~ height: {height}</p> */}
          <StyledLink to="/aboutme"><Button>about</Button></StyledLink>
          <StyledLink to="/timeline"><Button>experience</Button></StyledLink>
          <StyledLink to="/skill"><Button>skill</Button></StyledLink>
          <StyledLink to="/sandbox"><Button>project</Button></StyledLink>
          {/* <StyledLink to="/interest"><Button>interests</Button></StyledLink> */}
          <StyledLink to="/hireme"><Button>contact</Button></StyledLink>
          {/* <div class="shape-blob"></div> */}
        </Container>
  );
}

export default Home;
