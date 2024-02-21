import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getMagazines } from "../../services/apiMagazines";
import { useFetch } from "../../hooks/useFetch";

import MagazineItem from "../MagazineItem/MagazineItem";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

import "./Magazine.styles.scss";
import { useEffect, useState } from "react";

const Magazine = () => {
  const { data: magazines, isLoading } = useFetch(getMagazines);
  const [filteredMagazine, setFilteredMagazine] = useState([]);

  useEffect(() => {
    const filteredMagazine = magazines.filter(
      (magazineItem, index) => index < 6
    );
    setFilteredMagazine(filteredMagazine);
  }, [magazines]);

  function handleLoadMore() {
    setFilteredMagazine(magazines);
  }

  if (isLoading) return <Spinner />;

  return (
    <Container fluid className="magazine px-5">
      <Row>
        {filteredMagazine.map((magazine) => (
          <Col key={magazine.id} className="mb-5" xs={12} sm={6} xl={4}>
            <MagazineItem {...magazine} />
          </Col>
        ))}
      </Row>
      {filteredMagazine.length !== 7 && (
        <Row className="text-center">
          <Col xs={12}>
            <Button onClick={handleLoadMore} className="products__link">
              Load More articles...
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Magazine;
