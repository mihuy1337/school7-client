import { axiosWithAuth } from "../api/interceptors"

interface isRefresh {
  isRefresh: boolean
}

interface isAcivate {
  isAcivate: boolean
}

export const checkAuthService = {
  async checkRefresh() {
    const res = await axiosWithAuth.get<isRefresh>('/auth/check-refresh')
    return res.data.isRefresh
  },

  async checkActivate() {
    const res = await axiosWithAuth.get<isAcivate>('/auth/check-activate')
    return res.data.isAcivate
  }
}