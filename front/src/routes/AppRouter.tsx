import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  const element = useRoutes(routes);

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      {element}
    </Suspense>
  );
};

export default AppRouter;
