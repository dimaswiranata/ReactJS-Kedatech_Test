import React from 'react'
import "./index.css"

function index({level}) {
  return (
    <div className="pricing">
      <div className="columns">
        <div className="price">
          {level==='Basic' && <li className="header__Basic">{level}</li>}
          {level==='Pro' && <li className="header__Pro">{level}</li>}
          {level==='Premium' && <li className="header__Premium">{level}</li>}
          <li className="grey">$ 9.99 / year</li>
          <li>10GB Storage</li>
          <li>10 Emails</li>
          <li>10 Domains</li>
          <li>1GB Bandwidth</li>
          <li className="grey"><a className="button">Try It</a></li>
        </div>
      </div>
    </div>
  )
}

export default index
