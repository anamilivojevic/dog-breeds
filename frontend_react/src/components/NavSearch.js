import { useState } from "react";
import { Form, Nav } from "react-bootstrap";

const NavSearch = ({ onBtnClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onBtnClick(inputValue);
  };

  return (
    <Nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container d-flex justify-content-between">
        <a
          role="button"
          className="navbar-brand fs-4"
          id="logo-home"
          onClick={() => {
            onBtnClick("");
          }}>
          <i className="fa fa-paw me-3"></i>DogBreeds
        </a>
        <div id="search-section">
          <Form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={handleInputChange}
                value={inputValue}></input>
              <button type="submit" className="btn btn-outline-light">
                <i className="fa fa-search" />
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Nav>
  );
};

export default NavSearch;
