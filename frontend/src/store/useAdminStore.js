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
    getProductByAdminId: async (adminId) => {
        set({ isGettingData: true });
        try {
            const res = await axiosInstance.post("/product/get-admin-product", {
                adminId,
            });
            return res;
        } catch (error) {
            console.log("Error in getting product data : ", error);
        } finally {
            set({ isGettingData: false });
        }
    },
    getAllProducts: async () => {
        set({ isGettingData: true })
        try {
            const res = await axiosInstance.get("/product/get-items")
            return res
        } catch (error) {
            console.log("Error in getting product data : ", error)
        } finally {
            set({ isGettingData: false })
        }
    },
    getCatagory: async () => {
        set({ isGettingData: true })
        try {
            const res = await axiosInstance.get("/product/get-category")
            return res
        } catch (error) {
            console.log("Error in getCatagory : ", error)
        } finally {
            set({ isGettingData: false })
        }
    }
}));
