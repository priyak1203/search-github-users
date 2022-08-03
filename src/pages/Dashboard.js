import React from 'react';
import { Info, Navbar, Repos, Search, User } from '../components';

const Dashboard = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
