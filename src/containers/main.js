import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Menu from '../components/menu';

class Main extends React.Component {
  render() {
    const { menuItems } = this.props;
    return (
      <div className="main">
        <Menu items={menuItems}/>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object,
  menuItems: PropTypes.object
};

function mapStateToProps(state) {
  return {
    menuItems: state.menuItems
  };
}

export default connect(
  mapStateToProps,
  routeActions
)(Main);
