import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './enter.scss';

class Enter extends React.Component {
  render() {
    return (
      <div styleName="hero">
        <h1>This is the Enter Component</h1>
      </div>
    )
  }
}

export default CSSModules(Enter, styles,  {allowMultiple: true});
