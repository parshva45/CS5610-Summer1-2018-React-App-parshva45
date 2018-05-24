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
        this.deleteLesson = this.deleteLesson.bind(this);

        this.lessonService = LessonService.instance;
    }
    createLesson(courseId, moduleId){
        this.lessonService
            .createLesson(courseId, moduleId, this.state.lesson)
            .then(() => { this.findAllLessonsForModule(this.state.courseId, this.state.moduleId)});
    }
    deleteLesson(lessonId){
        this.lessonService
            .deleteLesson(lessonId)
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
                                       delete={this.deleteLesson}
                                       create={this.createLesson}/>
        });
        return lessons;
    }
    render() {
        return(
            <div>
                <ul className="nav nav-tabs nav-justified">
                    {this.renderListOfLessons()}
                    <li>
                        <div style={{display:'inline-block'}}>
                            <input onChange={this.titleChanged}
                                   className="form-control"
                                   id="titleFld"
                                   style={{width:'120px'}}
                                   placeholder="Lesson Title"/>
                        </div>
                        <div style={{display:'inline-block'}}>
                            <button className="btn btn-success fa fa-plus"
                                    onClick={() => {
                                        this.createLesson(
                                            this.props.courseId,
                                            this.props.moduleId
                                        )
                                    }}>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


