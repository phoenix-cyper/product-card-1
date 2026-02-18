const ProductCard = ({ name, price, image, inStock }) => {
return ( <div className="card"> <img src={image} alt={name} /> <h2>{name}</h2> <p className="price">₹{price}</p>

```
  <p className={inStock ? "in" : "out"}>
    {inStock ? "In Stock" : "Out of Stock"}
  </p>
</div>
```

);
};

const App = () => {
return ( <div> <h1>Product Store</h1>

```
  <div className="container">
    <ProductCard
      name="Wireless Headphones"
      price="2999"
      image="https://via.placeholder.com/200"
      inStock={true}
    />

    <ProductCard
      name="Smart Watch"
      price="4999"
      image="https://via.placeholder.com/200"
      inStock={false}
    />

    <ProductCard
      name="Bluetooth Speaker"
      price="1999"
      image="https://via.placeholder.com/200"
      inStock={true}
    />
  </div>
</div>
```

);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
