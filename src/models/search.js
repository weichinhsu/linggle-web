import * as api from '../services/search'

export default {
  namespace: 'search',
  state: {
    list: null,
    example: null
  },
  reducers: {
    SET_search(state, { payload }) {
      return {
        ...state,
        list: payload
      }
    },
    SET_example(state, { payload }) {
      return {
        ...state,
        example: payload
      }
    },
    SET_Gbook_example(state, { payload }) {
      return {
        ...state,
        example: {
          ...state.example,
          examples: payload
        }
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
    },
    * GET_example({ payload }, { put, call, select }) {
      try {
        const data = yield call(api.example, payload);
        const gbooks = yield call(api.google_example, payload)
        const _g_example = gbooks.items.map((val) => {
          return val.searchInfo.textSnippet
        })

        yield put({
          type: 'SET_example',
          payload: data,
        })
        console.log(_g_example)
      } catch (error) {
        console.log(error)
      }
    }
  },
}