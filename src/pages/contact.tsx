import React, { useCallback, useState } from "react";
import axios, { AxiosError } from "axios";
import styled from "styled-components";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

import {
  Heading,
  Form,
  Notification,
  Button,
  Columns,
  Section,
} from "react-bulma-components";
import { PageLayout } from "../components/layouts/pageLayout";

const NotificationButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  &:before,
  &:after {
    content: "";
    width: 21px;
    height: 1px;
    background: white;
    display: block;
    position: absolute;
    left: 5px;
    transition: all 0.2s ease-in-out 0s;
  }
  &:before {
    top: 13px;
    transform: rotate(45deg) translate(3px, 3px);
  }
  &:after{
    top: 22px;
    transform: rotate(-45deg) translate(4px, -3px);
  }
}
`;

const _Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const handFormChange = updater => e => {
    reset();
    updater(e.target.value);
  };

  const onVerify = useCallback(token => {
    setToken(token);
  }, []);

  const onSubmit = () => {
    const post = async () => {
      try {
        setRefreshReCaptcha(r => !r);
        setIsSubmitting(true);
        const response = await axios.post(
          "https://fqsx4sfudtka7d5wjfdk4qoosq0flojy.lambda-url.us-east-1.on.aws/",
          { name, from: email, message, token, website: "JameyGittings.com" }
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

  const reset = () => {
    setApiError("");
    setIsSubmitting(false);
    setFormSubmit(false);
  };

  const closeNotification = () => {
    reset();
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
              <NotificationButton onClick={closeNotification} />
              <p>{apiError}</p>
            </Notification>
          )}
          {formSubmitted && (
            <Section className="mb-6 pl-0 pt-0">
              <Notification color="success">
                <p>Email Sent!</p>
              </Notification>
            </Section>
          )}
          {!formSubmitted && (
            <>
              <Form.Field className="mb-6">
                <Form.Label>Name</Form.Label>
                <Form.Control>
                  <Form.Input value={name} onChange={handFormChange(setName)} />
                </Form.Control>
              </Form.Field>
              <Form.Field className="mb-6">
                <Form.Label>Email</Form.Label>
                <Form.Control>
                  <Form.Input
                    type="email"
                    onChange={handFormChange(setEmail)}
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="mb-6">
                <Form.Label>Message</Form.Label>
                <Form.Control>
                  <Form.Textarea onChange={handFormChange(setMessage)} />
                </Form.Control>
              </Form.Field>

              <Form.Field>
                <Form.Control
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <GoogleReCaptcha
                    onVerify={onVerify}
                    refreshReCaptcha={refreshReCaptcha}
                  />
                  <Button
                    color="primary"
                    onClick={onSubmit}
                    disabled={!canSubmit()}
                    loading={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form.Control>
              </Form.Field>
            </>
          )}
        </Columns.Column>
      </Columns>
    </PageLayout>
  );
};

const Contact = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LcGg5AjAAAAAMCfmWZm-uGEMNzMAPdBJiJgVO0B">
      <_Contact />
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
