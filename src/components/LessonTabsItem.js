import React from 'react';

export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="nav-item">
          <div style={{display:'inline-block'}}>
              <a className="nav-link" href="#">
                  {this.props.lesson.title}
              </a>
          </div>
          <div style={{display:'inline-block'}}>
              <button className="btn btn-danger btn-sm fa fa-times"
                      onClick={() => {
                          this.props.delete(
                              this.props.lesson.id
                          )
                      }}>
              </button>
              <span style={{paddingRight:'10px'}}>&nbsp;</span>
          </div>
      </li>
    );
  }
}
