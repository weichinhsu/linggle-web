import * as api from '../services/search'

export default {
  namespace: 'search',
  state: {
    list: null,
  },
  reducers: {
    SET_search(state, { payload }) {
      return {
        ...state,
        list: payload
      }
    },
    RESET_list(state) {
      return {
        ...state,
        list: null,
      }
    }
  },
  effects: {
    * GET_search({ payload }, { put, call, select }) {
      try {
        const data = yield call(api.search, payload);

        yield put({
          type: 'SET_search',
          payload: data,
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
}