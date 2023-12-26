<template>
  <!-- create sidebar -->

  <div
    class="flex-shrink-0 p-3 bg-dark text-white"
    style="width: 280px; height: 100vh"
  >
    <a
      href="/admin"
      class="d-flex align-items-center pb-3 mb-3 text-decoration-none border-bottom text-white"
    >
      <svg class="bi me-2" width="30" height="24">
        <use xlink:href="#bootstrap" />
      </svg>
      <span class="fs-5 fw-semibold mt-4">Quản Lý Sản Phẩm</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed text-white"
          data-bs-toggle="collapse"
          data-bs-target="#home-collapse"
          aria-expanded="true"
        >
          Trang Chủ
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a href="/admin" class="nav-link rounded text-white">Sản phẩm</a>
            </li>
            <li>
              <router-link :to="{ name: 'adminCart' }" class="nav-link rounded"
                >Đơn hàng</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'adminUser' }" class="nav-link rounded"
                >Người dùng</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed text-white"
          data-bs-toggle="collapse"
          data-bs-target="#account-collapse"
          aria-expanded="false"
        >
          Tài Khoản
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="nav-link rounded">Profile</a></li>
            <li><a href="#" class="nav-link rounded">Settings</a></li>
            <li>
              <router-link :to="{ name: 'Login' }" class="nav-link rounded"
                >Đăng xuất</router-link
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <!-- end create sidebar -->
</template>
