// @flow
'use strict';

import type {Element} from 'react';

import React from 'react';
import AppButton from './AppButton.react';
import ResponsiveSplitContainer from './ResponsiveSplitContainer.react'

export default class App extends React.PureComponent {
  render(): Element<any> {
    return (
      <ResponsiveSplitContainer
        className={[this.props.className, 'app'].join(' ')}>
        <AppButton color="tertiary" icon="plus">On</AppButton>
        <AppButton color="secondary" icon="minus">Off</AppButton>
        <AppButton color="primary" icon="bolt">Reset</AppButton>
      </ResponsiveSplitContainer>
    );
  }
}
