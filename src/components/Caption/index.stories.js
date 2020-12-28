import Caption from './index.svelte';

export default {
  title: 'Components/Caption',
  component: Caption,
};

const Template = ({ ...args }) => ({
  Component: Caption,
  props: args,
});

export const DefaultCaption = Template.bind({});

DefaultCaption.args = {};
