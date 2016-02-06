import React, { PropTypes } from 'react';
import MenuItem from './menu-item';

class Menu extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <MenuItem
            route={item.get('route')}
            title={item.get('title')}
            className={item.get('isActive') ? 'active' : ''}
            key={index}
          />
        ))}
      </ul>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.object
};

export default Menu;
