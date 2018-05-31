import * as constants from "../constants/index"

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {

  switch (action.type) {

    case constants.PREVIEW:
      return {
        widgets: state.widgets,
        preview: !state.preview
      };

    case constants.HEADING_TEXT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.text = action.text
          }
          return Object.assign({}, widget)
        })
      };

    case constants.HEADING_SIZE_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.size = action.size
          }
          return Object.assign({}, widget)
        })
      };

    case constants.LINK_HREF_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.href = action.href
          }
          return Object.assign({}, widget)
        })
      };

    case constants.LINK_TEXT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.text = action.text
          }
          return Object.assign({}, widget)
        })
      };

    case constants.PARAGRAPH_TEXT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.text = action.text
          }
          return Object.assign({}, widget)
        })
      };

    case constants.SELECT_WIDGET_TYPE:
      let newState = {
        widgets: state.widgets.filter((widget) => {
          if (widget.position === action.position) {
            widget.widgetType = action.widgetType
            if (widget.widgetType === "Heading") {
              widget.size = 1
            }
          }
          return true;
        })
      };
      return JSON.parse(JSON.stringify(newState));

    case constants.SAVE:
      fetch('http://localhost:8080/api/lesson/' + action.lessonId + '/widget', {
        method: 'post',
        body: JSON.stringify(state.widgets),
        headers: {
          'content-type': 'application/json'
        }
      });
      return state;

    case constants.FIND_ALL_WIDGETS:
      newState = Object.assign({}, state);
      let foundWidgets = action.widgets
        .sort(function (a, b) {
          return a.position - b.position
        });
      newState.widgets = foundWidgets;
      newState.lessonId = action.lessonId;
      return newState;

    case constants.DELETE_WIDGET:
      console.log(JSON.stringify(state.widgets));
      let newWidgets = state.widgets
        .filter(widget => (
          widget.position !== action.position
        ));
      newWidgets.map(widget => {
        if (widget.position > action.position) {
          widget.position--
        }
        Object.assign({}, widget)
      });
      console.log(JSON.stringify(newWidgets));
      return {widgets: newWidgets};

    case constants.ADD_WIDGET:
      return {
        widgets: [
          ...state.widgets,
          {
            position: state.widgets.length + 1,
            text: 'New Widget',
            widgetType: 'Paragraph',
            lessonId: action.lessonId
          }
        ]
      };
    default:
      return state
  }
};