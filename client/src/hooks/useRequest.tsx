import axios from 'axios';
import { useState } from 'react';

interface Props {
  url: string;
  method: 'get' | 'post';
  body: any;
}

interface ErrorItem {
  message: string;
}

const useRequest = ({ url, method, body }: Props) => {
  const [errors, setErrors] = useState<JSX.Element | null>(null);

  const doRequest = async (): Promise<any> => {
    try {
      const response = await axios[method](url, body);
      setErrors(null);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorsList: ErrorItem[] = err.response?.data.errors || [];
        setErrors(
          <div>
            {errorsList.map((error: ErrorItem, index: number) => (
              <li key={index}>{error.message}</li>
            ))}
          </div>
        );
      }
    }
  };

  return { doRequest, errors };
};

export default useRequest;
