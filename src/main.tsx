import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DialogContextProvider from "./contexts/DialogContext";
import { routes } from "./routes";
import NotificationContextProvider from "./contexts/NotificationContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <DialogContextProvider>
      <NotificationContextProvider>
        <RouterProvider router={router} />
      </NotificationContextProvider>
    </DialogContextProvider>
  </QueryClientProvider>
);
