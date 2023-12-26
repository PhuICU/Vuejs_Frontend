import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchAllProduct = async () => {
  const response = await api.get("/api/products");
  return response.data;
};

export const fetchProduct = async (id) => {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await api.post("/api/admin/products", product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await api.put(`/api/admin/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/api/admin/products/${id}`);
  return response.data;
};

export const classification = async (type) => {
  const response = await api.get(`/api/products/classification/${type}`);
  return response.data;
};

export const search = async (name) => {
  const response = await api.get(`/api/products/products/search/${name}`);
  return response.data;
};

export const login = async (data) => {
  const response = await api.post(`/api/users/login`, data);
  return response.data;
};

export const register = async (data) => {
  const response = await api.post(`/api/users/register`, data);
  return response.data;
};

export const fetchAllCarts = async () => {
  const response = await api.get("/api/carts");
  return response.data;
};

export const fetchCart = async (id) => {
  const response = await api.get(`/api/carts/${id}`);
  return response.data;
};

export const updateCart = async (id, product_id, quantity) => {
  const response = await api.put(`/api/carts/${id}`, {
    product_id,
    quantity,
  });
  console.log(quantity);
  return response.data;
};

export const addCart = async (product_id, quantity, user_id) => {
  const response = await api.post("/api/carts/add", {
    user_id,
    product_id,
    quantity,
  });
  return response.data;
};

export const removeProduct = async (id, product_id) => {
  const response = await api.delete(
    `/api/carts/${id}?product_id=${product_id}`
  );
  console.log(product_id);
  return response.data;
};

export const clearCart = async (id) => {
  const response = await api.delete(`/api/carts/clear/${id}`);
  return response.data;
};

export const fetchAllUser = async () => {
  const response = await api.get("/api/admin/users");
  return response.data;
};

export const fetchUser = async (id) => {
  const response = await api.get(`/api/users/${id}`);
  return response.data;
};

// export const createUser = async (user) => {
//   const response = await api.post("/api/admin/users", user);
//   return response.data;
// };

// export const updateUser = async (id, user) => {
//   const response = await api.put(`/api/admin/users/${id}`, user);
//   return response.data;
// };

export const deleteUser = async (id) => {
  const response = await api.delete(`/api/admin/users/${id}`);
  return response.data;
};

//add order
export const addOrder = async (
  user_id,
  products,
  address,
  phone,
  totalPrice
) => {
  const response = await api.post("/api/orders", {
    user_id,
    products,
    address,
    phone,
    totalPrice,
  });
  return response.data;
};
//get order by id

export const getOrderById = async (id) => {
  const response = await api.get(`/api/orders/${id}`);
  return response.data;
};

//update order to paid
export const updateOrderToPaid = async (id) => {
  const response = await api.put(`/api/orders/${id}/pay`);
  return response.data;
};

//add address and phone to user
export const addAddressAndPhone = async (id, phone, address) => {
  const response = await api.put(`/api/users/add/${id}`, {
    address,
    phone,
  });
  return response.data;
};

//get order admin
export const getOrderAdmin = async () => {
  const response = await api.get("/api/orders");
  return response.data;
};
