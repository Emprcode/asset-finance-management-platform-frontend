import { Col, Container, Row } from "react-bootstrap";
import { MainLayout } from "../components/layout/MainLayout";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <MainLayout>
      <Container>
        <Row>
          <div className='d-flex'>
            <div className='mx-3'>
              <h4 className='text-center'>Welcome!</h4>
              <h2 className='fw-bold'> John</h2>
            </div>
          </div>
        </Row>
        <div className='d-flex justify-content-center p-5 '>
          <Row className='p-3 rounded card-color shadow-lg'>
            <div>
              <div className='text-center'>
                <p className='p-2 h5'>Total Applications</p>

                <h2 className='fw-bold'> 0</h2>
              </div>
            </div>
            <Row className='mt-5'>
              <Col>
                <div className='d-flex'>
                  <div>
                    <h6 className=''>Approved</h6>
                    <h5 className='text-success fw-bold'>0</h5>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-end'>
                  <div>
                    <h6 className=''>Rejected</h6>
                    <h5 className='text-danger '>0</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </div>
        <div>
          <Row className='p-4'>
            <Col>
              <h2 className='fw-bold'>Applications</h2>
            </Col>
            <Col>
              <Link to='/transactions' className='d-flex justify-content-end fw-bold nav-link'>
                View All
              </Link>
            </Col>
          </Row>
          <Row className='gap-3 p-3 '>{/* application card */}</Row>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
