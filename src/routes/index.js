
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import ProductPage from "../pages/ProductPage/ProductPage";
import { ProductTypePage } from "../pages/ProductTypePage/ProductTypePage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

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
    {
        id:5,
        path: '/type',
        page: ProductTypePage,
    },
    {
        id:6,
        path: '/sign-in',
        page: SignInPage,
    },
    {
        id:7,
        path: '/sign-up',
        page: SignUpPage,
    },
    {
        id:8,
        path: '/product-detail',
        page: ProductDetail,
    },
]