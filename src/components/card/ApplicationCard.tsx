import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ApplicationCardProps } from "../../pages/types";

export const ApplicationCard = (props: ApplicationCardProps) => {
  const { appNumber, handleOnDelete, _id } = props;

  console.log(props);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Application {appNumber}</Card.Title>
        <div className='p-4'>
          <Button variant='warning' className='me-3'>
            Edit
          </Button>
          <Button variant='danger' onClick={() => handleOnDelete(_id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
