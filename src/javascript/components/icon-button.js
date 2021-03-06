 // Copyright 2015 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import Icon from './icon';
import React from 'react';


export default class IconButton extends React.Component {

  static defaultProps = {
    className: 'Button'
  }

  /**
   * React lifecycyle method below:
   * http://facebook.github.io/react/docs/component-specs.html
   * ---------------------------------------------------------
   */

  render() {
    let nodeType = this.props.href ? 'a' : 'button';
    return React.createElement(nodeType, this.props,
        <span className="Button-iconWrapper">
          <span
            className="Button-icon"
            style={this.props.iconStyle}>
            <Icon type={this.props.type} />
          </span>
          {this.props.children}
        </span>);
  }
}
