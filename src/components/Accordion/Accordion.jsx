import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilAngleDown } from "@iconscout/react-unicons";
import { UilAngleUp } from "@iconscout/react-unicons";

import SectionHeader from "../UI/SectionHeader/SectionHeader";

import "./Accordion.styles.scss";

const DUMMY_ACCORDION = [
  {
    id: 1,
    questions: "Is CBD safe?",
    answer:
      "Etiam velit purus, vehicula quis imperdiet dignissim,  convallis vitae nisl. Nullam facilisi. Pellentesque non pulvinar justo. Nullam eget neque ut tellus ornare ullamcorper ulla ambco mattis for nulla glavrida egesed!",
  },
  {
    id: 2,
    questions: "What are cannabinoids?",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis!",
  },

  {
    id: 3,
    questions: "How does CBD work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Etiam velit purus, vehicula quis imperdiet dignissim, convallis vitae nisl. Nullam facilisi. Pellentesque non pulvinar justo. Nullam eget neque!",
  },

  {
    id: 4,
    questions: "Are CBD products vegan friendly?",
    answer:
      "Dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Etiam velit purus, vehicula quis imperdiet dignissim, convallis vitae nisl. Nullam facilisi. Pellentesque non pulvinar justo. Nullam eget neque!",
  },

  {
    id: 5,
    questions: "Can I use CBD with medication?",
    answer:
      "Nullam eget neque ut tellus ornare ullamcorper ulla ambco mattis for nulla glavrida egesed! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Nullam eget neque ut tellus ornare ullamcorper ulla ambco mattis for nulla glavrida egesed!",
  },

  {
    id: 6,
    questions: "Does CBD have side effects?",
    answer:
      "Etiam velit purus – vehicula quis imperdiet dignissim, convallis vitae nisl. Pellentesque non pulvinar justo. Nullam eget neque ut tellus ornare ullamcorper ulla ambco mattis for nulla glavrida egesed!",
  },
  {
    id: 7,
    questions: "Can children take CBD?",
    answer:
      "Nullam eget neque ut tellus ornare ullamcorper ulla ambco mattis for nulla glavrida egesed!",
  },
  {
    id: 8,
    questions: "Will CBD get me high?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis!",
  },
];

const Accordion = () => {
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
            {DUMMY_ACCORDION.map((item, index) => {
              return (
                <div key={item.id} className={`accordion__item`}>
                  <div
                    className="accordion__select-box"
                    onClick={(e) => toggleHandler(e, index)}
                  >
                    <h4 className="accordion__text">{item.questions}</h4>
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
