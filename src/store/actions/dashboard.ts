import { UserId } from "../../config/storage";
import api from "../../services/api";

export function getDashboard() {
  return function (dispatch: any) {
    const userId = sessionStorage.getItem(UserId || "");
    api
      .get(`producers?user_id=${userId}`)
      .then((res) => {
        dispatch({
          type: "GET_DASHBOARD",
          dashboardData: res.data,
          totalFarms: res.data.length,
        });
      })
      .catch((err) => console.error(err));
  };
}
