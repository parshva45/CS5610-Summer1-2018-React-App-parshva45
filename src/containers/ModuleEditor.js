import React from 'react'
import LessonTabs from './LessonTabs'

export default class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: ''
        };
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount() {
        this.selectModule
        (
            this.props.match.params.courseId,
            this.props.match.params.moduleId
        );
    }

    componentWillReceiveProps(newProps){
        this.selectModule
        (
            newProps.match.params.courseId,
            newProps.match.params.moduleId
        );
    }

    selectModule(courseId, moduleId) {
        this.setState({
            courseId: courseId,
            moduleId: moduleId
        });
    }

    render() { return(
            <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId}/>
    );}}
