import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Form, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ApplicationFormData, EditApplicationProps } from "../types";
import { updateApplication } from "../components/helper/axiosHelper";
import { toast } from "react-toastify";

export const EditApplication: FC<EditApplicationProps> = ({ application }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState<ApplicationFormData>(application);

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    type: "assets" | "income" | "expenses" | "liabilities"
  ) => {
    const { name, value } = e.target;
    const updatedData = [...formData[type]];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setFormData({ ...formData, [type]: updatedData });
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addField = (type: "assets" | "income" | "expenses" | "liabilities") => {
    setFormData({
      ...formData,
      [type]: [...formData[type], { description: "", value: "" }],
    });
  };

  const removeField = (index: number, type: "assets" | "income" | "expenses" | "liabilities") => {
    const updatedData = formData[type].filter((_, i) => i !== index);
    setFormData({ ...formData, [type]: updatedData });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { status, message } = await updateApplication(formData);
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
    setShow(false);
  };

  return (
    <>
      <Button variant='warning' onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Issue update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className='h6'>Legal Name</Form.Label>
                <FormControl
                  type='text'
                  name='legalName'
                  placeholder='Enter Legal Name'
                  value={formData.legalName}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className='h6'>Address</Form.Label>
                <FormControl
                  type='text'
                  name='address'
                  placeholder='Enter Address'
                  value={formData.address}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className='h6 mt-3'>Phone Number</Form.Label>
                <FormControl
                  type='number'
                  name='phoneNumber'
                  placeholder='Enter Phone Number'
                  value={formData.phoneNumber}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>

              {(["assets", "income", "expenses", "liabilities"] as const).map((type) => (
                <Form.Group key={type}>
                  <Form.Label className='h6 mt-3'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Form.Label>
                  <ListGroup>
                    {formData[type].map((item, index) => (
                      <ListGroup.Item key={index} className='border-0'>
                        <InputGroup className='mb-3'>
                          <FormControl
                            type='text'
                            name='description'
                            placeholder='Description'
                            value={item.description}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleFieldChange(e, index, type)
                            }
                            required
                          />
                          <FormControl
                            type='number'
                            name='value'
                            placeholder='Value'
                            value={item.value}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleFieldChange(e, index, type)
                            }
                            required
                          />
                          <Button variant='danger' onClick={() => removeField(index, type)}>
                            Remove
                          </Button>
                        </InputGroup>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button variant='primary' onClick={() => addField(type)}>
                    Add {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Button>
                </Form.Group>
              ))}

              <div className='mt-4 text-end'>
                <Button variant='success' type='submit'>
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
