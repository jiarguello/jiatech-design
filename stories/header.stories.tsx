import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header, Props } from '../src/components/header/header';

const meta: Meta = {
  title: 'Header',
  component: Header,
  argTypes: {
    logoImage: {
      description:
        'Path to iImage to be rederized in the left side of component header',
      type: {
        name: 'string',
        required: false,
      },
      table: {
        category: 'Image',
        type: {
          summary: 'Something short',
          detail: 'Something really really long',
        },
      },
    },
  },
  parameters: {
    style: {},
  },
};

export default meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  logoImage: 'vrau',
  style: {
    background: 'green',
  },
};
