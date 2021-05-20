/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Commit } from 'vuex'
import { getTopList } from '@/api/discover/recommend'

const getDefaultState = () => {
  return {
    surgeRanking: [] // 飙升榜
  }
}

const state = getDefaultState()

const mutations = {
  GET_SURGE_RANKING(state: any, data: any) {
    state.surgeRanking = data
  }
}

const actions = {
  getSurgeRanking(commit: Commit): void {
    console.log(commit)
    getTopList(19723756).then((res) => {
      console.log('zx')
      console.log(res)
      commit('GET_SURGE_RANKING', res.playlist)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
