import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Link, useToast } from '@chakra-ui/react';
import { FormikTextInput } from '../formFields/FormikTextInput';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../validations';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export function LoginForm({ setUser }: { setUser: any }) {
  const [cookies, setCookie] = useCookies(['jwt']);
  const toast = useToast();
  const navigate = useNavigate();

  async function handleSubmit(values: any, actions: any) {
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    };

    try {
      const loginResponse = await fetch(
        'http://localhost:4000/users/authenticate',
        settings,
      );

      if (loginResponse.status === 200) {
        const user = await loginResponse.json();

        setCookie('jwt', user.token, {
          path: '/',
          secure: true,
          sameSite: 'none',
        });
        delete user.token;
        setUser(user);
        toast({
          title: `Hi ${user.firstName}, login successful.`,
          description: 'Welcome to Lunch and Learn.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        navigate('/');
      } else {
        toast({
          title: `Login Unsuccessful.`,
          description: 'Something went wrong.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log('ERROR:: ', error);
    }
  }
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {(props) => (
        <Form>
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
