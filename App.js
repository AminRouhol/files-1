import 'bootstrap/dist/css/bootstrap.min.css';
import AddFile from "./AddFile"
import Code from "./Code"
import Master from './Master';
import { Col , Row} from 'react-bootstrap';



import { Button, Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <h1 >Interview
      </h1>

<Container>

      <Row>
          <Col lg={4}>
          
    <div className='master-btn'>
        <Master/>
    </div>

          </Col>
          
          <Col lg={4}>
          
          <div className='addfile'>
      <AddFile/>
      </div>

          </Col>

          <Col lg={4}>
          
   
          <div className='code'>
        <Code/>
      </div>

          </Col>

      </Row>
      <div className='master-main'>

      </div>

      </Container>

    </>
  );
}

export default App;
