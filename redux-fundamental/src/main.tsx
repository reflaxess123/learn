import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { fetchUsers } from "./modules/users/model/fetch-users.ts";
import { router } from "./router.tsx";
import { store } from "./store.ts";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {" "}
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
