import HorizontalRule from './index.svelte';

export default {
  title: 'Components/HorizontalRule',
  component: HorizontalRule,
};

const Template = ({ ...args }) => ({
  Component: HorizontalRule,
  props: args,
});

export const DefaultHorizontalRule = Template.bind({});

DefaultHorizontalRule.args = {};
