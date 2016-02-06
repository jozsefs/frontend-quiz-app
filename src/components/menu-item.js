import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class MenuItem extends React.Component {
  render() {
    const { title, route, className } = this.props;
    return (
      <li className={className}>
        <Link to={route}>{title}</Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
  className: PropTypes.string
};

export default MenuItem;
