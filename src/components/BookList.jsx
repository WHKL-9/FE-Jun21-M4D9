import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const BookList = ({ books }) => {
  const [searchQuery, setsearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  // state = {
  //     searchQuery: '',
  //     selectedBook: null
  // }

  return (
    <Container>
      <Row>
        <Col md={8} lg={8}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) =>
                    setsearchQuery({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={3} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeSelectedBook={(asin) =>
                      setSelectedBook({
                        selectedBook: asin,
                      })
                    }
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4} lg={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;

// converted
