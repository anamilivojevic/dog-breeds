import { useEffect, useState } from "react";
import { searchBreeds } from "./api";
import { Container } from "react-bootstrap";
import NavSearch from "./components/NavSearch";
import Title from "./components/Title";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState([""]);

  const updateData = async (term) => {
    setData(await searchBreeds(term));
    setSearchString(term);
  };

  useEffect(() => {
    updateData("");
  }, []);

  return (
    <>
      <NavSearch onBtnClick={updateData} />

      <Container className="pt-5 mb-5">
        <Title searchString={searchString} />
        <CardList data={data} />
      </Container>

      <Footer />
    </>
  );
};

export default App;
