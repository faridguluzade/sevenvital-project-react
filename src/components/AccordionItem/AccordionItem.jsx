import React from "react";
import { useRef, useEffect } from "react";

import { UilAngleDown } from "@iconscout/react-unicons";
import { UilAngleUp } from "@iconscout/react-unicons";

import "../Accordion/Accordion.styles.scss";

const AccordionItem = ({ item, selected, onClick, index }) => {
  const ref = useRef();
  let scrollHeight = "20px";

  // console.log(selected);

  //

  useEffect(() => {
    scrollHeight = ref.current.scrollHeight + "px";
    console.log(scrollHeight);
  }, []);

  return (
    <div key={item.id} className={`accordion__item`}>
      <div className="accordion__select-box" onClick={() => onClick(index)}>
        <h4 className="accordion__text">{item.questions}</h4>
        {selected ? (
          <UilAngleUp size={30} className="accordion__icon--up" />
        ) : (
          <UilAngleDown size={30} className="accordion__icon--down" />
        )}
      </div>
      <div
        className={`accordion__hidden-box`}
        ref={ref}
        style={{
          maxHeight: `${selected === index ? scrollHeight : 0}`,
        }}
      >
        <p className="accordion__paragraph">{item.answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
