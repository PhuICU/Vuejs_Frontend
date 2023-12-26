export const routes = [
  {
    path: "/Product",
    name: "Main",
    component: () => import("../components/user/views/Main.vue"),
    children: [
      {
        path: "Detail",
        name: "DetailProduct",
        component: () => import("../components/user/views/Detail.vue"),
      },
      {
        path: "cart",
        name: "Cart",
        component: () => import("../components/user/views/Cart.vue"),
      },

      {
        path: "",
        name: "Home",
        component: () => import("../components/user/layout/Home.vue"),
      },
      {
        path: "${product.name}",
        name: "Classificationproduct",
        component: () =>
          import("../components/user/products/Classification.vue"),
      },
      {
        path: "search",
        name: "Search",
        component: () => import("../components/user/products/Search.vue"),
      },
      {
        path: "order",
        name: "Order",
        component: () => import("../components/user/views/Order.vue"),
      },
      {
        path: "checkout",
        name: "Checkout",
        component: () => import("../components/user/views/Checkout.vue"),
      },
    ],
  },

  {
    path: "/product/store",
    name: "StoreProduct",
    component: () => import("../components/admin/products/Store.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../components/login/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../components/login/Register.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/admin/me/Main.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("../components/admin/products/Store.vue"),
      },
      {
        path: "products/create",
        name: "CreateProduct",
        component: () => import("../components/admin/products/Create.vue"),
      },
      {
        path: "/product/update",
        name: "UpdateProduct",
        component: () => import("../components/admin/products/Update.vue"),
      },
      {
        path: "/product/classification",
        name: "Classification",
        component: () =>
          import("../components/admin/products/classification.vue"),
      },
      {
        path: "/admin/cart",
        name: "adminCart",
        component: () => import("../components/admin/carts/Cart.vue"),
      },
      {
        path: "/admin/user",
        name: "adminUser",
        component: () => import("../components/admin/user/User.vue"),
      },
      {
        path: "/admin/order",
        name: "adminOrder",
        component: () => import("../components/admin/products/Order.vue"),
      },
    ],
  },
];
