import React, { useContext, useState } from 'react';
import mockUser from './MockData/mockUser';
import mockFollowers from './MockData/mockFollowers';
import mockRepos from './MockData/mockRepos';
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        followers,
        repos,
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
