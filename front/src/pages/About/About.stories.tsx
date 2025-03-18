import { Meta, StoryFn } from "@storybook/react";
import About from "./About";

// 🔹 Definir a tipagem correta para os argumentos
interface AboutProps {
  title: string;
  content: string;
}

export default {
  title: "Pages/About",
  component: About,
  argTypes: {
    title: { control: "text" }, // Permite edição no Storybook
    content: { control: "text" }, // Permite edição no Storybook
  },
} as Meta<typeof About>;

// 🔹 Template corretamente tipado
const Template: StoryFn<AboutProps> = (args) => <About {...args} />;

// 🔹 Story padrão com argumentos dinâmicos no Storybook
export const Default = Template.bind({});
Default.args = {
  title: "Sobre Nós",
  content: "Essa é a página sobre nós.",
};

export const CustomText = Template.bind({});
CustomText.args = {
  title: "Bem-vindo!",
  content: "Aqui você pode aprender mais sobre nossa empresa.",
};
