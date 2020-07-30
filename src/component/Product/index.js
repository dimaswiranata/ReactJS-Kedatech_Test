import React from 'react'
import "./index.css"

const index = ({type}) => {
  return (
    <div className="Product">
      <div className="Product__Title__Section">
        <text 
          className={
            `Product__Title 
            ${type==='start' && "Product__Title__Start"}
            ${type==='premium' && "Product__Title__Premium"}
            ${type==='advanced' && "Product__Title__Advanced"}`
          }
        >
          START
        </text>
      </div>
      <div className={
          `Product__Section
          ${type==='start' && "Product__Section__Start"}
          ${type==='premium' && "Product__Section__Premium"}
          ${type==='advanced' && "Product__Section__Advanced"}`
        }
      >
        <text className="Product__Section__Price">$15<small>.00</small></text>
        <text className="Product__Section__DescOne">LOREM IPSUM</text>
        <text className="Product__Section__DescTwo">15 User</text>
        <div/>
        <text className="Product__Section__DescTwo">20 GB</text>
        <div/>
        <text className="Product__Section__DescTwo">4 Domains</text>
        <div/>
        <text className="Product__Section__DescTwo">Free Update</text>
        <div/>
        <button className={
          `Product__Section__Button
          ${type==='start' && "Product__Section__Button__Start"}
          ${type==='premium' && "Product__Section__Button__Premium"}
          ${type==='advanced' && "Product__Section__Button__Advanced"}`
        }
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default index
