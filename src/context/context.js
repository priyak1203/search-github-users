import React, { useContext, useEffect, useState } from 'react';
import mockUser from './MockData/mockUser';
import mockFollowers from './MockData/mockFollowers';
import mockRepos from './MockData/mockRepos';
import axios from 'axios';
const GithubContext = React.createContext();

const rootUrl = 'https://api.github.com/';

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);

  const [requests, setRequests] = useState(0);

  // check remaining requests
  const checkRate = () => {
    axios(`${rootUrl}rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          // throw error
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    checkRate();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        followers,
        repos,
        requests,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => {
  return useContext(GithubContext);
};

export { GithubProvider, useGithubContext };
