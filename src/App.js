import './App.css';
import MyCard from './components/Main';
import {Col, Container, Row} from 'react-bootstrap'
import MyNavbar from './components/Navbar';
import ControlledCarousel from './components/Slide';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <><><Container>
    <MyNavbar />

  </Container>
    <Container className='bg-color-warning'>
      <ControlledCarousel />
    </Container>
    <Container>

      <Row className='d-flex justify-content-center p-2'>
        <Col xs={12} md={4} lg={3} xl={2} xxl={2}>
          <MyCard />
        </Col>
        <Col xs={12} md={4} lg={3} xl={2} xxl={2}>
          <MyCard />
        </Col>
        <Col xs={12} md={4} lg={3} xl={2} xxl={2}>
          <MyCard />
        </Col>
        <Col xs={12} md={4} lg={3} xl={2} xxl={2}>
          <MyCard />
        </Col>
        <Col xs={12} md={4} lg={3} xl={2} xxl={2}>
        </Col>
        <Col xs={12} md={4} lg={3} xl={2} xxl={2}>
        </Col>

      </Row>
    </Container>
    </><div>

    <Footer/>

    </div></>
  );
}

export default App;
