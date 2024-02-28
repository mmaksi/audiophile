import axios from 'axios';
import { cookies } from 'next/headers';

const INGRESS_BASE_URL =
  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';

interface currentUser {
  id: string;
  email: string;
  iat: number;
}

export default async function Home() {
  const session = cookies().get('session');

  const { data } = await axios.get<currentUser>(
    `${INGRESS_BASE_URL}/api/users/current-user`,
    {
      headers: {
        Host: 'audiophile.com',
        Cookie: `session=${session?.value}`,
      },
    }
  );

  return (
    <div>
      {/* <NavigationBar /> */}
      <div>
        <div>
          <span color="tertiary">NEW PRODUCT</span>
          <h1 color="tertiary">XX99 Mark II Headphones</h1>
          <p color="tertiary">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See Product</button>
        </div>
      </div>
    </div>
  );
}
