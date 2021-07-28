import logo from '../logo.svg';
// import './App.css';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";

import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useMeasure, usePrevious } from '../helper'
import { Global, Frame, Content, toggle, Container } from './stylesSkill'
import * as Icons from '../icons'

function Tree({ children, name, style, open = false }) {
  const [isOpen, setOpen] = useState(open)
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

function Skill() {
  let history = useHistory();

  return (
    <Container>
      <Link onClick={() => history.goBack()}>
        {/* <FaChevronCircleLeft style={{width: '20px' ,height: '20px'}}/> */}
      </Link>
      <Tree name="skills" defaultOpen>
        <Tree name="programming languages" >
          <Tree name="java" />
          <Tree name="react" />
          <Tree name="html" />
          <Tree name="css" />
          <Tree name="python" />
          <Tree name="sql" />
        </Tree> 
        <Tree name="tools & programs">
          <Tree name="etl tools (Talend)" />
          <Tree name="git" />
          <Tree name="data viz like tableau, d3.js" />
          <Tree name="and many more.. 🤔" />
        </Tree>
        <Tree name="🏄‍♂️" />
        <Tree name="soft skills">
          <Tree name="project management" />
          <Tree name="critical & creative thinking" />
          <Tree name="life-long learning" />
          <Tree name="problem solving" />
          <Tree name="automate things" />
        </Tree>
        <Tree name="there are some random things" />
        <Tree name="i've learned">
          <Tree name="making avocado icecream 🥑" />
          <Tree name="organizing things into spreadsheet" />
          <Tree name="i'll teach you 👆, if you hire me" />
        </Tree>
        <Tree name="back to homepage">
          <Tree name="👈 click it!"/>
          <Link onClick={() => history.goBack()}></Link>
        </Tree>
        
      </Tree>
    </Container>
  );
}

export default Skill;
