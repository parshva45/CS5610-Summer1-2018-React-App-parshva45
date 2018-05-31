import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.HEADING_TEXT_CHANGED,
    position: widgetId,
    text: newText
  })
);
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
  dispatch({
    type: constants.HEADING_SIZE_CHANGED,
    position: widgetId,
    size: newSize
  })
);

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.PARAGRAPH_TEXT_CHANGED,
    position: widgetId,
    text: newText
  })
);

export const linkHrefChanged = (dispatch, widgetId, newHref) => (
  dispatch({
    type: constants.LINK_HREF_CHANGED,
    position: widgetId,
    href: newHref
  })
);

export const linkTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.LINK_TEXT_CHANGED,
    position: widgetId,
    text: newText
  })
);

export function findAllWidgets(dispatch, lessonId) {
  fetch('http://localhost:8080/api/lesson/' + lessonId + '/widget')
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      lessonId: lessonId,
      widgets: widgets
    }))
}

export function addWidget(dispatch, lessonId) {
  dispatch({
    type: constants.ADD_WIDGET,
    lessonId: lessonId
  })
}

export function save(dispatch, lessonId) {
  dispatch({
    type: constants.SAVE,
    lessonId: lessonId
  })
}

export const preview = dispatch => (
  dispatch({type: constants.PREVIEW})
);
