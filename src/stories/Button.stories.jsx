import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  Default: true,
  label: '< Button >',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '< Button >',
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: '< Button >',
};

export const Focused = Template.bind({});
Focused.args = {
  label: '< Button >',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '< Button >',
};
