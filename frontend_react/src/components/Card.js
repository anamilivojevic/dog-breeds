import Stars from "./Stars";

const Card = ({ breed }) => {
  return (
    <div className="card shadow">
      <div className="card-header">
        <img
          src={breed.imageUrl}
          className="card-img-top"
          alt={breed.name + "breed"}
        />
      </div>
      <div className="card-body mt-2 d-flex flex-column justify-content-between">
        <div className="mb-2">
          <h3>{breed.name}</h3>
          <p>{breed.description}</p>
        </div>
        <div>
          <span className="h6">Trainability: </span>
          <Stars num={breed.trainability} />
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div>
          <i className="fa fa-arrows-v me-2"></i>
          <span>{breed.size}</span>
        </div>
        <div>
          <i className="fa fa-heartbeat me-1"></i>
          <span>
            {breed.minLifeSpan}-{breed.maxLifeSpan} years
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
