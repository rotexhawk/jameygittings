import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import {
  Heading,
  Form,
  Notification,
  Button,
  Columns,
} from "react-bulma-components";
import { PageLayout } from "../components/layouts/pageLayout";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const handFormChange = updater => e => {
    if (apiError) {
      setApiError("");
    }
    updater(e.target.value);
  };

  const onSubmit = () => {
    const post = async () => {
      try {
        setIsSubmitting(true);
        const response = await axios.post(
          "https://fqsx4sfudtka7d5wjfdk4qoosq0flojy.lambda-url.us-east-1.on.aws/",
          { name, email, message }
        );
        console.log("response", response);
        setIsSubmitting(false);
        setFormSubmit(true);
      } catch (e) {
        setApiError(
          (e as AxiosError).message ?? (e as AxiosError).response?.data
        );
      }
    };
    void post();
  };

  const canSubmit = () => {
    return (
      name && email && message && !isSubmitting && !formSubmitted && !apiError
    );
  };

  return (
    <PageLayout>
      <Columns centered>
        <Columns.Column size={7}>
          <Heading size={3} renderAs="h1" className="mb-6">
            Contact
          </Heading>
          <p className="pb-6">
            <a href="mailto:jamey@attilapress.com">jamey@attilapress.com</a>
          </p>
          {apiError && (
            <Notification color="danger">
              <p>{apiError}</p>
            </Notification>
          )}
          <Form.Field className="mb-6">
            <Form.Label>Name</Form.Label>
            <Form.Control>
              <Form.Input value={name} onChange={handFormChange(setName)} />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-6">
            <Form.Label>Email</Form.Label>
            <Form.Control>
              <Form.Input type="email" onChange={handFormChange(setEmail)} />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-6">
            <Form.Label>Message</Form.Label>
            <Form.Control>
              <Form.Textarea onChange={handFormChange(setMessage)} />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Button onClick={onSubmit} disabled={!canSubmit()}>
                Submit
              </Button>
            </Form.Control>
          </Form.Field>
        </Columns.Column>
      </Columns>
    </PageLayout>
  );
};

export default Contact;
