import { type NextPage } from 'next';

import { Typography } from '@acme/ui/atoms';

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-crimson-10">Hello world</h1>
      <Typography>Hello world</Typography>
    </main>
  );
};

export default Home;
