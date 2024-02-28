import axios from 'axios';
import { cookies } from 'next/headers';

const INGRESS_BASE_URL =
  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';

export default () => {
  const session = cookies().get('session');

  // If the request was made from a server component from inside the container
  if (typeof window == 'undefined') {
    return axios.create({
      baseURL: INGRESS_BASE_URL,
      headers: {
        Host: 'audiophile.com',
        Cookie: `session=${session?.value}`,
      },
    });
    // If the request was made from a browser
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
