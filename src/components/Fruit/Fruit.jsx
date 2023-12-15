import "./Fruit.css";

const Fruit = (props) => {
    const {img,title} = props.fruit
  return (
    <div className="fruit-card">
      <div className="fruit-img">
        <img src={img} alt={title} />
      </div>
      <div className="fruit-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};


export default Fruit