import Admin from "./pages/Admin";
import {
    ACCOUNT_ROUTE,
    ADMIN_ROUTE,
    CART_ROUTE, CATALOG_ROUTE,
    GOOD_ROUTE,
    LOGIN_ROUTE, MAIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import GoodPage from "./pages/GoodPage";
import Catalog from "./pages/Catalog";
import MainPage from "./pages/MainPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart
    }
]

export const publicRoutes = [
    {
      path: MAIN_ROUTE,
      Component: MainPage
    },
    {
      path: CATALOG_ROUTE,
      Component:Catalog
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: GOOD_ROUTE + '/:id',
        Component: GoodPage
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Auth
    }
]