// @flow

import React from 'react';
import type { ExpanderProps } from '../types';

const Body = ({ theme, onClick, onKeyPress }: ExpanderProps) => (
  <div
    style={theme.expanderStyle}
    onClick={onClick}
    onKeyPress={onKeyPress}
    role="button"
    tabIndex={0}
  >
    show more...
  </div>
);

export default Body;
