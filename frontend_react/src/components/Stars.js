import "font-awesome/css/font-awesome.min.css";

const Stars = ({ num }) => {
  const starsArray = [];
  const MAX = 5;

  for (let i = 0; i < MAX; i++) {
    let iconClassName = i >= num ? "fa fa-star-o " : "fa fa-star";
    starsArray.push(<i key={i} className={iconClassName}></i>);
  }

  return <span>{starsArray}</span>;
};

export default Stars;
