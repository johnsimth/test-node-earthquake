const initialState = {
  resData: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_GET":
      console.log('aaaaaaaaaa');
      console.log(action.payload);
      return {
        ...state,
        resData: action.payload
      };
    default:
      return state;
  }
};
export default rootReducer;
