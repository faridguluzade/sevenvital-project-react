import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Button from "../UI/Button/Button";

import "./Magazine.styles.scss";

const DUMMY_MAGAZINES = [
  {
    id: 1,
    imgUrl:
      "	https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/vim0094.jpg",
    title: "Organic farming: best modern practices",
    date: "December 2, 2022",
  },
  {
    id: 2,
    imgUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/vim0096.jpg",
    title: "The science behind CBD products",
    date: "December 2, 2022",
  },
  {
    id: 3,
    imgUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/vim0097.jpg",
    title: "How to use CBD in everyday life",
    date: "December 2, 2022",
  },
  {
    id: 4,
    imgUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/vim0095.jpg",
    title: "Losing weight with CBD",
    date: "December 2, 2022",
  },

  {
    id: 5,
    imgUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/vim0090.jpg",
    title: "How to choose a right CDB product",
    date: "December 1, 2022",
  },
  {
    id: 6,
    imgUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/vim0091.jpg",
    title: "Wellness and CBD: rest & relaxation",
    date: "November 9, 2022",
  },
  {
    id: 7,
    imgUrl:
      "	https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vim0301.jpg",
    title: "What to look for in quality CBD products",
    date: "November 5, 2022",
  },
];

const Magazine = () => {
  return (
    <>
      <SectionHeader title="New From Our Magazine" />
      <Container fluid className="magazine px-3">
        <Swiper
          loop={true}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <Row>
            {DUMMY_MAGAZINES.map((magazineItem) => (
              <Col key={magazineItem.id} xs={12} sm={6} xl={4}>
                <SwiperSlide>
                  <div className="magazine__card">
                    <figure className="magazine__photo">
                      <img src={magazineItem.imgUrl} alt="" />
                    </figure>

                    <div className="magazine__content">
                      <h3 className="magazine__title">{magazineItem.title}</h3>
                    </div>

                    <span className="magazine__date">{magazineItem.date}</span>
                    <Button filled={true} className="magazine__btn">
                      Read Article
                    </Button>
                  </div>
                </SwiperSlide>
              </Col>
            ))}
          </Row>
        </Swiper>
      </Container>
    </>
  );
};

export default Magazine;
