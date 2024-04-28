import Signup from '../signup/signup.component';

interface CurrentUser {
  id: string;
  email: string;
}

interface Props {
  currentUser: CurrentUser;
}

const Home = ({ currentUser }: Props) => {
  return (
    <div>
      {currentUser.id ? (
        <Signup />
      ) : (
        <div>
          <span color="tertiary">NEW PRODUCT</span>
          <h1 color="tertiary">XX99 Mark II Headphones</h1>
          <p color="tertiary">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See Product</button>
        </div>
      )}
    </div>
  );
};

export default Home;
