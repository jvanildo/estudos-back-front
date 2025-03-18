import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../src/styles/theme"; // Ajuste para o seu tema

export const withThemeProvider: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);
