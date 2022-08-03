import React from 'react';
import { Info, Navbar, Repos, Search, User } from '../components';
import { useGithubContext } from '../context/context';
import loadingImg from '../images/preloader.gif';

const Dashboard = () => {
  const { isLoading } = useGithubContext();

  return (
    <main>
      <Navbar />
      <Search />
      {isLoading ? (
        <img src={loadingImg} className="loading-img" alt="loading" />
      ) : (
        <>
          <Info />
          <User />
          <Repos />
        </>
      )}
    </main>
  );
};

export default Dashboard;
