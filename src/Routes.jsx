import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AIVACHatbotUI from "pages/AIVACHatbotUI";
import AIVACHatbotUIBlank from "pages/AIVACHatbotUIBlank";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "aivachatbotui",
      element: <AIVACHatbotUI />,
    },
    {
      path: "aivachatbotuiblank",
      element: <AIVACHatbotUIBlank />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
