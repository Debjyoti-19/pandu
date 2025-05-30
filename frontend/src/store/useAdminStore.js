import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAdminStore = create((set) => ({
    isUploadingData: false,

    addProduct: async (data) => {
        set({ isUploadingData: true })
        try {
            const res = await axiosInstance.post('/product/add-item', data, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            console.log(res.data)
            console.log("Product added")
        } catch (error) {
            console.log("Error in uploading product : ", error)
        } finally {
            set({ isUploadingData: false })
        }
    }
}))