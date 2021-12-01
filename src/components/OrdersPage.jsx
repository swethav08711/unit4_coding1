import React from "react"
import Popup from "./Formdata"

export default function OrdersPage({ data }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h1>Selected List</h1>
      {data.map(res => (
        <div style={{ border: "1px solid black", width: "40%" }}>
          <h1>Name: {res.name}</h1>
          <h1>Type: {res.type}</h1>
          <h1>Year: {res.Year}</h1>
          <h1>Price: {res.price}</h1>
          <img style={{ width: "40%" }} src={res.image} alt="car" />
          {/* <input type="button" value="Buy Now!" onClick={togglePopup} /> */}
          <button onClick={togglePopup}>Buy Now</button>
        </div>
      ))}
      {isOpen && (
        <Popup
          content={
            <div>
              <input type="text" placeholder="name" />
              <input type="number" placeholder="Phone Number" />
              <button onClick={() => alert("Order Placed Sucessfully")}>
                Submit
              </button>
            </div>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  )
}
