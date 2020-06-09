import * as api from '../services/search'

export default {
  namespace: 'search',
  state: {
    list: null,
    example: []
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
        example: [...state.example, payload]
      }
    },
    SET_Gbook_example(state, { payload }) {
      return {
        ...state,
        example: {
          ...state.example,
          examples: [
            ...state.example.examples,
            ...payload
          ]
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

        const _g_example = gbooks.items.filter((val)=>{
          if(val.searchInfo === undefined) return false
          else return true
        }).map((val) => {
          let sentences = val.searchInfo.textSnippet.replace(/<b>|<\/b>|<br>|\n|”|“/g, '').replace(/([.?!])("|“|”)*\s+(?=[^a-z,<])/g, "$1|").split("|");
          sentences = sentences.filter(sentence => sentence.toLowerCase().includes(data.ngram.toLowerCase()))[0];
          return sentences
        }).filter((val) => val !== undefined)
        const example = {...data, examples: [...data.examples, ..._g_example]}
        console.log(_g_example)

        yield put({
          type: 'SET_example',
          payload: example,
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
}