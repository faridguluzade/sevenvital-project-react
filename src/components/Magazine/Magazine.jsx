import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getMagazines } from "../../store/magazines/magazinesSlice";
import { useMagazines } from "../../hooks/useMagazines";

import MagazineItem from "../MagazineItem/MagazineItem";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

import "./Magazine.styles.scss";

const Magazine = () => {
  useMagazines();
  const { magazines, status } = useSelector(getMagazines);

  if (status === "loading") return <Spinner />;

  const filteredMagazine = magazines.filter((magazineItem, index) => index < 6);

  return (
    <Container fluid className="magazine px-5">
      <Row>
        {filteredMagazine.map((magazine) => (
          <Col key={magazine.id} className="mb-5" xs={12} sm={6} xl={4}>
            <MagazineItem {...magazine} />
          </Col>
        ))}
      </Row>
      <Row className="text-center">
        <Col xs={12}>
          <Button className="products__link">Load More articles...</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Magazine;
