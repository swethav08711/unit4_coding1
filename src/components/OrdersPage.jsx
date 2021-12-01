import React from "react"
import axios from "axios"
export default function OrdersPage({ data }) {
  const [order, setOrders] = React.useState([])
  React.useEffect(() => {
    setOrder()
  }, [])
  const setOrder = () => {
    axios.get("http://localhost:2021/orders").then(({ data }) => {
      setOrders(data)
    })
  }
  return (
    <div>
      {order.map(res => (
        <div style={{ border: "1px solid black", width: "40%" }}>
          <h1>Name: {res.name}</h1>
          <h1>Type: {res.type}</h1>
          <h1>Year: {res.Year}</h1>
          <h1>Price: {res.price}</h1>
          <img style={{ width: "40%" }} src={res.image} alt="car" />
        </div>
      ))}
    </div>
  )
}
