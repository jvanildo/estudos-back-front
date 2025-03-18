import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark, // Define um tema escuro (ou use `themes.light`)
    brandTitle: "Meu Projeto", // Define o título do Storybook
    brandUrl: "https://meusite.com", // URL clicável no logo (opcional)
  },
});
