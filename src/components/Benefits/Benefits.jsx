import React from "react";

import SectionHeader from "../UI/SectionHeader/SectionHeader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilHeadSide } from "@iconscout/react-unicons";
import { UilMoonset } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilCell } from "@iconscout/react-unicons";
import { UilPagelines } from "@iconscout/react-unicons";
import { UilMedicalSquare } from "@iconscout/react-unicons";

import "./Benefits.styles.scss";

const DUMMY_BENEFITS = [
  {
    id: 1,
    title: "Calmness & inner peace",
    description:
      " Duis vitae - purus ornare ac turpis a tellus posuer condimentum vitae vitae libero. Curabitur vitae purus ornare aliquet vitae nulla nec posuere.",
    icon: <UilHeadSide size={40} />,
  },
  {
    id: 2,
    title: "Better sleep & recovery",
    description:
      " Proin ligula justo iaculis quis velit vitae purus ornare in tempus id purus. Lorem tesque a nisl ac nibh venenatis ultricies.",
    icon: <UilMoonset size={40} />,
  },
  {
    id: 3,
    title: "Pain relieve",
    description:
      "Justo iaculis quis velit vitae purus ornare in tempus id purus. Lorem tesque a nisl ac nibh venenatis ultricies.",
    icon: <UilTear size={40} />,
  },
  {
    id: 4,
    title: "Better looking skin",
    description:
      " Ligula justo iaculis quis velit vitae purus ornare in tempus id purus. Lorem tesque a nisl ac nibh venenatis ultricies ligula justo iaculis vitae purus ornare.",
    icon: <UilCell size={40} />,
  },
  {
    id: 5,
    title: "Vitamins & antioxidants",
    description:
      " Purus tesque a nisl ornare in tempus - iaculis quis velit vitae purus ornare in tempus id purus. Lorem tesque a nisl ac nibh venenatis ultricies.",
    icon: <UilPagelines size={40} />,
  },

  {
    id: 6,
    title: "Overall health improvement",
    description:
      " Purus ornare in tempus - iaculis quis velit vitae purus ornare in tempus id purus. Lorem tesque a nisl ac nibh venenatis ultricies.",
    icon: <UilMedicalSquare size={40} />,
  },
];

const Benefits = () => {
  return (
    <>
      <SectionHeader title="What Will You Get" />
      <Container fluid="lg" className="benefits">
        <Row>
          {DUMMY_BENEFITS.map((benefitItem) => (
            <Col key={benefitItem.id} xs={12} md={6} className="py-5">
              <div className="benefits__box">
                <div className="benefits__icon">{benefitItem.icon}</div>
                <h3 className="benefits__title">{benefitItem.title}</h3>
                <p className="benefits__description">
                  {benefitItem.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Benefits;
