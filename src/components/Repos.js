import React from 'react';
import { useGithubContext } from '../context/context';
import { ExampleChart } from './Charts';

const Repos = () => {
  const { repos } = useGithubContext();
  // console.log(repos);
  return (
    <div>
      Repos
      <ExampleChart />
    </div>
  );
};

export default Repos;
