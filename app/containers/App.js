import React, { Component } from 'react';
import 'typeface-space-mono';

import DragBar from '../components/DragBar';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
        <DragBar />
        {this.props.children}
      </div>
    );
  }
}
