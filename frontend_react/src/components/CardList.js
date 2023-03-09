import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="row mt-5">
      {data.map((el) => {
        return (
          <div
            key={el.id}
            className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <Card breed={el} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
