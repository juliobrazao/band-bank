import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DialogContextProvider from "./contexts/DialogContext";
import { routes } from "./routes";
import NotificationContextProvider from "./contexts/NotificationContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DialogContextProvider>
    <NotificationContextProvider>
      <RouterProvider router={router} />
    </NotificationContextProvider>
  </DialogContextProvider>
);
