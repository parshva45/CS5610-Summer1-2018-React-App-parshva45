import React, {Component} from 'react'
import LessonTabsItem from '../components/LessonTabsItem';
import LessonService from '../services/LessonServiceClient'

export default class LessonTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: { title: '' },
            lessons: [
                {title: '', id: ''}
            ]
        };

        //this.createModule = this.createModule.bind(this);
        //this.titleChanged = this.titleChanged.bind(this);

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);

        this.lessonService = LessonService.instance;
    }
    createLesson(courseId, moduleId){
        this.lessonService
            .createLesson(courseId, moduleId, this.state.lesson)
            .then(() => { this.findAllLessonsForModule(this.state.courseId, this.state.moduleId)});
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
    setLessons(lessons) {
        this.setState({lessons: lessons})
    }
    titleChanged(event) {
        this.setState({
            lesson: { title: event.target.value }
        });
    }
    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {
                this.setLessons(lessons)});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    renderListOfLessons() {
        let lessons = this.state.lessons.map(
            (lesson) => {
                return <LessonTabsItem lesson={lesson}
                                       key={lesson.id}
                                       create={this.createLesson}/>
        });
        return lessons;
    }
    render() {
        return(
            <div>
                <ul className="nav nav-tabs">
                    {this.renderListOfLessons()}
                    <li>
                        <div className="row">
                            <div className="col-6">
                                <input onChange={this.titleChanged}
                                       className="form-control"
                                       id="titleFld"
                                       placeholder="Lesson Title"/>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success fa fa-plus"
                                        onClick={() => {
                                            this.createLesson(
                                                this.props.courseId,
                                                this.props.moduleId
                                            )
                                        }}>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


