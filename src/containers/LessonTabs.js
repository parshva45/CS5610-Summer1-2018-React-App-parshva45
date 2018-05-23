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

        this.lessonService = LessonService.instance;
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
    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {
                //console.log(lessons);
                this.setLessons(lessons)});
    }

    componentDidMount() {
        console.log(JSON.stringify(this.props));
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps){
        console.log(JSON.stringify(newProps));
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    renderListOfLessons() {
        let lessons = this.state.lessons.map(
            (lesson) => {
                //console.log(lesson);
                return <LessonTabsItem lesson={lesson}
                                       key={lesson.id}/>
        });
        return lessons;
    }
    render() {
        return(
            <div className="col-8">
                <ul className="nav nav-tabs">
                    {this.renderListOfLessons()}
                </ul>
            </div>
        );
    }
}


