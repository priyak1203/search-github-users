import React from 'react';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  const data = React.useContext(GithubContext);
  console.log(data);
  return <h2>Dashboard Page</h2>;
};

export default Dashboard;
