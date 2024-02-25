import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";

export const route = [
    {
        id:1,
        path: '/',
        page: HomePage
    },
    {
        id:2,
        path: '/order',
        page: OrderPage
    },
    {
        id:3,
        path: '/product',
        page: ProductPage
    },
    {
        id:4,
        path: '*',
        page: NotFoundPage,
    },
]