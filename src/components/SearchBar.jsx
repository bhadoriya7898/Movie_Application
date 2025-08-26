import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function SearchBar() {
  return (
    <Form
      className="d-flex bg-white rounded-pill p-2"
      style={{ width: "70%" }}
    >
      <FormControl
        type="search"
        placeholder="Search for a movie, tv show, person..."
        className="border-0 shadow-none px-3"
      />
      <Button type="submit" className="rounded-pill px-4" variant="info">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
