import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AppRouter from "./routers/AppRouter";
import { addBlog } from "./actions/blogAction";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addBlog({
    title: "react redux",
    desc: "new lesson",
    img: "https://scriptverse.academy/img/tutorials/reactjs-redux.png",
  })
);

store.dispatch(
  addBlog({
    title: "Node JS",
    desc: "Backend",
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1110275/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
  })
);

store.dispatch(
  addBlog({
    title: "Php",
    desc: "backend",
    img: "https://www.php.net/images/meta-image.png",
  })
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
