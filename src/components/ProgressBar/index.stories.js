import ProgressBar from './index.svelte';
import ProgressView from './ProgressView.svelte';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    duration: { control: 'number' },
    progress: { control: 'number' },
  },
};

const Template = ({ ...args }) => ({
  Component: ProgressView,
  props: args,
});

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  duration: 400,
  progress: 0
};
