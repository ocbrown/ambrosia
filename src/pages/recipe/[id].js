import { useRecipes } from "@/hooks/useRecipes";
import { useRouter } from "next/router";
import { Container, Row, Col, Card } from "react-bootstrap";

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;
  const { recipes } = useRecipes();
  const recipe = recipes.find((r) => r.id === id);

  return (
    <Container className="mt-3">
      <Card className="mb-3">
        <Card.Body className="mx-auto">
          <Card.Title>{recipe.name}</Card.Title>

          <Card.Text>
            {recipe.ingredients.map((ingredient) => (
              <Row className="mb-2">
                <Col>{ingredient.name}</Col>

                <Col>{ingredient.quantity}</Col>
              </Row>
            ))}
            {recipe.instructions.map((instruction, index) => (
              <Row className="mb-2">
                <Col>Step {index + 1}</Col>
                <Col>{instruction}</Col>
              </Row>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Recipe;
