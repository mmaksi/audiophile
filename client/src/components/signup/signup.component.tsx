'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useRequest from '@/hooks/useRequest';

interface SignupData {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

export default function Signup() {
  const [formData, setFormData] = useState<SignupData>(initialValues);
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    body: formData,
    method: 'post',
  });

  const submitForm = async (event: any) => {
    event.preventDefault();
    doRequest();
  };

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <label>Email</label>
      <input
        onChange={changeHandler}
        type="text"
        name="email"
        id="email"
        value={formData.email}
      />
      <label>Password</label>
      <input
        onChange={changeHandler}
        type="password"
        name="password"
        id="password"
        value={formData.password}
      />
      <button onClick={submitForm} type="submit">
        Submit
      </button>
      {errors}
    </div>
  );
}
