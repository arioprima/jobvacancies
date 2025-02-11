import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "@router/routes";
import Layout from "@layouts/Layout";
import { AppProvider } from "./contexts/AppProvider";
import './App.css';

const router = createBrowserRouter(
  routes.map(({ layout, element, ...rest }) => ({
    ...rest,
    element: layout ? <Layout>{element}</Layout> : element,
  }))
);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
