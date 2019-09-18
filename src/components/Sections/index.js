import React, { useRef, useCallback, useState } from 'react';
import ScrollBar from './ScrollBar';
import Section from './Section';

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

const Sections = props => {
  // const classes = useStyles();
  
  const sectionsRef = useRef(null);
  const [currentTransform, setCurrentTransform] = useState(0);
  const onWheelEvent = useCallback((event) => {
    const { deltaY } = event;
    sectionsRef.current.scrollBy(deltaY, 0);
    setCurrentTransform((v) => {
      const newValue = v + deltaY;
      if (newValue < 0) {
        return 0;
      }
      if (newValue > (sectionsRef.current.clientWidth - 374)) {
        return (sectionsRef.current.clientWidth - 374);
      }
      return newValue;
    });
  }, [sectionsRef]);

  const { setSectionIndex } = props;
  const mouseOver = useCallback((current) => () => {
    setSectionIndex(current.toString());
  }, [setSectionIndex]);

  const mouseOut = useCallback(() => {
    setSectionIndex(undefined);
  }, [setSectionIndex]);

  return (
    <div ref={sectionsRef} className={props.className} onWheel={onWheelEvent} >
      {projectLists.map((each, index) => 
        <Section
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

export default Sections;