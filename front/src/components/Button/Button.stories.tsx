import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Clique Aqui",
};

export const WithClick = Template.bind({});
WithClick.args = {
  label: "Clique Aqui",
  onClick: () => alert("Botão clicado!"),
};
