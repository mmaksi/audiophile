import axios from 'axios';
import { cookies, headers } from 'next/headers';
import buildClient from '../../api/buildClient';

interface currentUser {
  id: string;
  email: string;
  iat: number;
}

export default async function Home() {
  const session = cookies().get('session');

  const { data } = await buildClient().get<currentUser>(
    `/api/users/current-user`
  );

  console.log(data);

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
