import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProductItem from "../ProductItem/ProductItem";
import SectionHeader from "../UI/SectionHeader/SectionHeader";

import { DUMMY_PRODUCTS } from "../../constants";

import "./ProductSlider.styles.scss";

const ProductSlider = () => {
  return (
    <>
      <SectionHeader title="You may also like" />
      <Container fluid="lg" className="products">
        <Swiper
          loop={true}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          <Row>
            {DUMMY_PRODUCTS.map((productItem) => (
              <Col key={productItem.id} xs={3} sm={6} md={4} lg={3}>
                <SwiperSlide>
                  <ProductItem inShopPage={false} {...productItem} />
                </SwiperSlide>
              </Col>
            ))}
          </Row>
        </Swiper>
      </Container>
    </>
  );
};

export default ProductSlider;
