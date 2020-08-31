import {all} from 'redux-saga/effects';
import authSaga from '../containers/LoginContainer/sagas';
import dashboardsSaga from '../containers/DashboardsContainer/sagas';
import visualizationsSaga from '../containers/VisualizationsContainer/sagas';

export function* rootSaga() {
  yield all([authSaga(), dashboardsSaga(), visualizationsSaga()]);
}
