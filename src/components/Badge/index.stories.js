import Badge from './index.svelte';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const Template = ({ ...args }) => ({
  Component: Badge,
  props: args,
});

export const DefaultBadge = Template.bind({});

DefaultBadge.args = {};
