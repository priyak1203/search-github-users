import React from 'react';
import styled from 'styled-components';
import { useGithubContext } from '../context/context';
import { Doughnut, ExampleChart, Pie } from './Charts';

const Repos = () => {
  const { repos } = useGithubContext();

  // STEP 2 - Chart Data - Example
  const chartData = [
    {
      label: 'HTML',
      value: '59',
    },
    {
      label: 'CSS',
      value: '260',
    },
    {
      label: 'JavaScript',
      value: '180',
    },
    {
      label: 'Python',
      value: '40',
    },
    {
      label: 'SCSS',
      value: '25',
    },
  ];

  // Data for pie chart - most used languages
  let languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }

    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // Data for doughnut chart - most stars per language
  let stars = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + stargazers_count,
      };
    }

    return total;
  }, {});

  stars = Object.values(stars)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie data={languages} />
        <ExampleChart data={chartData} />
        <Doughnut data={stars} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }

  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
