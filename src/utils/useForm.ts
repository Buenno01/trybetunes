import React, { useState } from 'react';

export default function useForm(inicialState: any): [any, (e
: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement
| HTMLSelectElement>) => void, () => void ] {
  const [values, setValues] = useState(inicialState);

  const handleChange: (e
  : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement
  | HTMLSelectElement>) => void = ({ target }
  : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const resetForm = () => { setValues(inicialState); };

  return [values, handleChange, resetForm];
}
