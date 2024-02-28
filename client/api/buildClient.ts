import axios from 'axios';
import { cookies } from 'next/headers';

const INGRESS_BASE_URL =
  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';

export default () => {
  const session = cookies().get('session');

  if (typeof window == 'undefined') {
    return axios.create({
      baseURL: INGRESS_BASE_URL,
      headers: {
        Host: 'audiophile.com',
        Cookie: `session=${session?.value}`,
      },
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
