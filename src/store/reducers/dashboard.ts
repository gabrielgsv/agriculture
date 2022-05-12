import { DashboardAction, DashboardState } from '../types/dashboard'

const dashboard = (
  state: any = {},
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case 'GET_DASHBOARD':
      return {
        ...state,
        dashboardData: action.dashboardData,
        totalFarms: action.totalFarms,
      }
    default:
      return state
  }
}

export default dashboard