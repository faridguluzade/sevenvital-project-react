import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { getMagazines } from "../../store/magazines/magazinesSlice";
import { useMagazines } from "../../hooks/useMagazines";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MagazineItem from "../MagazineItem/MagazineItem";
import SectionHeader from "../UI/SectionHeader/SectionHeader";

import "./MagazineSlider.styles.scss";

const MagazineSlider = () => {
  useMagazines();
  const magazines = useSelector(getMagazines);

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
            {magazines?.map((magazine) => (
              <Col key={magazine.id} xs={12} sm={6} xl={4}>
                <SwiperSlide>
                  <MagazineItem {...magazine} />
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
