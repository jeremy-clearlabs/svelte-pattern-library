import { action } from '@storybook/addon-actions';
import PaginationPageItem, {
  PAGE_ITEM_TYPE_NEXT,
  PAGE_ITEM_TYPE_PREVIOUS,
  PAGE_ITEM_TYPE_BETWEEN,
  PAGE_ITEM_TYPE_PAGE,
} from './PaginationPageItem.svelte';

export default {
  title: 'Components/PaginationPageItem',
  component: PaginationPageItem,
  argTypes: {
    pageItemType: {
      control: {
        type: 'select',
        options: [
          PAGE_ITEM_TYPE_NEXT,
          PAGE_ITEM_TYPE_PREVIOUS,
          PAGE_ITEM_TYPE_BETWEEN,
          PAGE_ITEM_TYPE_PAGE,
        ],
      },
    },
    label: { control: 'text' },
    selected: { control: 'boolean' },
    number: { control: 'number' },
  },
};

const actionsData = {
  onClick: action('click'),
};

const Template = ({ ...args }) => ({
  Component: PaginationPageItem,
  props: args,
  on: {
    ...actionsData,
  },
});

export const NextPageItem = Template.bind({});

NextPageItem.args = {
  pageItemType: PAGE_ITEM_TYPE_NEXT,
  selected: false,
  number: null,
};

export const Previous = Template.bind({});

Previous.args = {
  pageItemType: PAGE_ITEM_TYPE_PREVIOUS,
  selected: false,
  number: null,
};

export const Between = Template.bind({});

Between.args = {
  pageItemType: PAGE_ITEM_TYPE_BETWEEN,
  selected: false,
  number: null,
};

export const SelectedNumber = Template.bind({});

SelectedNumber.args = {
  pageItemType: PAGE_ITEM_TYPE_PAGE,
  selected: true,
  number: 1,
};
