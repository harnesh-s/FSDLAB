import React, { useState } from "react";

function Product({ name }) {
  return <li>{name}</li>;
}

export default function App() {
  const [products] = useState(["Laptop", "Phone", "Tablet"]);

  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map((p, i) => (
          <Product key={i} name={p} />
        ))}
      </ul>
    </div>
  );
}
//React Component-Based User Interface