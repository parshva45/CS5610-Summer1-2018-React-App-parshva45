import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetPos, newText) => (
  dispatch({
    type: constants.HEADING_TEXT_CHANGED,
    position: widgetPos,
    text: newText
  })
);
export const headingSizeChanged = (dispatch, widgetPos, newSize) => (
  dispatch({
    type: constants.HEADING_SIZE_CHANGED,
    position: widgetPos,
    size: newSize
  })
);

export const listTextChanged = (dispatch, widgetPos, newText) => (
  dispatch({
    type: constants.LIST_TEXT_CHANGED,
    position: widgetPos,
    listItems: newText
  })
);

export const listTypeChanged = (dispatch, widgetPos, newType) => (
  dispatch({
    type: constants.LIST_TYPE_CHANGED,
    position: widgetPos,
    listType: newType
  })
);

export const paragraphTextChanged = (dispatch, widgetPos, newText) => (
  dispatch({
    type: constants.PARAGRAPH_TEXT_CHANGED,
    position: widgetPos,
    text: newText
  })
);

export const linkHrefChanged = (dispatch, widgetPos, newHref) => (
  dispatch({
    type: constants.LINK_HREF_CHANGED,
    position: widgetPos,
    href: newHref
  })
);

export const linkTextChanged = (dispatch, widgetPos, newText) => (
  dispatch({
    type: constants.LINK_TEXT_CHANGED,
    position: widgetPos,
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
