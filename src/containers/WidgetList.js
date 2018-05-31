import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/Widget'

class WidgetList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.lessonId !== newProps.lessonId) {
      this.props.findAllWidgets(newProps.lessonId);
    }
  }

  render() {
    return (
      <div className="container">
        <br/>
        <div style={{float: 'right'}}>
          <span style={{padding: '10px'}}>
              <button hidden={this.props.previewMode}
                      className="btn btn-success"
                      onClick={() => this.props.save(this.props.lessonId)}>
                  Save
              </button>
          </span>

          <button onClick={this.props.preview}
                  className="btn btn-dark">
            Preview
          </button>
        </div>

        <br/><br/>

        <div className={"card border-secondary mb-3"}>
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.position}/>
          ))}
        </div>
        <div style={{float: 'right'}}>
          <button className="btn btn-primary btn-lg fa fa-plus"
                  onClick={() => this.props.addWidget(this.props.lessonId)}>
          </button>
        </div>
        <span style={{paddingBottom: '50px'}}>&nbsp;</span>
      </div>
    )
  }
}

const stateToPropertiesMapper = (state) => ({
  widgets: state.widgets,
  previewMode: state.preview
});
const dispatcherToPropsMapper
  = dispatch => ({
  findAllWidgets: (lessonId) => actions.findAllWidgets(dispatch, lessonId),
  addWidget: (lessonId) => actions.addWidget(dispatch, lessonId),
  save: (lessonId) => actions.save(dispatch, lessonId),
  preview: () => actions.preview(dispatch)
});
const App = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList);

export default App