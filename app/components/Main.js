import React from 'react';
//import React components being used in Main

//gets css for main container
import CSSModules from 'react-css-modules';
import styles from '../style/style.scss';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Main Component. Children are rendered below</h1>
        {this.props.children}
      </div>
    )
  }
}

export default CSSModules(Main, styles);
