import React, { useRef, useCallback, useState } from 'react';
import ScrollBar from './ScrollBar';
import Project from './Project';

const projectLists = [
  {
    title: "About",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
  {
    title: "Projects",
    subtitle: "Platform Design",
    description: "We redesigned and rebuilt the Blue Diamond website from the ground-up.",
  },
  {
    title: "Skills",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
  {
    title: "Open Source Modules",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
  {
    title: "Experience",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
]

const Projects = props => {
  // const classes = useStyles();
  
  const projectsRef = useRef(null);
  const [currentTransform, setCurrentTransform] = useState(0);
  const onWheelEvent = useCallback((event) => {
    const { deltaY } = event;
    projectsRef.current.scrollBy(deltaY, 0);
    setCurrentTransform((v) => {
      const newValue = v + deltaY;
      if (newValue < 0) {
        return 0;
      }
      if (newValue > (projectsRef.current.clientWidth - 374)) {
        return (projectsRef.current.clientWidth - 374);
      }
      return newValue;
    });
  }, [projectsRef]);

  const { setSelectedProjectIndex } = props;
  const mouseOver = useCallback((current) => () => {
    setSelectedProjectIndex(current.toString());
  }, [setSelectedProjectIndex]);

  const mouseOut = useCallback(() => {
    setSelectedProjectIndex(undefined);
  }, [setSelectedProjectIndex]);

  return (
    <div ref={projectsRef} className={props.className} onWheel={onWheelEvent} >
      {projectLists.map((each, index) => 
        <Project
          key={`pro${index}`}
          mouseOut={mouseOut}
          mouseOver={mouseOver(index)}
          title={each.title}
          subtitle={each.subtitle}
          description={each.description}
        />)}
      <ScrollBar style={{ transform: `translateX(${currentTransform}px)`, width: 374 }}/>
    </div>
  );
}

export default Projects;