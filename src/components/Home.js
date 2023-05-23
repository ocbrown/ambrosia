import React from "react";
import Link from "next/link";
import { useRecipes } from "@/hooks/useRecipes";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  const { recipes } = useRecipes();

  return (
    <Container className="mt-3">
      <Row>
        {recipes.map((recipe, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Link href={`recipe/${recipe.id}`} className="recipeLink">
              <Card className="recipe mb-3">
                <Card.Body>
                  <Card.Title>{recipe.id}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Link href="" className="recipeLink">
            <Card className="recipe mb-3">
              <Card.Body>
                <Card.Title>+ Add Recipe</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
