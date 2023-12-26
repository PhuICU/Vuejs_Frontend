<script setup>
import { onMounted, ref } from "vue";
import {
  fetchCart,
  fetchUser,
  addOrder,
  addAddressAndPhone,
  clearCart,
} from "../../../api/fetchData";

const order = ref();
const user_id = localStorage.getItem("user_id");
const total_price = ref(0);
const user = ref({});

const setAddress = async () => {
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  try {
    await addAddressAndPhone(user_id, phone, address);
    alert("Bạn đã thêm địa chỉ thành công.");
    $("#formAddress").modal("hide");
  } catch (error) {
    console.log(error);
  }
};

const totalOrder = () => {
  let total = 0;
  order.value.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  total_price.value = total;
};
const total_price_discount = ref(0);
const price_discount = ref(0);
const totalOrderDiscount = () => {
  let total = 0;
  order.value.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  total_price_discount.value = total - total * 0.1;
  price_discount.value = total * 0.1;
};

const User = async () => {
  const res = await fetchUser(user_id);
  user.value = res;
};

const Checkout = async () => {
  try {
    await addOrder(
      user_id,
      order.value,
      user.value.address,
      user.value.phone,
      total_price_discount.value
    );
    alert("Bạn đã đặt hàng thành công.");
    await clearCart(user_id);
  } catch (error) {
    console.log(error);
  }
};

const Order = async () => {
  const res = await fetchCart(user_id);
  order.value = res.products;
  console.log(order.value);
  totalOrder();
  totalOrderDiscount();
};
const Arr = [
  {
    value: 1,
    title: "Bánh sinh nhật",
  },
  {
    value: 2,
    title: "Bánh mì",
  },
  {
    value: 3,
    title: "Bánh mặn",
  },
  {
    value: 4,
    title: "Cookie",
  },
  {
    value: 5,
    title: "MiniCake",
  },
  {
    value: 6,
    title: "TeaBreak",
  },
  {
    value: 7,
    title: "Petit",
  },
];

//set date now
const date = new Date();
const date_now =
  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

//set address

onMounted(() => {
  Order();
  User();
});
</script>

<template>
  <div>
    <div
      class="modal fade"
      id="formAddress"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">
              Thông tin liên hệ
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label"
                  >Số điện thoại:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  name="phone"
                />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label"
                  >Địa chỉ:</label
                >
                <textarea
                  class="form-control"
                  id="address"
                  name="address"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
            <button type="button" class="btn btn-primary" @click="setAddress">
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
    <section class="h-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-10 col-xl-8">
            <div class="card" style="border-radius: 10px">
              <div class="card-header px-4 py-5">
                <h5 class="text-muted mb-0">
                  Cảm ơn bạn đã đặt hàng,
                  <span style="color: #a8729a">ShopCake</span>!
                </h5>
              </div>
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <p class="lead fw-normal mb-0" style="color: #a8729a">
                    Hóa đơn
                  </p>
                  <button
                    type="button"
                    class="btn btn-dark btn-sm py-1 px-3"
                    data-toggle="modal"
                    data-target="#formAddress"
                  >
                    Địa chỉ nhận hàng
                  </button>
                </div>
                <div class="card shadow-0 border mb-4">
                  <div class="card-body">
                    <div
                      class="row"
                      v-for="item in order"
                      :key="item.product._id"
                    >
                      <div class="col-md-2">
                        <img
                          :src="'http://localhost:3000/' + item.product.image"
                          class="img-fluid"
                          :alt="item.product.name"
                        />
                      </div>
                      <div
                        class="col-md-2 text-center d-flex justify-content-center align-items-center"
                      >
                        <p class="text-muted mb-0">{{ item.product.name }}</p>
                      </div>
                      <div
                        class="col-md-2 text-center d-flex justify-content-center align-items-center"
                      >
                        <p class="text-muted mb-0 small">
                          {{
                            Arr.find(
                              (item1) => item1.value == item.product.type
                            )?.title
                          }}
                        </p>
                      </div>

                      <div
                        class="col-md-2 text-center d-flex justify-content-center align-items-center"
                      >
                        <p class="text-muted mb-0 small">
                          Số lượng: {{ item.quantity }}
                        </p>
                      </div>
                      <div
                        class="col-md-2 text-center d-flex justify-content-center align-items-center"
                      >
                        <p class="text-muted mb-0 small">
                          {{
                            item.product.price.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })
                          }}đ
                        </p>
                      </div>
                    </div>
                    <hr
                      class="mb-4"
                      style="background-color: #e0e0e0; opacity: 1"
                    />
                  </div>
                </div>
                <h5 class="fw-bold mb-0 d-flex justify-content-start">
                  Chi tiết đặt hàng
                </h5>
                <div class="pt-2">
                  <div class="row">
                    <div class="col-5">
                      <ul class="navbar-nav">
                        <li class="d-flex justify-content-start">
                          <p class="text-muted mb-0">
                            Người đặt hàng : {{ user.name }}
                          </p>
                        </li>
                        <li class="d-flex justify-content-start">
                          <p class="text-muted mb-0">
                            Ngày đặt : {{ date_now }}
                          </p>
                        </li>
                        <li class="d-flex justify-content-start">
                          <p class="text-muted mb-0">
                            Số điện thoại : {{ user.phone }}
                          </p>
                        </li>
                        <li class="d-flex justify-content-start">
                          <p class="text-muted mb-0">
                            Địa chỉ nhận hàng : {{ user.address }}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-5">
                      <ul class="navbar-nav">
                        <li class="d-flex justify-content-start">
                          <p class="text-muted mb-0">
                            <span class="fw-bold me-4">Tổng cộng:</span>
                            {{
                              total_price.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                              })
                            }}
                          </p>
                        </li>
                        <li class="d-flex justify-content-start">
                          <p class="text-muted mb-0">
                            <span class="fw-bold me-4">Giảm giá:</span>-10% ({{
                              price_discount.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                              })
                            }}
                            )
                          </p>
                        </li>
                        <li class="d-flex justify-content-start">
                          <p class="text-muted mb-0">
                            <span class="fw-bold me-4">Phí vận chuyển:</span>
                            0.0 đ
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card-footer border-0 px-4 py-5"
                style="
                  background-color: #a8729a;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <h5
                  class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                >
                  Tổng tiền chi trả:
                  <span class="h4 mb-0 ms-2"
                    >{{
                      total_price_discount.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })
                    }}
                  </span>
                </h5>
                <div class="row mt-4">
                  <div class="col">
                    <button
                      type="button"
                      class="btn btn-light btn-sm"
                      style="border-radius: 10px"
                    >
                      <router-link class="nav-link" :to="{ name: 'Home' }">
                        Tiếp tục mua hàng
                      </router-link>
                    </button>
                  </div>
                  <div class="col d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn btn-light btn-sm"
                      style="border-radius: 10px"
                      @click="Checkout"
                    >
                      <router-link class="nav-link" :to="{ name: 'Checkout' }"
                        >Thanh toán</router-link
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
