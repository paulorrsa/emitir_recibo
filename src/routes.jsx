import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GenerateReceipt from "./pages/GenerateReceipt";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "gerar",
        element: <GenerateReceipt />,
      },
      {
        path: "sobre",
        element: <About />,
      },
      {
        path: "privacidade",
        element: <PrivacyPolicy />,
      },
      {
        path: "termos",
        element: <TermsOfService />,
      },
    ],
  },
]);

export default router;
