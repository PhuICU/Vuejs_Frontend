<script setup>
import { fetchAllProduct } from "../../../api/fetchData";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const products = ref([]);
const fetchProducts = async () => {
  const res = await fetchAllProduct();
  products.value = res;
};

const router = useRouter();
// const user = ref([]);
// const fetchUser1 = async () => {
//   const res = await fetchUser(router.query.id);
//   user.value = res;
// };

onMounted(() => {
  fetchProducts();
});
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2">
    <div>
      <router-link :to="{ name: 'Home' }" class="navbar-brand"
        ><img
          src="../../../../public/360_F_450353376_69Lp5NmR674oWG82ReeTU7JCsEqIpNH5.jpg"
          style="width: 90px"
          alt="logo"
        />Cake Shop</router-link
      >
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Trang Chủ<span class="sr-only">(current)</span></router-link
          >
        </li> -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Bánh Sinh Nhật
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              :to="{
                name: 'Classificationproduct',
                query: { type: 1 },
              }"
              class="dropdown-item"
              >Bánh sinh nhật bé trai</router-link
            >
            <router-link
              :to="{
                name: 'Classificationproduct',
                query: { type: 1 },
              }"
              class="dropdown-item"
              >Bánh sinh nhật bé gái</router-link
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Bánh mì & Bánh mặn
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              :to="{ name: 'Classificationproduct', query: { type: 2 } }"
              class="dropdown-item"
              >Bánh mì
            </router-link>
            <router-link
              :to="{ name: 'Classificationproduct', query: { type: 3 } }"
              class="dropdown-item"
              >Bánh mặn</router-link
            >
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Cookie & MiniCake
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              :to="{ name: 'Classificationproduct', query: { type: 4 } }"
              class="dropdown-item"
              >Cookie
            </router-link>
            <router-link
              :to="{ name: 'Classificationproduct', query: { type: 5 } }"
              class="dropdown-item"
              >MiniCake</router-link
            >
            <router-link
              :to="{ name: 'Classificationproduct', query: { type: 6 } }"
              class="dropdown-item"
              >Teabreak</router-link
            >
            <router-link
              :to="{ name: 'Classificationproduct', query: { type: 7 } }"
              class="dropdown-item"
              >Petit</router-link
            >
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="name"
          name="name"
          v-model="name"
        />

        <button class="btn btn-outline-success my-2 my-sm-0">
          <router-link
            :to="{
              name: 'Search',
              query: { name: { name } },
            }"
            class="nav-link"
            >Tìm kiếm</router-link
          >
        </button>
      </form>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg"
              class="rounded-circle"
              style="width: 40px"
              alt="Avatar"
            />
            <!-- {{ user.name }} -->
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link :to="{ name: 'Cart' }" class="dropdown-item"
              >Giỏ hàng <i class="bi bi-cart-fill"></i>
            </router-link>
            <router-link :to="{ name: 'Cart' }" class="dropdown-item"
              >Thông báo <i class="bi bi-bell-fill"> </i
            ></router-link>
            <div class="dropdown-divider"></div>
            <router-link :to="{ name: 'Login' }" class="dropdown-item"
              >Đăng xuất</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
