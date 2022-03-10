import React from 'react'

function PhotoGrid() {
  return (
    <>
  {/* Photo grid (modal) */}
  <div className="w3-row-padding">
    <div className="w3-half">
      <img
        src="https://www.w3schools.com/w3images/kitchenconcrete.jpg"
        style={{ width: "100%" }}
        onclick="onClick(this)"
        alt="Concrete meets bricks"
      />
      <img
        src="https://www.w3schools.com/w3images/livingroom.jpg"
        style={{ width: "100%" }}
        onclick="onClick(this)"
        alt="Light, white and tight scandinavian design"
      />
      <img
        src="https://www.w3schools.com/w3images/diningroom.jpg"
        style={{ width: "100%" }}
        onclick="onClick(this)"
        alt="White walls with designer chairs"
      />
    </div>
    <div className="w3-half">
      <img
        src="https://www.w3schools.com/w3images/atrium.jpg"
        style={{ width: "100%" }}
        onclick="onClick(this)"
        alt="Windows for the atrium"
      />
      <img
        src="https://www.w3schools.com/w3images/bedroom.jpg"
        style={{ width: "100%" }}
        onclick="onClick(this)"
        alt="Bedroom and office in one space"
      />
      <img
        src="https://www.w3schools.com/w3images/livingroom2.jpg"
        style={{ width: "100%" }}
        onclick="onClick(this)"
        alt="Scandinavian design"
      />
    </div>
  </div>
</>

  )
}

export default PhotoGrid