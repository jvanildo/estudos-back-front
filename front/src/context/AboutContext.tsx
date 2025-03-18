import React, { createContext, useContext } from "react";

interface AboutProps {
  title: string;
  content: string;
}

const AboutContext = createContext<AboutProps | null>(null);

export const AboutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const aboutData: AboutProps = {
    title: "Sobre Nós",
    content: "Essa é a página sobre nossa empresa.",
  };

  return <AboutContext.Provider value={aboutData}>{children}</AboutContext.Provider>;
};

export const useAbout = () => {
  const context = useContext(AboutContext);
  if (!context) throw new Error("useAbout deve ser usado dentro de AboutProvider");
  return context;
};
