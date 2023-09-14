import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import MagazineItem from "../MagazineItem/MagazineItem";
import SectionHeader from "../UI/SectionHeader/SectionHeader";

import { DUMMY_MAGAZINES } from "../../constants";

import "./MagazineSlider.styles.scss";
import { useEffect } from "react";
import supabase from "../../services/supabase";
import { useState } from "react";

const MagazineSlider = () => {
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
                  <MagazineItem {...magazineItem} />
                </SwiperSlide>
              </Col>
            ))}
          </Row>
        </Swiper>
      </Container>
    </>
  );
};

export default MagazineSlider;
