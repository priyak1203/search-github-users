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
  const [error, setError] = useState({ show: false, msg: '' });

  // check remaining requests
  const checkRequests = () => {
    axios(`${rootUrl}rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, 'sorry, you have exceeded your hourly rate limit!');
        }
      })
      .catch((err) => console.log(err));
  };

  // set error status and message
  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  // check requests on initial render
  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        followers,
        repos,
        requests,
        error,
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
