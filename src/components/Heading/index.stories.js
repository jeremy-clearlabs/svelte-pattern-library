import Heading from './index.svelte';
import HeadingView from './HeadingView.svelte';

export default {
  title: 'Typographic/Heading',
  component: Heading,
  argTypes: {
    duration: { control: 'number' },
    progress: { control: 'number' },
  },
};

const Template = ({ ...args }) => ({
  Component: Heading,
  props: args,
});

export const DefaultHeading = Template.bind({});

DefaultHeading.args = {
  level: 1,
};

export const Collection = (args) => ({
  Component: HeadingView,
  props: args
})

Collection.args = {};
