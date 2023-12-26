<script setup>
import { onMounted, ref } from "vue";
import {
  clearCart,
  removeProduct,
  fetchCart,
  updateCart,
} from "../../../api/fetchData";

const cart = ref([]);
const price_Total = ref(0);
const user_id = localStorage.getItem("user_id");
const removeItem = ref("");

const priceTotal = () => {
  let total = 0;
  cart.value.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  price_Total.value = total;
};

//count item in cart
const countItem = ref(0);
const countItemCart = () => {
  let count = 0;
  cart.value.forEach((item) => {
    count += item.quantity;
  });
  countItem.value = count;
};

const fetchData = async () => {
  const res = await fetchCart(user_id);
  // cart = [{ product: {}, quantity: 123 },...]
  cart.value = res.products;
  console.log(cart.value);
  priceTotal();
  countItemCart();
};

//delete cart
const deleteCart1 = async () => {
  try {
    await removeProduct(user_id, removeItem.value);

    fetchData();
    //out modal
    $("#exampleModal").modal("hide");
    alert("Bạn đã xóa sản phẩm thành công.");
  } catch (error) {
    console.log(error);
  }
};

const updateCarts = async (product_id, quantity) => {
  try {
    cart.value.forEach((item) => {
      if (item.product._id === product_id) {
        item.quantity = quantity;
      }
    });
    await updateCart(user_id, product_id, quantity);
    fetchData();
  } catch (error) {
    console.log(error);
  }
};

const clearCart1 = async () => {
  try {
    await clearCart(user_id);
    alert("Bạn đã xóa giỏ hàng thành công.");
    fetchData();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <section class="h-100 h-custom mt-4" style="background-color: antiquewhite">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div
              class="card card-registration card-registration-2"
              style="border-radius: 15px"
            >
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5 row">
                      <div
                        class="d-flex justify-content-between align-items-center mb-5 col-12"
                      >
                        <h1 class="fw-bold mb-0 text-black">GIỎ HÀNG</h1>
                        <!-- <h6 class="mb-0 text-muted">{{ item.quantity }}</h6> -->
                      </div>
                      <div class="d-flex flex-row-reverse">
                        <button class="btn btn-danger" @click="clearCart1">
                          Xóa giỏ hàng
                        </button>
                      </div>
                      <hr class="" />

                      <div
                        v-for="item in cart"
                        :key="item.product._id"
                        :v-if="cart.length > 0"
                        class="row mb-4 d-flex justify-content-between align-items-center"
                      >
                        <div class="col-md-2 col-lg-3 col-xl-2">
                          <img
                            :src="'http://localhost:3000/' + item.product.image"
                            class="img-fluid rounded-3"
                            :alt="item.product.name"
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">{{ item.product.type }}</h6>
                          <h6 class="text-black mb-0">
                            {{ item.product.name }}
                          </h6>
                        </div>
                        <div class="col-md-1 col-lg-3 col-xl-2 d-flex">
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            type="number"
                            v-model="item.quantity"
                            class="form-control form-control-sm"
                          />
                          <button class="btn">
                            <i
                              class="bis bi-check"
                              @click="
                                updateCarts(item.product._id, item.quantity)
                              "
                            ></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">{{ item.product.price }}đ</h6>
                        </div>
                        <div class="col">
                          <button
                            class="btn btn-link px-2 nav-link"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            @click="removeItem = item.product._id"
                          >
                            <i class="bi bi-trash3-fill"></i>
                          </button>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="pt-5">
                        <h6 class="mb-0">
                          <button class="btn btn-dark">
                            <router-link
                              :to="{ name: 'Home' }"
                              class="text-white nav-link"
                              ><i class="fas fa-long-arrow-alt-left me-2"></i
                              >Trở về trang chủ</router-link
                            >
                          </button>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bg-grey">
                    <div class="p-5">
                      <h3 class="fw-bold mb-5 mt-2 pt-1">THÔNG TIN</h3>
                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">
                          Số lượng: {{ countItem }}
                        </h5>
                        <h5>{{ price_Total }}đ</h5>
                      </div>

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">Phí vận chuyển</h5>
                        <h5>Free</h5>
                      </div>

                      <h5 class="text-uppercase mb-3">Give code</h5>

                      <div class="mb-5">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form3Examplea2"
                            >Enter your code</label
                          >
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-uppercase">Tổng tiền</h5>
                        <h5>{{ price_Total }}đ</h5>
                      </div>

                      <div>
                        <button
                          type="button"
                          class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                          @click="addOrder1"
                        >
                          <router-link :to="{ name: 'Order' }" class="nav-link"
                            >ĐẶT HÀNG</router-link
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Xóa sản phẩm
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Bạn có thật sự muốn xóa?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Hủy
            </button>
            <button @click="deleteCart1" type="button" class="btn btn-danger">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
