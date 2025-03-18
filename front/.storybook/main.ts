import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(ts|tsx|mdx)", 
    "../src/pages/**/*.stories.@(ts|tsx|mdx)", 
  ],
  addons: [
    "@storybook/addon-docs", // Permite .mdx
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: true, // Habilita geração automática de docs
  },
};

export default config;
