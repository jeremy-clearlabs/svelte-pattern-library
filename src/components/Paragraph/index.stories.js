import Paragraph from './index.svelte'

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

const Template = ({ ...args }) => ({
  Component: Paragraph,
  props: args,
});

export const DefaultParagraph = Template.bind({});

DefaultParagraph.args = {};
