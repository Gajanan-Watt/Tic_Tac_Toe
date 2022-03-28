import "./square.css";
export const Square = ({ point, handleClick }) => {
  return (
    <div onClick={handleClick} className="wrapper">
      {point}
    </div>
  );
};
