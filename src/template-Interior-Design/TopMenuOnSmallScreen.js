import React from 'react'

function TopMenuOnSmallScreen() {
  return (
    <>
  {/* Top menu on small screens */}
  <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
    <a
      href="javascript:void(0)"
      className="w3-button w3-red w3-margin-right"
      onclick="w3_open()"
    >
      ☰
    </a>
    <span>Company Name</span>
  </header>
</>

  )
}

export default TopMenuOnSmallScreen