import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: false,
    isSigningup: false,
    isLogining: false,

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
    },

    signup: async (data) => {
        set({ isSigningup: true })
        try {
            const res = await axiosInstance.post('/user/signup', data)
            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in signup : ", error)
            set({ authUser: null })
            throw error;
        } finally {
            set({ isSigningup: false })
        }
    },

    login: async(data) => {
        set({ isLogining: true })
        try {
            const res = await axiosInstance.post('/user/login', data)
            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in login : ", error)
            set({ authUser: null })
        } finally {
            set({ isLogining: false })
        }
    }
}))