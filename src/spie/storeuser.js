import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreUser = defineStore("storeUser", () => {
  const user_id = ref("");

  function setUserId(id) {
    user_id.value = id;
  }

  function getUserId() {
    return user_id.value;
  }

  return {
    user_id,
    setUserId,
    getUserId,
  };
});
