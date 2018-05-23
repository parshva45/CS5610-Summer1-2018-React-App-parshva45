import React from 'react';

export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="nav-item">
          <a className="nav-link" href="#">
              {this.props.lesson.title}
          </a>
      </li>
    );
  }
}
