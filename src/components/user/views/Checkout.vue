<template>
  <div class="align-items-center main_title gradient-custom container">
    <div
      style="background-color: rgba(72, 54, 63, 0.8)"
      class="text-white text-center py-5 mt-4"
    >
      <div class="mb-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-success bi bi-check-circle-fill"
          width="75"
          height="75"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          />
        </svg>
      </div>
      <div class="text-center main_title">
        <h2 class="font-bold text-white">XIN CẢM ƠN!</h2>
        <h3>QUÝ KHÁCH ĐÃ MUA HÀNG TẠI CỬA HÀNG</h3>
        <h4 class="font-weight-bold mt-4">
          Chúng tôi sẽ luôn lắng nghe mọi ý kiến đóng góp của quý khách
        </h4>
        <button class="btn btn-dark btn-lg mt-4">
          <router-link class="text-white nav-link" :to="{ name: 'Home' }"
            >Về Trang Chủ</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>
