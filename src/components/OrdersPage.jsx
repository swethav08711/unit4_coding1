import React from "react"

export default function OrdersPage({ data }) {
  const handleForm = () => (
    <div>
      <input type="text" placeholder="name" />
      <input type="number" placeholder="Phone Number" />
      <input type="time" />
    </div>
  )

  return (
    <div>
      {data.map(res => (
        <div style={{ border: "1px solid black", width: "40%" }}>
          <h1>Name: {res.name}</h1>
          <h1>Type: {res.type}</h1>
          <h1>Year: {res.Year}</h1>
          <h1>Price: {res.price}</h1>
          <img style={{ width: "40%" }} src={res.image} alt="car" />
          <button onClick={handleForm}>Order Now</button>
        </div>
      ))}
    </div>
  )
}
