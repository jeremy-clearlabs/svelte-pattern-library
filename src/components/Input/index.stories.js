import { action } from '@storybook/addon-actions';
import Input from './index.svelte';
import InputView from './InputView.svelte';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'button',
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'hidden',
          'image',
          'month',
          'number',
          'password',
          'radio',
          'range',
          'reset',
          'search',
          'submit',
          'tel',
          'text',
          'time',
          'url',
          'week',
        ],
      },
    },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    value: { control: 'text' },
  },
};

const actionsData = {
  onClick: action('click'),
};

const Template = ({ ...args }) => ({
  Component: InputView,
  props: args,
  on: {
    ...actionsData,
  },
});

export const InputGroup = Template.bind({});

InputGroup.args = {};

export const DefaultInput = (args) => ({
  Component: Input,
  props: args,
  type: 'text',
});
