import * as api from '../services/search'

export default {
  namespace: 'global',
  state: {
    nav_scroll: 'navbar-scrolled',
  },
  reducers: {
    SET_scroll(state, { payload }) {
      return {
        ...state,
        nav_scroll: payload
      }
    },
  },
  effects: {
    * GET_search({ payload }, { put, call, select }) {
      
    },

  },
}