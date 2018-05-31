import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, SHIFT_WIDGET_UP, SHIFT_WIDGET_DOWN, SELECT_WIDGET_TYPE} from "../constants/index"
import * as actions from '../actions'

const dispatchToPropsMapper = dispatch => ({
  headingTextChanged: (widgetPos, newText) =>
    actions.headingTextChanged(dispatch, widgetPos, newText),
  headingSizeChanged: (widgetPos, newSize) =>
    actions.headingSizeChanged(dispatch, widgetPos, newSize),
  paragraphTextChanged: (widgetPos, newText) =>
    actions.paragraphTextChanged(dispatch, widgetPos, newText),
  linkHrefChanged: (widgetPos, newHref) =>
    actions.linkHrefChanged(dispatch, widgetPos, newHref),
  linkTextChanged: (widgetPos, newText) =>
    actions.linkTextChanged(dispatch, widgetPos, newText),
  listTextChanged: (widgetPos, newText) =>
    actions.listTextChanged(dispatch, widgetPos, newText),
  listTypeChanged: (widgetPos, newType) =>
    actions.listTypeChanged(dispatch, widgetPos, newType),
  imageSrcChanged: (widgetPos, newSrc) =>
    actions.imageSrcChanged(dispatch, widgetPos, newSrc),
  imageHeightChanged: (widgetPos, newHeight) =>
    actions.imageHeightChanged(dispatch, widgetPos, newHeight),
  imageWidthChanged: (widgetPos, newWidth) =>
    actions.imageWidthChanged(dispatch, widgetPos, newWidth),
  widgetNameChanged: (widgetPos, newText) =>
    actions.widgetNameChanged(dispatch, widgetPos, newText),
});
const stateToPropsMapper = state => ({
  preview: state.preview
});

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, widgetNameChanged}) => {
  let headingSelectElem;
  let headingInputElem;
  let nameElem;
  return (
    <div className="card-body">

      <div hidden={preview}>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Widget Name
            </label>
            <div className="col-sm-10">
              <input onChange={() => widgetNameChanged(widget.position, nameElem.value)}
                     className="form-control"
                     value={widget.name}
                     ref={node => nameElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Heading Text
            </label>
            <div className="col-sm-10">
              <input onChange={() => headingTextChanged(widget.position, headingInputElem.value)}
                     className="form-control"
                     value={widget.text}
                     ref={node => headingInputElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Heading Size
            </label>
            <div className="col-sm-10">
              <select onChange={() => headingSizeChanged(widget.position, headingSelectElem.value)}
                      className="form-control"
                      value={widget.size}
                      ref={node => headingSelectElem = node}>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
              </select>
            </div>
          </div>
        </form>
        <hr/>
        <h3>Preview of {widget.name}</h3>
      </div>
      <hr/>
      {widget.size == 1 && <h1>{widget.text}</h1>}
      {widget.size == 2 && <h2>{widget.text}</h2>}
      {widget.size == 3 && <h3>{widget.text}</h3>}
    </div>
  )
};

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);

const Paragraph = ({widget, preview, paragraphTextChanged, widgetNameChanged}) => {
  let paragraphInputElem;
  let nameElem;
  return (
    <div className="card-body">
      <div hidden={preview}>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Widget Name
            </label>
            <div className="col-sm-10">
              <input onChange={() => widgetNameChanged(widget.position, nameElem.value)}
                     className="form-control"
                     value={widget.name}
                     ref={node => nameElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Paragraph Text
            </label>
            <div className="col-sm-10">
              <textarea
                rows="5"
                onChange={() => paragraphTextChanged(widget.position, paragraphInputElem.value)}
                className="form-control"
                value={widget.text}
                ref={node => paragraphInputElem = node}>
              </textarea>
            </div>
          </div>
        </form>

        <hr/>
        <h3>Preview of {widget.name}</h3>
      </div>
      <hr/>
      <pre style={{fontFamily: 'inherit', fontSize: 'inherit'}}>{widget.text}</pre>
    </div>
  )
};
const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph);

const Image = ({widget, preview, imageSrcChanged, imageHeightChanged, imageWidthChanged, widgetNameChanged}) => {
  let imageSrcElem;
  let imageWidthElem;
  let imageHeightElem;
  let nameElem;
  return (
    <div className="card-body">
      <div hidden={preview}>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Widget Name
            </label>
            <div className="col-sm-10">
              <input onChange={() => widgetNameChanged(widget.position, nameElem.value)}
                     className="form-control"
                     value={widget.name}
                     ref={node => nameElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Image Source
            </label>
            <div className="col-sm-10">
              <input onChange={() => imageSrcChanged(widget.position, imageSrcElem.value)}
                     className="form-control"
                     value={widget.src}
                     ref={node => imageSrcElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Image Height
            </label>
            <div className="col-sm-10">
              <input onChange={() => imageHeightChanged(widget.position, imageHeightElem.value)}
                     className="form-control"
                     value={widget.height}
                     ref={node => imageHeightElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Image Width
            </label>
            <div className="col-sm-10">
              <input onChange={() => imageWidthChanged(widget.position, imageWidthElem.value)}
                     className="form-control"
                     value={widget.width}
                     ref={node => imageWidthElem = node}/>
            </div>
          </div>
        </form>
        <hr/>
        <h3>Preview of {widget.name}</h3>
      </div>
      <img src={widget.src} width={widget.width} height={widget.height}></img>
    </div>
  )
};

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);

const List = ({widget, preview, listTextChanged, listTypeChanged, widgetNameChanged}) => {
  let listSelectElem;
  let listInputElem;
  let nameElem;
  return (
    <div className="card-body">
      <div hidden={preview}>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Widget Name
            </label>
            <div className="col-sm-10">
              <input onChange={() => widgetNameChanged(widget.position, nameElem.value)}
                     className="form-control"
                     value={widget.name}
                     ref={node => nameElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              List Text
            </label>
            <div className="col-sm-10">
              <textarea
                rows="5"
                onChange={() => listTextChanged(widget.position, listInputElem.value)}
                className="form-control"
                value={widget.listItems}
                ref={node => listInputElem = node}>
              </textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              List Type
            </label>
            <div className="col-sm-10">
              <select onChange={() => listTypeChanged(widget.position, listSelectElem.value)}
                      className="form-control"
                      value={widget.listType}
                      ref={node => listSelectElem = node}>
                <option>Unordered list</option>
                <option>Ordered list</option>
              </select>
            </div>
          </div>
        </form>
        <hr/>
        <h3>Preview of {widget.name}</h3>
      </div>
      <hr/>
      {widget.listType === "Unordered list" && <UnorderedList key={widget.position} list={widget.listItems}/>}
      {widget.listType === "Ordered list" && <OrderedList key={widget.position} list={widget.listItems}/>}
    </div>
  )
};

const UnorderedList = ({list})=>{
  let i=0;
  return (
    <div>
      <ul>
        {list.split("\n").map((listItem)=>(
          <li key={i=i+1}>{listItem}</li>
        ))}
      </ul>
    </div>
  )
};

const OrderedList = ({list})=>{
  let i=0;
  return (
    <div>
      <ol>
        {list.split("\n").map((listItem)=>(
          <li key={i=i+1}>{listItem}</li>
        ))}
      </ol>
    </div>
  )
};

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);

const Link = ({widget, preview, linkHrefChanged, linkTextChanged, widgetNameChanged}) => {
  let linkHrefElem;
  let linkTextElem;
  let nameElem;
  if (!widget.href) {
    widget.href = '';
  }
  return (
    <div className="card-body">
      <div hidden={preview}>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Widget Name
            </label>
            <div className="col-sm-10">
              <input onChange={() => widgetNameChanged(widget.position, nameElem.value)}
                     className="form-control"
                     value={widget.name}
                     ref={node => nameElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Link Text
            </label>
            <div className="col-sm-10">
              <input onChange={() => linkTextChanged(widget.position, linkTextElem.value)}
                     className="form-control"
                     value={widget.text}
                     ref={node => linkTextElem = node}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Link URL
            </label>
            <div className="col-sm-10">
              <input onChange={() => linkHrefChanged(widget.position, linkHrefElem.value)}
                     className="form-control"
                     value={widget.href}
                     ref={node => linkHrefElem = node}/>
            </div>
          </div>
        </form>
        <hr/>
        <h3>Preview of {widget.name}</h3>
      </div>
      <hr/>
      <a href={widget.href}>{widget.text}</a>
    </div>
  )
};

const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link);

const Widget = ({widget, preview, dispatch}) => {
  let widgetSelectElement;
  return (
    <div>
      <div hidden={preview}>
        <div className={"card border-secondary mb-3"}>
          <div className="card-header">
            <h3 style={{display: 'inline'}}>{widget.widgetType} Widget</h3>
            <div style={{float: 'right'}}>
              <form className="form-inline">
                <span>
                  <button className="btn btn-warning btn-lg fa fa-arrow-up"
                          type="button"
                          onClick={e => (
                            dispatch({type: SHIFT_WIDGET_UP, position: widget.position})
                          )}>
                  </button>
                </span>
                <span style={{padding: '10px'}}>
                  <button className="btn btn-warning btn-lg fa fa-arrow-down"
                          type="button"
                          onClick={e => (
                            dispatch({type: SHIFT_WIDGET_DOWN, position: widget.position})
                          )}>
                  </button>
                </span>
                <select value={widget.widgetType}
                        className="form-control"
                        onChange={e => dispatch({
                          type: SELECT_WIDGET_TYPE,
                          position: widget.position,
                          widgetType: widgetSelectElement.value
                        })}
                        ref={node => widgetSelectElement = node}>
                  <option>Heading</option>
                  <option>Paragraph</option>
                  <option>List</option>
                  <option>Image</option>
                  <option>Link</option>
                </select>

                <span style={{paddingLeft: '10px'}}>

                  <button className="btn btn-danger btn-lg fa fa-times"
                          type="button"
                          onClick={e => (
                            dispatch({type: DELETE_WIDGET, position: widget.position})
                          )}>
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
        {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
        {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
        {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
        {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
      </div>
    </div>
  )
};
const WidgetContainer = connect(state => ({
  preview: state.preview
}))(Widget);
export default WidgetContainer
