import api from '../../services/api';

export function getDashboard() {
  return function (dispatch: any) {
    api.get(`/producers`)
      .then(res => {
        dispatch({
          type: 'GET_DASHBOARD',
          dashboardData: res.data,
          totalFarms: res.data.length
        })
      })
      .catch(err => console.error(err));
  }
}