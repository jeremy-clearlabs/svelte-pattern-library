import Pagination from './Pagination.svelte';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    offset: { control: 'number' },
    pageLimit: { control: 'number' },
    pageNeighbours: { control: 'number' },
    totalRecords: { control: 'number' },
  },
};

const Template = ({ ...args }) => ({
  Component: Pagination,
  props: args,
});

export const DefaultComponent = Template.bind({});
DefaultComponent.args = {
  offset: 0,
  pageLimit: 20,
  pageNeighbours: 2,
  totalRecords: 200,
};
