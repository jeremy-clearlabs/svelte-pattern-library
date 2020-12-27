import Progress from './index.svelte';
import ProgressView from './ProgressView.svelte';

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    duration: { control: 'number' },
    tween: { control: 'number' },
  },
};

const Template = ({ ...args }) => ({
  Component: ProgressView,
  props: args,
});

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  duration: 400,
  tween: 0
};
