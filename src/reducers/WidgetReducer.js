import * as constants from "../constants/index"

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {

  switch (action.type) {

    case constants.SHIFT_WIDGET_UP:
      let newWids = state.widgets;
      if(action.position > 1){
        newWids.map(widget => {
          if (widget.position === action.position - 1) {
            widget.position = action.position
          } else if (widget.position === action.position) {
            widget.position = action.position - 1
          }
          return Object.assign({}, widget)
        })
      }
      let sortedWidgets = newWids
        .sort(function (a, b) {
          return a.position - b.position
        });

      return JSON.parse(JSON.stringify({
        widgets: sortedWidgets
      }));

    case constants.SHIFT_WIDGET_DOWN:
      let newWids2 = state.widgets;
      if(action.position < state.widgets.length){
        newWids2.map(widget => {
          if (widget.position === action.position) {
            widget.position++
          } else if (widget.position === action.position + 1) {
            widget.position--
          }
          return Object.assign({}, widget)
        })
      }
      let sortedWidgets2 = newWids2
        .sort(function (a, b) {
          return a.position - b.position
        });

      return JSON.parse(JSON.stringify({
        widgets: sortedWidgets2
      }));

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

    case constants.LIST_TEXT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.listItems = action.listItems
          }
          return Object.assign({}, widget)
        })
      };

    case constants.LIST_TYPE_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.listType = action.listType
          }
          return Object.assign({}, widget)
        })
      };

    case constants.IMAGE_SRC_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.src = action.src
          }
          return Object.assign({}, widget)
        })
      };

    case constants.IMAGE_HEIGHT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.height = action.height
          }
          return Object.assign({}, widget)
        })
      };

    case constants.IMAGE_WIDTH_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.width = action.width
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

    case constants.WIDGET_NAME_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if (widget.position === action.position) {
            widget.name = action.name
          }
          return Object.assign({}, widget)
        })
      };

    case constants.SELECT_WIDGET_TYPE:
      let newState = {
        widgets: state.widgets.filter((widget) => {
          if (widget.position === action.position) {
            widget.widgetType = action.widgetType;
            if (widget.widgetType === "Heading") {
              widget.size = 1
            } else if (widget.widgetType === "List") {
              widget.listType = "Unordered list";
              widget.listItems = "";
            } else if (widget.widgetType === "Image") {
              widget.height = 300;
              widget.width = 300;
            }
          }
          return true;
        })
      };
      return JSON.parse(JSON.stringify(newState));

    case constants.SAVE:
      fetch('https://webdev-parshva-shah.herokuapp.com/api/lesson/' + action.lessonId + '/widget', {
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