import AdminPage from "./admin/pages/AdminPage";
import {
    ACCOUNT_ROUTE,
    ADMIN_ROUTE,
    CART_ROUTE, CATALOG_ROUTE,
    GOOD_ROUTE,
    LOGIN_ROUTE, MAIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    MAKEORDER_ROUTE, LIKED_ROUTE, ADMIN_GOOD, ADMIN_CATEGORY,ADMIN_TYPE
} from "./utils/consts";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import GoodPage from "./pages/GoodPage";
import Catalog from "./pages/Catalog";
import MainPage from "./pages/MainPage";
import MakeOrder from "./pages/MakeOrder";
import Liked from "./pages/Liked";
import AdminGood from "./admin/pages/AdminGood"
import AdminCategory from "./admin/pages/AdminCategory"
import AdminType from "./admin/pages/AdminType"


export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: ADMIN_GOOD,
        Component: AdminGood
    },
    {
        path: ADMIN_CATEGORY,
        Component: AdminCategory
    },
    {
        path: ADMIN_TYPE,
        Component: AdminType
    },
]

export const authRoutes = [

    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: LIKED_ROUTE,
        Component: Liked
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
    },
    {
        path: MAKEORDER_ROUTE,
        Component: MakeOrder
    }
]