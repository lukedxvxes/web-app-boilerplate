import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Link } from '@chakra-ui/react';
import { FormikTextInput } from '../formFields/FormikTextInput';
import {
  validateFirstName,
  validateLastName,
  validatePassword,
  validateUsername,
} from '../validations';
import { useCookies } from 'react-cookie';
import { useToast } from '@chakra-ui/react';

export function CreateAccountForm({
  setUser,
  setCreateAccount,
}: {
  setUser: any;
  setCreateAccount: any;
}) {
  const [cookies, setCookie] = useCookies(['jwt']);
  const toast = useToast();

  async function handleSubmit(values: any, actions: any) {
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        password: values.password,
      }),
    };

    try {
      const registerResponse = await fetch(
        'http://localhost:4000/users/register',
        settings,
      );

      if (registerResponse.status === 200) {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        setCreateAccount(false);
      }
    } catch (error) {
      console.log('ERROR:: ', error);
    }
  }
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        password: '',
      }}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {(props) => (
        <Form>
          <FormikTextInput
            validation={validateFirstName}
            inputId="firstName"
            label="First Name"
          />
          <Box mb={2} />
          <FormikTextInput
            validation={validateLastName}
            inputId="lastName"
            label="Last Name"
          />
          <Box mb={2} />
          <FormikTextInput
            validation={validateUsername}
            inputId="username"
            label="Username"
          />
          <Box mb={2} />
          <FormikTextInput
            validation={validatePassword}
            inputId="password"
            label="Password"
          />

          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
