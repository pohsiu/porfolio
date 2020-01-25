import React, { useRef, useCallback, useState } from 'react';
import ScrollBar from './ScrollBar';
import Section from './Section';
// import { Link } from "react-router-dom";

const sectionLists = [
  {
    title: "About",
    // subtitle: "Explore More",
    description: "More detail about myself,such as my experiences, bobbies etc.",
    pageUrl: "/about/",
  },
  {
    title: "Skill",
    // subtitle: "Product",
    description: "Somethings what I am good at or expertised in.",
    pageUrl: "/skill/",
  },
  {
    title: "Project",
    // subtitle: "Platform Design",
    description: "The past works that I could share with. Including website, application, chatbot etc.",
    pageUrl: "/project/",
  },
  {
    title: "Open Source Module",
    // subtitle: "Product",
    description: "The open source modules that I had published on social media.",
    pageUrl: "/opensource/",
  },
]

const Sections = props => {
  // const classes = useStyles();
  
  const sectionsRef = useRef(null);
  const [currentTransform, setCurrentTransform] = useState(0);
  const onWheelEvent = useCallback((event) => {
    const { deltaY, deltaX } = event;
    const useDelta = deltaY !== 0 ? deltaY : deltaX;
    sectionsRef.current.scrollBy(useDelta, 0);
    const delta = useDelta * (sectionsRef.current.clientWidth - 374) / sectionsRef.current.clientHeight;
    setCurrentTransform((v) => {
      const newValue = v + delta;
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
      {sectionLists.map((each, index) => 
        <Section
          key={`pro${index}`}
          url={each.pageUrl}
          mouseOut={mouseOut}
          mouseOver={mouseOver(index)}
          title={each.title}
          subtitle={each.subtitle}
          description={each.description}
        />
      )}
      <ScrollBar style={{ transform: `translateX(${currentTransform}px)`, width: 374 }}/>
    </div>
  );
}

export default Sections;