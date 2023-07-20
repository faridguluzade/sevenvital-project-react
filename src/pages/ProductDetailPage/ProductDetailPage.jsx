import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UisCheckCircle } from "@iconscout/react-unicons-solid";

//components
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Guarantee from "../../components/Guarantee/Guarantee";
import ProductSlider from "../../components/ProductSlider/ProductSlider";

import "./ProductDetailPage.styles.scss";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetail />
      <section className="section-guarantee">
        <Guarantee />
      </section>
      <Container className="product-desc">
        <Row className="align-items-center">
          <Col xs={6}>
            <figure>
              <img
                src="https://the7.io/cbd/wp-content/uploads/sites/104/elementor/thumbs/vim0307-pyog4k9n1bie9sh4mnzzl5rdx14x0i1olidfoxvxgo.jpg"
                alt=""
                className="w-100 p-5"
              />
            </figure>
          </Col>
          <Col xs={6}>
            <div className="about__text-box p-5">
              <h3 className="about__title">Product description</h3>
              <p className="about__paragraph">
                Nam vitae sapien dapibus, condimentum ipsum non, porttitor
                purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet
                aliquam. Suspendisse potenti vitae sapien dapibus, condimentum,
                porttitor purus posuere felis vestibulum pharetra dapibus. Nam
                vitae sapien dapibus dolor!
              </p>
              <ul className="about__details">
                <li>
                  <UisCheckCircle />
                  <span> Sustainable organic production</span>
                </li>
                <li>
                  <UisCheckCircle /> <span>100% vegan product</span>
                </li>
                <li>
                  <UisCheckCircle /> <span> Premium quality CBD products</span>
                </li>
                <li>
                  <UisCheckCircle />
                  <span> Clinically tested</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={6}>
            <div className="p-5 ">
              <h3 className="product-desc__title"> How to use</h3>
              <div className="product-desc__content-box">
                <h4>Recommended dosage</h4>
                <p>
                  1-2 measuring spoons dapibus, condimentum ipsum non, porttitor
                  purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet
                  aliquam.
                </p>
              </div>
              <div className="product-desc__content-box">
                <h4>General recommendations</h4>
                <p>
                  Cras et diam ac – nunc urna magna, porttitor eu laoreet
                  aliquam. Suspendisse potenti vitae sapien dapibus,
                  condimentum, porttitor purus posuere felis vestibulum pharetra
                  dapibus. Nam vitae sapien dapibus dolor!
                </p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <figure>
              <img
                src="https://the7.io/cbd/wp-content/uploads/sites/104/elementor/thumbs/vim0308-pyog4jbsuhh3y6ihs5ld0nzxbn9jssxy9dpy7nxbmw.jpg"
                alt=""
                className="w-100 p-5"
              />
            </figure>
          </Col>
        </Row>
      </Container>
      <ProductSlider />
    </>
  );
};

export default ProductDetailPage;
