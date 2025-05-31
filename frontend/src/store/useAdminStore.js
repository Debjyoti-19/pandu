import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAdminStore = create((set) => ({
  isUploadingData: false,
  isGettingData: false,

  addProduct: async (data) => {
    set({ isUploadingData: true });
    try {
      const res = await axiosInstance.post("/product/add-item", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log("Error in uploading product : ", error);
    } finally {
      set({ isUploadingData: false });
    }
  },
  getProduct: async (adminId) => {
    set({ isGettingData: true });
    try {
      const res = await axiosInstance.post("/product/get-item", {
        adminId,
      });
      return res;
    } catch (error) {
      console.log("Error in getting product data : ", error);
    } finally {
      set({ isGettingData: false });
    }
  },
}));
