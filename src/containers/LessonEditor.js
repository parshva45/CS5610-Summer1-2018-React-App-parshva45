import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "../reducers/WidgetReducer"
import {WidgetContainer} from '../components/widget'
import App from './WidgetList'

class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: ''
        };
        this.selectLesson = this.selectLesson.bind(this);
    }

    componentDidMount() {
        this.selectLesson
        (
            this.props.match.params.courseId,
            this.props.match.params.moduleId,
            this.props.match.params.lessonId
        );
    }

    componentWillReceiveProps(newProps){
        this.selectLesson
        (
            newProps.match.params.courseId,
            newProps.match.params.moduleId,
            newProps.match.params.lessonId
        );
    }

    selectLesson(courseId, moduleId, lessonId) {
        this.setState({
            courseId: courseId,
            moduleId: moduleId,
            lessonId: lessonId
        });
    }

    render() {
        return(
        <Provider store={store}>
            <App lessonId={this.state.lessonId}/>
        </Provider>
        );
    }
}

let store = createStore(widgetReducer);

export default LessonEditor;
