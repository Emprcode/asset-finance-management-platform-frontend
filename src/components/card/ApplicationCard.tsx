import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ApplicationCardProps } from "../../types";
import { EditApplication } from "../../pages/EditApplication";
import { Col, Container, Row } from "react-bootstrap";

export const ApplicationCard = (props: ApplicationCardProps) => {
  const { appNumber, handleOnDelete, ...application } = props;
  return (
    <Card style={{ width: "28rem", margin: "15px", padding: "10px" }}>
      <Card.Body>
        <Card.Title className='text-center fw-bold p-2'>Application {appNumber}</Card.Title>
        <hr />
        <p>
          {" "}
          <span className='fw-bold'>Name:</span> {application.legalName}
        </p>
        <p>
          <span className='fw-bold'>Address: </span>
          {application.address}
        </p>
        <p>
          <span className='fw-bold'>Phone Number: </span> {application.phoneNumber}
        </p>

        <Container>
          <Row>
            <Col md={6}>
              <h6 className='fw-bold text-primary'>Assets:</h6>
              <ul className='list-group list-group-flush'>
                {application.assets.map((asset, index) => (
                  <li key={index} className='list-group-item'>
                    {asset.description}: <strong>${asset.value}</strong>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={6}>
              <h6 className='fw-bold text-success'>Income:</h6>
              <ul className='list-group list-group-flush'>
                {application.income.map((income, index) => (
                  <li key={index} className='list-group-item'>
                    {income.description}: <strong>${income.value}</strong>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col md={6}>
              <h6 className='fw-bold text-danger'>Expenses:</h6>
              <ul className='list-group list-group-flush'>
                {application.expenses.map((expense, index) => (
                  <li key={index} className='list-group-item'>
                    {expense.description}: <strong>${expense.value}</strong>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={6}>
              <h6 className='fw-bold text-warning'>Liabilities:</h6>
              <ul className='list-group list-group-flush'>
                {application.liabilities.map((liability, index) => (
                  <li key={index} className='list-group-item'>
                    {liability.description}: <strong>${liability.value}</strong>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>

        {/* ✅ Edit & Delete Buttons */}
        <div className='d-flex justify-content-between mt-4'>
          <EditApplication application={application} />
          <Button variant='danger' onClick={() => handleOnDelete(application._id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
