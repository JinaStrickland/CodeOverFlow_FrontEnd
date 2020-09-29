import React from "react";
import Form from "react-bootstrap/Form";

const Search = (props) => {
  return (
    <div>
      <Form onChange={(e) => props.handleSearch(e)}>
        <Form.Group controlId="formBasicSearch">
          <Form.Label>Search Questions</Form.Label>
          <Form.Control type="text" placeholder="search ..." />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
