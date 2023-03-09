const Title = ({ searchString }) => {
  if (searchString !== "") {
    return <h4>Search results for "{searchString}"</h4>;
  }

  return <h1 className="text-center mb-3">All Dog Breed Profiles</h1>;
};

export default Title;
