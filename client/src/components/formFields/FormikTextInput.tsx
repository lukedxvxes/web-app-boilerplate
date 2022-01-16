import React from 'react';
import { Field } from 'formik';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';

interface TextInputProps {
  validation: (value: any) => string | undefined;
  inputId: string;
  label: string;
  placeholder?: string;
}

export function FormikTextInput({
  validation,
  inputId,
  label,
  placeholder,
}: TextInputProps) {
  return (
    <Field name={inputId} validate={validation}>
      {({ field, form }: { field: any; form: any }) => (
        <FormControl isInvalid={form.errors[inputId] && form.touched[inputId]}>
          <FormLabel htmlFor={inputId}>{label}</FormLabel>
          <Input
            {...field}
            id={inputId}
            placeholder={placeholder ? placeholder : null}
            type={inputId === 'password' ? 'password' : 'text'}
          />
          <FormErrorMessage>{form.errors[inputId]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
