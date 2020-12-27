import Pagination from './Pagination.svelte';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    offset: { control: 'number' },
    pageLimit: { control: 'number' },
    pageNeighbours: { control: 'number' },
    totalRecords: { control: 'number' },
    paginationInput: { control: 'boolean' },
  },
};

const actionsData = {
  onPageChanged: action('onPageChanged'),
};

const Template = ({ ...args }) => ({
  Component: Pagination,
  props: args,
  on: {
    ...actionsData,
  },
});

export const DefaultComponent = Template.bind({});
DefaultComponent.args = {
  offset: 0,
  pageLimit: 20,
  pageNeighbours: 2,
  totalRecords: 200,
};

export const WithPaginationInput = Template.bind({});
WithPaginationInput.args = {
  offset: 0,
  pageLimit: 20,
  pageNeighbours: 2,
  totalRecords: 200,
  paginationInput: true,
};
