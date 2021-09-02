import logo from '../logo.svg';
// import './App.css';
import styled from 'styled-components';
// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import { Chrono } from "react-chrono";

import { useHistory } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";



const Container = styled.div`
  
  flex: 1;
  // width: 100vw;
  // height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.section`
  // flex:1;
  // padding: 20px;
  // padding-top: 5px;
  background: white;
  margin:50px;
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

  const items = [{
    title: "04/21 - present",
    cardTitle: "LINE Company (Thailand)",
    cardSubtitle:"data analyst - datalabs team",
    cardDetailedText: "specialize in dashboarding & creating ecommerce metrics",
  },
  {
    title: "02/21 - present",
    cardTitle: "Global Shapper Bankgok Hub",
    cardSubtitle:"community under world economic forum",
    cardDetailedText: "doing circular economy project",
  },
  {
    title: "11/18 - 04/21",
    cardTitle: "Agoda",
    cardSubtitle:"people data analyst",
    cardDetailedText: "improved and optimized people process throught data",
  },
  {
    title: "10/20",
    cardTitle: "Datathon",
    cardSubtitle:"won 3rd prize out of 12 teams",
    cardDetailedText: "transformed bangkok's budget.pdf into presentable site",
  },
  {
    title: "02/20 - 08/20",
    cardTitle: "TEDxBangkok",
    cardSubtitle:"curator",
    cardDetailedText: "brought out the best in speakers & helped them created talks",
  },
  {
    title: "06/19 - 12/19",
    cardTitle: "TEDxCharoenkrung",
    cardSubtitle:"product owner/ data vizualizer",
    cardDetailedText: "defined vision & searved others when needed & prioritized tasks & got things done",
  },
  {
    title: "04/19",
    cardTitle: "Smogathon Thailand",
    cardSubtitle:"won 1st prize out of 10 teams",
    cardDetailedText: "pitched creative solution for sovling pm2.5 in chiangmai",
  },
  {
    title: "05/18",
    cardTitle: "Freelance front end dev",
    cardDetailedText: "1st time coding react 💡",
  },
  {
    title: "01/18 - 10/18",
    cardTitle: "gap year @Melbourne",
    // cardSubtitle:"",
    cardDetailedText: "i love melbourne <3",
  },
  {
    title: "05/17 - 07/17",
    cardTitle: "internship @SCG",
    cardSubtitle:"web developer",
    cardDetailedText: "collected data & created knowledge management site",
  },
  {
    title: "08/14 - 12/17",
    cardTitle: "KMUTT @Thailand",
    cardSubtitle:"studied computer sci",
    cardDetailedText: "achieved 2nd class honor and realised that i'm not bad at math",
  },
  {
    title: "01/02 - 03/14",
    cardTitle: "Assumptionsuksa school",
  },
  {
    title: "1996",
    cardTitle: "Born",
  }
];

function Time() {
  let history = useHistory();
  return (
        <Container>
          <Link onClick={() => history.goBack()}>
            <FaChevronCircleLeft style={{width: '20px' ,height: '20px'}}/>
          </Link>
          <Wrapper>
            <Chrono
              items={items}
              mode="VERTICAL"
              hideControls
              cardWidth='300'
              cardHeight='100'
              useReadMore={false}
              theme={{primary: "black",secondary: "white", cardBgColor: "transparent", cardForeColor: "black"}}
              />
          </Wrapper>
        </Container>
  );
}

export default Time;
