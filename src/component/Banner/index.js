import React from 'react'
import './index.css';

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/dummy-data-6e893.appspot.com/o/banner3.png?alt=media&token=281e440f-883d-40e8-88fd-4b19376eaf8a")`,
        backgroundPosition: 'center center'
      }}
    />
  )
}

export default Banner
