import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.HEADING_TEXT_CHANGED,
    id: widgetId,
    text: newText})
);
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
  dispatch({
    type: constants.HEADING_SIZE_CHANGED,
    id: widgetId,
    size: newSize})
);

export function findAllWidgets(dispatch, lessonId) {
  fetch('http://localhost:8080/api/lesson/'+lessonId+'/widget')
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      lessonId: lessonId,
      widgets: widgets }))
}

export const addWidget = dispatch => (
  dispatch({type: constants.ADD_WIDGET})
);
export const save = dispatch => (
  dispatch({type: constants.SAVE})
);
export const preview = dispatch => (
  dispatch({type: constants.PREVIEW})
);
