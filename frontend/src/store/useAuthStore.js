import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: false,

    checkAuth: async () => {
        set({ isCheckingAuth: true })
        try {
            const res = await axiosInstance.get('/user/check')
            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in checkAuth : ", error)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    }
}))