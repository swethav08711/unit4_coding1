import React from "react"
import axios from "axios"
export default function Cars() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    setTask()
  }, [])
  const setTask = () => {
    axios.get("http://localhost:2021/cars").then(({ data }) => {
      setData(data)
    })
  }
  return (
    <div>
      <h1>Hello</h1>
      <button>Filter by year</button>
      {data.map(res => (
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
