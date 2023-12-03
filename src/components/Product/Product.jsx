import "./Product.css";

export default function Product({ title, description, image }) {
  return (
    <div className="product">
      <img className="products" src={image} alt={title} />
      <h4 className="products">{title}</h4>
      <p className="products">{description}</p>
    </div>
  );
}
