import React from "react";
import { Form } from "react-bootstrap";

interface FormComponentsProps {
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormComponents = ({ label, ...rest }: FormComponentsProps) => {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};
