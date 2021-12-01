import React from "react"
import axios from "axios"
import OrdersPage from "./OrdersPage"
export default function Cars() {
  const [data, setData] = React.useState([])
  const [order, setOrders] = React.useState([])
  React.useEffect(() => {
    setTask()
    setOrder()
  }, [])
  const setTask = () => {
    axios.get("http://localhost:2021/cars").then(({ data }) => {
      setData(data)
    })
  }
  const setOrder = () => {
    axios.get("http://localhost:2021/orders").then(({ data }) => {
      setOrders(data)
    })
  }
  const handleyear = () => {
    axios
      .get("http://localhost:2021/cars?_sort=Year&_order=asc")
      .then(({ data }) => {
        setData(data)
      })
  }
  const handlesort = () => {
    axios
      .get("http://localhost:2021/cars?_sort=price&_order=asc")
      .then(({ data }) => {
        setData(data)
      })
  }
  const handleData = () => {
    setData(order)
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleyear}>Filter by year</button>
      <button onClick={handlesort}>sort by Price</button>
      <button onClick={handleData}>Show Orders</button>

      {data.map(res => (
        <div style={{ border: "1px solid black", width: "40%" }}>
          <h1>Name: {res.name}</h1>
          <h1>Type: {res.type}</h1>
          <h1>Year: {res.Year}</h1>
          <h1>Price: {res.price}</h1>
          <img style={{ width: "40%" }} src={res.image} alt="car" />
          <button
            onClick={() => {
              axios.post("http://localhost:2021/orders", res).then(() => {
                setOrder()
              })
            }}
          >
            Buy Now!
          </button>
        </div>
      ))}
    </div>
  )
}
