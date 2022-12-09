import React from "react";
import {
  Heading,
  Form,
  Section,
  Button,
  Columns,
} from "react-bulma-components";
import { PageLayout } from "../components/layouts/pageLayout";

const Contact = () => {
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
          <Form.Field className="mb-6">
            <Form.Label>Name</Form.Label>
            <Form.Control>
              <Form.Input />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-6">
            <Form.Label>Email</Form.Label>
            <Form.Control>
              <Form.Input type="email" />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-6">
            <Form.Label>Message</Form.Label>
            <Form.Control>
              <Form.Textarea />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Button>Submit</Button>
            </Form.Control>
          </Form.Field>
        </Columns.Column>
      </Columns>
    </PageLayout>
  );
};

export default Contact;
