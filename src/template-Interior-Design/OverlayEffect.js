import React from 'react'

function OverlayEffect() {
  return (
    <>
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large"
    onclick="w3_close()"
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />
</>
  )
}

export default OverlayEffect