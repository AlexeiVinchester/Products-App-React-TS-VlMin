import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { ProductsPage } from "../pages/ProductsPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<MainPage /> } />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
    </Route>
));

export {router};