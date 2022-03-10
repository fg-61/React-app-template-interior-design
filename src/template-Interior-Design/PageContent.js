import React from 'react'
import Contact from './Contact'
import Designers from './Designers'
import Header from './Header'
import ModalForFullSizeImagesOnClick from './ModalForFullSizeImagesOnClick'
import Packages from './Packages'
import PhotoGrid from './PhotoGrid'
import Services from './Services'
import Team from './Team'

function PageContent() {
  return (
    <>
        {/* !PAGE CONTENT! */}
        <div className="w3-main" style={{ marginLeft: 340, marginRight: 40 }}>
            <Header></Header>
            <PhotoGrid></PhotoGrid>
            <ModalForFullSizeImagesOnClick></ModalForFullSizeImagesOnClick>
            <Services></Services>
            <Designers></Designers>
            <Packages></Packages>
            <Team></Team>
            <Contact></Contact>
        </div>
    </>
  )
}

export default PageContent