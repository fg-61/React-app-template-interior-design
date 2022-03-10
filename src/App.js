import './App.css';
import Container from './template-Interior-Design/Container';
import OverlayEffect from './template-Interior-Design/OverlayEffect';
import PageContent from './template-Interior-Design/PageContent';
import Sidebar from './template-Interior-Design/Sidebar';
import TopMenuOnSmallScreen from './template-Interior-Design/TopMenuOnSmallScreen';


function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <TopMenuOnSmallScreen></TopMenuOnSmallScreen>
      <OverlayEffect></OverlayEffect>
      <PageContent></PageContent>
      <Container></Container>
    </>
  );
}

export default App;
