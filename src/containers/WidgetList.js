import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/Widget'

class WidgetList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps){
    if(this.props.lessonId !== newProps.lessonId) {
        this.props.findAllWidgets(newProps.lessonId);
    }
  }

  render() {
    console.log(JSON.stringify(this.props.widgets[0]));
    return(
      <div>
        <h1>Widget List {this.props.widgets.length}</h1>

        <button hidden={this.props.previewMode} onClick={this.props.save}>
          Save
        </button>
        <button onClick={this.props.preview}>
          Preview
        </button>

        <ul style={{listStyle:'none'}}>
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.position}/>
          ))}
        </ul>
        <button onClick={this.props.addWidget}>Add widget
        </button>
        <span style={{paddingBottom:'50px'}}>&nbsp;</span>
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
  addWidget: () => actions.addWidget(dispatch),
  save: () => actions.save(dispatch),
  preview: () => actions.preview(dispatch)
});
const App = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList);

export default App