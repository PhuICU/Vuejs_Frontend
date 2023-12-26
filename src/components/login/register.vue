<script setup>
import { ref } from "vue";
import registerSchema from "./registervalid.js";
import { Form, Field } from "vee-validate";
import { useRouter } from "vue-router";
import { register } from "../../api/fetchData";

const router = useRouter();
const disabledBtn = ref(false);

const onInvalidSubmit = () => {
  disabledBtn.value = true;
  setTimeout(() => {
    disabledBtn.value = false;
  }, 3000);
};

const onSubmit = async (values) => {
  const data = {
    name: values.name,
    email: values.email,
    password: values.password,
  };
  console.log(data);
  const res = await register(data);
  console.log(res);
  storeUser.setUserId(res.user._id);
  router.push({ name: "Login" });
};
</script>
<template>
  <section class="h-100 h-custom" style="background-color: #8fc4b7">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
              class="w-100"
              style="
                border-top-left-radius: 0.3rem;
                border-top-right-radius: 0.3rem;
              "
              alt="Sample photo"
            />
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">ĐĂNG KÝ</h3>

              <Form
                @submit="onSubmit"
                @invalid-submit="onInvalidSubmit"
                class="px-md-2"
              >
                <div class="form-outline mb-4 row">
                  <div class="col-3">
                    <label class="form-label" for="name">Tên</label>
                  </div>
                  <div class="col">
                    <Field
                      name="name"
                      type="text"
                      id="name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="form-outline mb-4 row">
                  <div class="col-3">
                    <label class="form-label" for="email">Email</label>
                  </div>
                  <div class="col">
                    <Field
                      name="email"
                      type="text"
                      id="email"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="form-outline mb-4 row">
                  <div class="col-3">
                    <label class="form-label" for="password">Mật khẩu</label>
                  </div>
                  <div class="col">
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      class="form-control"
                    />
                  </div>
                </div>

                <!-- <div class="row">
                  <div class="col-md-3 mb-4">
                    <div class="form-outline datepicker">
                      <label for="exampleDatepicker1" class="form-label"
                        >Chọn ngày
                      </label>
                    </div>
                  </div>
                  <div
                    class="md-form md-outline input-with-post-icon datepicker col"
                    inline="true"
                    id="date-picker-example"
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="example"
                      placeholder="Select date"
                    />
                    <i class="fas fa-calendar input-prefix"></i>
                  </div>
                </div> -->

                <button
                  type="submit"
                  class="btn btn-success btn-lg mb-1"
                  :class="
                    disabledBtn === true ? 'opacity-50 cursor-not-allowed' : ''
                  "
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
