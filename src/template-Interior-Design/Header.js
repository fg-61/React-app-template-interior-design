import React from 'react'

function Header() {
  return (
    <>
  {/* Header */}
  <div className="w3-container" style={{ marginTop: 80 }} id="showcase">
    <h1 className="w3-jumbo">
      <b>Interior Design</b>
    </h1>
    <h1 className="w3-xxxlarge w3-text-red">
      <b>Showcase.</b>
    </h1>
    <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />
  </div>
</>

  )
}

export default Header