// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'column3d', // The chart type
    width: '100%', // Width of the chart
    height: '350', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Most Popular',
        captionFontSize: 20,
        captionFontColor: '#5a5a5a',
        alignCaptionWithCanvas: 0,
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        yAxisNameFontSize: 16,
        xAxisNameFontSize: 16,
        xAxisNameFontBold: 1,
        yAxisNameFontBold: 1,
        chartTopMargin: '10px',
        baseFontSize: 16,
        baseFontColor: '#617d98',
        showValues: 1,
        valueFontColor: '#617d98',
        theme: 'fusion',
        paletteColors:
          '#5D62B5, #2caeba, #F2726F, #FFC533, #8d6e63, #1de9b6, #6E80CA',
      },

      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
