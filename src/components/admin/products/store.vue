<script setup>
import { onMounted, ref, computed } from "vue";
import { fetchAllProduct, deleteProduct } from "../../../api/fetchData";

const deleteProducts = async () => {
  try {
    console.log(id_product_remove.value);

    await deleteProduct(id_product_remove.value);
    products.value = products.value.filter((product) => {
      return product._id !== id_product_remove.value;
    });

    //out modal
    $("#exampleModal").modal("hide");
    alert("Bạn đã xóa sản phẩm thành công.");
  } catch (error) {
    console.log(error);
  }
};

const id_product_remove = ref("");
const type = ref();
const products = ref([]);
const fetchProducts = async () => {
  const res = await fetchAllProduct();
  products.value = res;
};

onMounted(() => {
  fetchProducts();
});

const currentPage = ref(1);
const itemsPerPage = 5;

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return products.value.slice(startIndex, endIndex);
});
</script>

<template>
  <div class="container">
    <div class="mt-4 bg-white p-5">
      <h1 class="d-flex justify-content-center">Sản phẩm của tôi</h1>
      <div class="d-flex justify-content-between mt-4">
        <div>
          <select id="type" name="type" v-model="type">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>

          <button class="btn">
            <router-link
              :to="{ name: 'Classification', query: { type: type } }"
              class="nav-link"
              >tìm kiếm</router-link
            >
          </button>
        </div>

        <button class="btn s-2" style="background-color: plum">
          <router-link :to="{ name: 'CreateProduct' }" class="nav-link"
            >Thêm sản phẩm</router-link
          >
        </button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Loại</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col" colspan="3">Thời gian tạo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in paginatedProducts" :key="product.id">
            <!-- {{
              console.log(product)
            }} -->
            <td>{{ product.type }}</td>
            <td>{{ product.name }}</td>
            <td>
              {{
                product.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}đ
            </td>
            <td>{{ product.createdAt }}</td>
            <td>
              <button class="btn btn-success s-2" type="button" style="">
                <router-link
                  :to="{
                    name: 'UpdateProduct',
                    query: { id: product._id },
                    product: product,
                  }"
                  class="nav-link space-x-2"
                  >Sửa</router-link
                >
              </button>
            </td>
            <td>
              <button
                class="btn btn-danger s-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                type="button"
                @click="id_product_remove = product._id"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="currentPage--" :disabled="currentPage === 1">
          Previous
        </button>
        <button>{{ currentPage }}</button>
        <button
          @click="currentPage++"
          :disabled="currentPage * itemsPerPage >= products.length"
        >
          Next
        </button>
      </div>
    </div>

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
            <button
              @click="deleteProducts"
              type="button"
              class="btn btn-danger"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>
