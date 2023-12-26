<script setup>
import { ref } from "vue";
import loginSchema from "./loginvalid.js";
import { Form, Field } from "vee-validate";
import { login } from "../../api/fetchData";
import { useRouter } from "vue-router";

const buttonSubmit = ref();
const router = useRouter();

const onInvalidSubmit = () => {
  buttonSubmit.value.disabled = true;
  setTimeout(() => {
    buttonSubmit.value.disabled = false;
  }, 1000);
};

const onSubmit = async (values) => {
  try {
    const res = await login({
      email: values.email,
      password: values.password,
    });
    //if not valid login

    // storeUser.setUserId(res.user._id);
    localStorage.setItem("user_id", res.user._id);
    console.log(res);
    if (res.user.role === 1) {
      router.push({ name: "Dashboard" });
    } else {
      router.push({ name: "Home" });
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <section class="h-100 gradient-form" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/50/35/33/360_F_450353376_69Lp5NmR674oWG82ReeTU7JCsEqIpNH5.jpg"
                      style="width: 185px"
                      alt="logo"
                    />
                    <h4 class="mt-1 mb-5 pb-1">CAKE SHOP</h4>
                  </div>

                  <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
                    <p>Đăng nhập vào tài khoản của bạn</p>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example11"
                        >Tên tài khoản</label
                      >
                      <Field
                        name="email"
                        type="email"
                        id="form2Example11"
                        class="form-control"
                        placeholder="Phone number or email address"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example22"
                        >Mật khẩu</label
                      >
                      <Field
                        name="password"
                        type="password"
                        id="form2Example22"
                        class="form-control"
                      />
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button
                        ref="buttonSubmit"
                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Đăng nhập
                      </button>
                      <a class="text-muted" href="#!">Quên mật khẩu?</a>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Không có tài khoản?</p>
                      <button type="button" class="btn btn-outline-danger">
                        <router-link
                          :to="{
                            name: 'Register',
                          }"
                          class="nav-link text-dark p-0"
                          >Đăng kí
                        </router-link>
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  class="w-100"
                  style="
                    border-top-left-radius: 0.3rem;
                    border-top-right-radius: 0.3rem;
                    height: 100vh;
                  "
                  alt="Sample photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
