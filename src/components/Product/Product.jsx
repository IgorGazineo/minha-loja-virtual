import "./Product.css";

export default function Product({ title, description, image }) {
  return (
    <div className="product-card">
      <div className="product">
        <div className="product-left">
          <img className="product-img" src={image} alt={title} />
        </div>
        <div className="product-right">
          <h4 className="product-title">{title}</h4>
          <p className="product-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
