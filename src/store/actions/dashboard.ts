import api from "../../services/api";

export function getDashboard() {
  return function (dispatch: any) {
    api.get(`/producer?_page=1`)
      .then(res => {
        dispatch({
          type: 'GET_DASHBOARD',
          dashboardData: res.data,
          totalFarms: Number(res.headers["x-total-count"])
        })
      })
      .catch(err => console.error(err));
  }
}