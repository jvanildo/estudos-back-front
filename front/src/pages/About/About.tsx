import React from "react";

interface AboutProps {
  title?: string;
  content?: string;
}

const About: React.FC<AboutProps> = ({ 
  title = "Sobre Nós", 
  content = "Essa é a página sobre nossa empresa." 
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default About;
