import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    toolbar: {
      customButton: {
        title: "Modo Escuro", // Nome do botão
        icon: "circlehollow", // Ícone do Storybook
        items: ["Ligado", "Desligado"], // Opções do menu suspenso
      },
    },
  },
};

export default preview;
