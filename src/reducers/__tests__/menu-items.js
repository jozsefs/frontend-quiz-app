import { expect } from 'chai';
import { UPDATE_LOCATION } from 'react-router-redux';
import Immutable from 'immutable';
import reducer from '../menu-items';
import routes from '../../routes';

describe('menu-items reducer', () => {
  it('should return the initial state', () => {
    expect(
      Immutable.is(
        reducer(undefined, {}),
        Immutable.fromJS(routes)
      )
    ).to.be.equal(true);
  });

  it('should make an item active if route changes', () => {
    const testRoutes = Immutable.fromJS([{
      route: '/'
    }]);

    expect(
      Immutable.is(reducer(testRoutes, {
        type: UPDATE_LOCATION,
        payload: {
          pathname: '/'
        }
      }),
      Immutable.fromJS([{
        route: '/',
        isActive: true
      }]))
    ).to.be.equal(true);
  });
});
