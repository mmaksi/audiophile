'use client'
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const initialValues = {
  email: '',
  password: ''
}

export default function Signup() {
  const [formData, setFormData] = useState(initialValues)
  const router = useRouter()

  const submitForm = async (event: any) => {
    event.preventDefault();
    console.log('submit');
    try {
      const resposnse = await axios.post('/api/users/signup', formData)
      console.log(resposnse.data);
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
      <label>Email</label>
      <input onChange={changeHandler} type="text" name="email" id="email" value={formData.email} />
      <label>Password</label>
      <input onChange={changeHandler} type="password" name="password" id="password" value={formData.password} />
      <button onClick={submitForm} type="submit">Submit</button>
    </div>
  );
}
