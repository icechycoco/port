// import './App.css';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useMeasure, usePrevious } from '../helper'
import { Frame, Content, toggle, Container } from './stylesSkill'
import * as Icons from '../icons'

function Tree({ children, name, style, open = false }) {
  const [isOpen, setOpen] = useState(true)
  const prev = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  let { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
  })
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame >
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3}} onClick={() => setOpen(!isOpen)}></Icon>
      <span style={{ verticalAlign: 'middle', fontSize:'12px' , ...style }}>{name}</span>
      <Content style={{ opacity, height: height.interpolate(height => (isOpen && prev === isOpen ? 'auto' : height)) }}>
        <animated.div style={{ transform }} {...bind}>
          {children}
        </animated.div>
      </Content>
    </Frame>
  )
}

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
const Text = styled.p`
  font-size: 1em;
  lineHeight 1em;
  color: black;
  text-align: center;
  // margin-block-start: 0.2em;
  // margin-block-end: 0.2em;
  `;

function Skill2() {
  let history = useHistory();

  return (
    <Container>
      <Tree name="hello, ">
        <Tree name="nareegarn here!">
          <Tree name="looking for a meaningful job" />
          <Tree name="believe in technology" />
          <Tree name="passionate about data, musics, and design 🤓" />
          <Tree name={<span>know me more via <a href='https://open.spotify.com/playlist/41hJmDHceMiJERHXQ7DQZC?si=71921dfffbdc4747'>playlist</a> 🎷</span>}/>
        </Tree>
        <Tree name="work experiences">
          <Tree name={<span><b>data analyst</b> - LINE Company Thailand 💚</span>}>
            <Tree name="end-to-end data analytics solution" />
            <Tree name="dashboarding and analyzing data" />
            <Tree name="creating e-commerce metrics" />
            <Tree name="recommend insights and solutions to close business gap" />
          </Tree> 
          <Tree name={<span><b>people data analyst</b> - Agoda</span>}>
            <Tree name="improved and optimized people process throught data" />
            <Tree name="designed ETL workflow" />
            <Tree name="automated work to reduce manual time spent" />
          </Tree> 
          <Tree name="frontend dev - freelance" />
        </Tree>
        <Tree name="programming skills" >
          <Tree name="java, react, javascript, html, css" />
          <Tree name="python, sql, presto, spark, hive" />
          <Tree name="etl, git, tableau, d3.js" />
        </Tree> 
        <Tree name="🏄‍♂️" />
        <Tree name="soft skills">
          <Tree name="project management" />
          <Tree name="critical & creative thinkings" />
          <Tree name="life-long learning" />
          <Tree name="problem solving" />
          <Tree name="excuting 💪" />
        </Tree>
        <Tree name="cool things i have done">
          <Tree name="curated speakers for TEDxBangkok" />
          <Tree name="Global Shaper Bangkok community under WEF ♻️" />
          <Tree name="won 1st place of smogathon thailand" />
        </Tree>
        <Tree name="there are some random things i've learned">
          <Tree name="making a very nice umeshu 🍸" />
          <Tree name="crafting rare cheesecake" />
          <Tree name="organizing things into spreadsheet" />
          <Tree name="chatbot and automation" />
        </Tree>
        <Tree name="wanna know me more">
          <Tree name="please email me nareegarn.tan@gmail.com 📧" />
          <Tree name="thank you!" />
        </Tree>
      </Tree>
    </Container>
  );
}

export default Skill2;
