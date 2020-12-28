import { action } from '@storybook/addon-actions';
import Button from './Button.svelte';
import ButtonView from './ButtonView.svelte';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    kind: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'ghost',
          'danger',
          'danger-tertiary',
          'danger-ghost',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'field', 'small'],
      },
    },
    tooltipAlignment: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    iconDescription: { control: 'text' },
    hasIconOnly: { control: 'boolean' },
    href: { control: 'text' },
    tabindex: { control: 'number' },
    type: { control: 'string' },
  },
};

const actionsData = {
  onClick: action('click'),
};

const Template = ({ ...args }) => ({
  Component: ButtonView,
  props: args,
  on: {
    ...actionsData,
  },
});

export const ButtonGroup = Template.bind({});

ButtonGroup.args = {};
