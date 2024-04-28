import axios from 'axios';
import buildClient from '../../api/buildClient';
import Home from '@/components/home/home.component';
import Signup from '@/components/signup/signup.component';

export default async function HomePage() {
  let currentUser = null;
  try {
    const { data } = await buildClient().get<any>(`/api/users/current-user`);
    currentUser = data.currentUser;
    console.log(currentUser);
  } catch (error) {
    if (axios.isAxiosError(error)) console.error(error.response?.data);
  }

  return (
    <div>
      {/* <NavigationBar /> */}
      <Home currentUser={currentUser} />
    </div>
  );
}
