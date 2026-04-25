import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { Providers } from "@/app/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </Provider>
);
