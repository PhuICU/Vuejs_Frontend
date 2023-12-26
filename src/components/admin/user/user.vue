<script setup>
import { onMounted, ref } from "vue";
import { fetchAllUser, deleteUser } from "../../../api/fetchData";

const users = ref([]);
const id_user_remove = ref("");

const fetchUsers = async () => {
  const res = await fetchAllUser();
  users.value = res;
};

//delete user
const deleteUsers = async () => {
  try {
    await deleteUser(id_user_remove.value);
    users.value = users.value.filter((user) => {
      return user._id !== id_user_remove.value;
    });

    //out modal
    $("#exampleModal").modal("hide");
    alert("Bạn đã xóa người dùng thành công.");
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>
<template>
  <div class="container">
    <div class="mt-4 bg-white p-5">
      <h1 class="d-flex justify-content-center">Người dùng</h1>
      <div class="d-flex justify-content-between mt-4">
        <div></div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Tên người dùng</th>
            <th scope="col">Email</th>
            <th scope="col">Vai trò</th>
            <th scope="col" colspan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <!-- {{
              console.log(product)
            }} -->
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button
                class="btn btn-danger s-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                type="button"
                @click="id_user_remove = user._id"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
            <button @click="deleteUsers" type="button" class="btn btn-danger">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>
