import React from 'react';
import styled from 'styled-components';
import { useGithubContext } from '../context/context';
import { ExampleChart, Pie } from './Charts';

const Repos = () => {
  const { repos } = useGithubContext();
  // console.log(repos);

  // STEP 2 - Chart Data
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
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie data={chartData} />
        {/* <ExampleChart data={chartData} /> */}
        <ExampleChart data={chartData} />
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
