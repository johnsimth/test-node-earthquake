import axios from 'axios';

export const sendRequests = () => (dispatch) => {
  axios
    .get('/api/getData')
    .then((res) => {
      console.log("-----1111------->");
      console.log(res);
      dispatch(storeData(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const storeData = resData => ({
  type: "SUCCESS_GET",
  payload: {
    ...resData
  }
});
