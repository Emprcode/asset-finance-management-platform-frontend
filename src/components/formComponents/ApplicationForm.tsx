import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Row, Form, ListGroup, InputGroup, FormControl, Container } from "react-bootstrap";
import { ApplicationFormData, ApplicationFormProps } from "../../types";

const initialState: ApplicationFormData = {
  legalName: "",
  address: "",
  phoneNumber: "",
  assets: [{ description: "", value: "" }],
  income: [{ description: "", value: "" }],
  expenses: [{ description: "", value: "" }],
  liabilities: [{ description: "", value: "" }],
};

export const ApplicationForm: FC<ApplicationFormProps> = ({
  initialData = initialState,
  onSubmit,
  buttonValue,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>(initialData);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Row className=''>
        <h2 className='text-center fw-bold'>Application Form</h2>
      </Row>
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
            {buttonValue}
          </Button>
        </div>
      </Form>
    </Container>
  );
};
