import React from 'react'
// import LessonTabs from './LessonTabs'

export default class LessonEditor
    extends React.Component {

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

    render() { return(
        <h1>{this.state.courseId} {this.state.moduleId} {this.state.lessonId}</h1>
        // <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId}/>
        );
    }
}