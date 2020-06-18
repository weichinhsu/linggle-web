import * as api from '../services/introduce'

export default {
  namespace: 'introduce',
  state: {
    about: null,
  },
  reducers: {
    SET_about(state, { payload }) {
      return {
        ...state,
        about: payload
      }
    },
  },
  effects: {
    * GET_about({ payload }, { put, call, select }) {
      try {
        const data = yield call(api.get_about);
        yield put({
          type: 'SET_about',
          payload: JSON.parse(data.about),
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}