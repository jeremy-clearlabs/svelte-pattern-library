import Blockquote from './index.svelte'

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
};

const Template = ({ ...args }) => ({
  Component: Blockquote,
  props: args,
});

export const DefaultBlockquote = Template.bind({});

DefaultBlockquote.args = {};
