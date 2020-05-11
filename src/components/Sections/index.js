import React, { useRef, useCallback, useState } from 'react';
import ScrollBar from './ScrollBar';
import Section from './Section';

const Sections = props => {
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

  const { setSectionIndex, sectionLists, scrollBar } = props;
  const mouseOver = useCallback((current) => () => {
    if (current === 0 ) return;
    setSectionIndex(current.toString());
  }, [setSectionIndex]);

  const mouseOut = useCallback(() => {
    setSectionIndex(undefined);
  }, [setSectionIndex]);
  return (
    <div ref={sectionsRef} className={props.className} onWheel={onWheelEvent} >
      {sectionLists.map((each, index) => 
        <Section
          sectionIndex={props.sectionIndex}
          key={`pro${index}`}
          url={each.pageUrl}
          mouseOut={mouseOut}
          mouseOver={mouseOver(index)}
          title={each.title}
          subtitle={each.subtitle}
          description={each.description}
          first={each.first}
          titles={each.titles}
        />
      )}
      {scrollBar && <ScrollBar style={{ transform: `translateX(${currentTransform}px)`, width: 374 }}/>}
    </div>
  );
}

export default Sections;