import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Row, Form, ListGroup, InputGroup, FormControl, Container } from "react-bootstrap";
import { MainLayout } from "../components/layout/MainLayout";

interface FormData {
  legalName: string;
  address: string;
  phoneNumber: string;
  assets: { description: string; value: string }[];
  income: { description: string; value: string }[];
  expenses: { description: string; value: string }[];
  liabilities: { description: string; value: string }[];
}

const initialState = {
  legalName: "",
  address: "",
  phoneNumber: "",
  assets: [{ description: "", value: "" }],
  income: [{ description: "", value: "" }],
  expenses: [{ description: "", value: "" }],
  liabilities: [{ description: "", value: "" }],
};
const AddApplication = () => {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    type: "assets" | "income" | "expenses" | "liabilities"
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    const updatedData = [...formData[type]];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setFormData({ ...formData, [type]: updatedData });
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add new field
  const addField = (type: "assets" | "income" | "expenses" | "liabilities") => {
    setFormData({
      ...formData,
      [type]: [...formData[type], { description: "", value: "" }],
    });
  };

  // Remove a field
  const removeField = (index: number, type: "assets" | "income" | "expenses" | "liabilities") => {
    const updatedData = formData[type].filter((_, i) => i !== index);
    setFormData({ ...formData, [type]: updatedData });
  };

  const handleSubmit = (e: FormEvent) => {
    console.log("Form Submitted:", formData);

    setFormData(initialState);
  };

  return (
    <MainLayout>
      <Container>
        <Row className=''>
          <h2 className='text-center fw-bold'> Add Transaction</h2>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Legal Name</Form.Label>
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
            <Form.Label>Address</Form.Label>
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
            <Form.Label>Phone Number</Form.Label>
            <FormControl
              type='text'
              name='phoneNumber'
              placeholder='Enter Phone Number'
              value={formData.phoneNumber}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Assets</Form.Label>
            <ListGroup>
              {formData.assets.map((asset, index) => (
                <ListGroup.Item key={index} className='border-0'>
                  <InputGroup className='mb-3'>
                    <FormControl
                      type='text'
                      name='description'
                      placeholder='Asset Description'
                      value={asset.description}
                      onChange={(e) => handleFieldChange(e, index, "assets")}
                      required
                    />
                    <FormControl
                      type='number'
                      name='value'
                      placeholder='Asset Value'
                      value={asset.value}
                      onChange={(e) => handleFieldChange(e, index, "assets")}
                      required
                    />
                    <Button variant='danger' onClick={() => removeField(index, "assets")}>
                      Remove
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant='primary' onClick={() => addField("assets")}>
              Add Asset
            </Button>
          </Form.Group>

          <Form.Group>
            <Form.Label>Income</Form.Label>
            <ListGroup>
              {formData.income.map((income, index) => (
                <ListGroup.Item key={index} className='border-0'>
                  <InputGroup className='mb-3'>
                    <FormControl
                      type='text'
                      name='description'
                      placeholder='Income Description'
                      value={income.description}
                      onChange={(e) => handleFieldChange(e, index, "income")}
                      required
                    />
                    <FormControl
                      type='number'
                      name='value'
                      placeholder='Income Value'
                      value={income.value}
                      onChange={(e) => handleFieldChange(e, index, "income")}
                      required
                    />
                    <Button variant='danger' onClick={() => removeField(index, "income")}>
                      Remove
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant='primary' onClick={() => addField("income")}>
              Add Income
            </Button>
          </Form.Group>

          <Form.Group>
            <Form.Label>Expenses</Form.Label>
            <ListGroup>
              {formData.expenses.map((expense, index) => (
                <ListGroup.Item key={index} className='border-0'>
                  <InputGroup className='mb-3'>
                    <FormControl
                      type='text'
                      name='description'
                      placeholder='Expense Description'
                      value={expense.description}
                      onChange={(e) => handleFieldChange(e, index, "expenses")}
                      required
                    />
                    <FormControl
                      type='number'
                      name='value'
                      placeholder='Expense Value'
                      value={expense.value}
                      onChange={(e) => handleFieldChange(e, index, "expenses")}
                      required
                    />
                    <Button variant='danger' onClick={() => removeField(index, "expenses")}>
                      Remove
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant='primary' onClick={() => addField("expenses")}>
              Add Expense
            </Button>
          </Form.Group>

          <Form.Group>
            <Form.Label>Liabilities</Form.Label>
            <ListGroup>
              {formData.liabilities.map((liability, index) => (
                <ListGroup.Item key={index} className='border-0'>
                  <InputGroup className='mb-3'>
                    <FormControl
                      type='text'
                      name='description'
                      placeholder='Liability Description'
                      value={liability.description}
                      onChange={(e) => handleFieldChange(e, index, "liabilities")}
                      required
                    />
                    <FormControl
                      type='number'
                      name='value'
                      placeholder='Liability Value'
                      value={liability.value}
                      onChange={(e) => handleFieldChange(e, index, "liabilities")}
                      required
                    />
                    <Button variant='danger' onClick={() => removeField(index, "liabilities")}>
                      Remove
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant='primary' onClick={() => addField("liabilities")}>
              Add Liability
            </Button>
          </Form.Group>
          <Button variant='success' type='submit' className='mt-4'>
            Submit
          </Button>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default AddApplication;
