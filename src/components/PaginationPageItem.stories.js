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

const Template = ({ onClick, ...args }) => ({
  Component: PaginationPageItem,
  props: args,
  on: {
    click: onClick,
  },
});

export const NextPageItem = Template.bind({});

NextPageItem.args = {
  pageItemType: PAGE_ITEM_TYPE_NEXT,
  selected: false,
  number: null,
  onClick: () => {},
};

export const Previous = Template.bind({});

Previous.args = {
  pageItemType: PAGE_ITEM_TYPE_PREVIOUS,
  selected: false,
  number: null,
  onClick: () => {},
};

export const Between = Template.bind({});

Between.args = {
  pageItemType: PAGE_ITEM_TYPE_BETWEEN,
  selected: false,
  number: null,
  onClick: () => {},
};
