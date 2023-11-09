import React, { useState } from "react";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useAccordions } from "../../hooks/useAccordions";

import SectionHeader from "../UI/SectionHeader/SectionHeader";

import "./Accordion.styles.scss";

const Accordion = () => {
  const { accordions } = useAccordions();

  const [selected, setSelected] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  const toggleHandler = (e, index) => {
    const clicked = e.target.closest(".accordion__select-box");

    if (!clicked) return;

    const hiddenContent = clicked.nextElementSibling;
    setScrollHeight(hiddenContent.scrollHeight + "px");

    if (selected === index) {
      setSelected(null);
      return;
    }

    setSelected(index);
  };

  return (
    <>
      <SectionHeader title="Frequent Questions About CBD" />

      <Container fluid="lg" className="accordion px-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            {accordions.map((item, index) => {
              return (
                <div key={item.id} className="accordion__item">
                  <div
                    className="accordion__select-box"
                    onClick={(e) => toggleHandler(e, index)}
                  >
                    <h4 className="accordion__text">{item.question}</h4>
                    {selected === index ? (
                      <UilAngleUp size={30} className="accordion__icon--up" />
                    ) : (
                      <UilAngleDown
                        size={30}
                        className="accordion__icon--down"
                      />
                    )}
                  </div>
                  <div
                    className={`accordion__hidden-box`}
                    style={{
                      maxHeight: `${selected === index ? scrollHeight : 0}`,
                    }}
                  >
                    <p className="accordion__paragraph">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Accordion;
