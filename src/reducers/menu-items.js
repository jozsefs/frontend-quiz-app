import routes from '../routes';
import Immutable from 'immutable';
import { UPDATE_LOCATION } from 'react-router-redux';

const IS_ACTIVE_PROP = 'isActive';

// const initialState = Immutable.fromJS(routes).map(item => item.set(IS_ACTIVE_PROP, false));
const initialState = Immutable.fromJS(routes);

export default function menuItems(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      return state.map(
        item => item.set(IS_ACTIVE_PROP, item.get('route') === action.payload.pathname)
      );
    default:
      return state;
  }
}
