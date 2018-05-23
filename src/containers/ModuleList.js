import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleServiceClient';
import CourseService from '../services/CourseServiceClient';

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      courseName: '',
      module: { title: '' },
      modules: [
        {title: '', id: ''}
      ]
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);

    this.setCourseId =
      this.setCourseId.bind(this);

    this.moduleService = ModuleService.instance;
    this.courseService = CourseService.instance;
  }
  setModules(modules) {
    this.setState({modules: modules})
  }
  findAllModulesForCourse(courseId) {
    this.moduleService
      .findAllModulesForCourse(courseId)
      .then((modules) => {this.setModules(modules)});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  setCourseName(courseName) {
    this.setState({courseName: courseName});
  }

  componentDidMount() {
    this.setCourseId(this.props.courseId);
  }
  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId);
    this.courseService
      .findCourseById(newProps.courseId)
      .then((course) => {
          this.setCourseName(course.title)
      });
  }

  createModule() {
    this.moduleService
      .createModule(this.props.courseId, this.state.module)
      .then(() => {this.findAllModulesForCourse(this.state.courseId)});
  }
  titleChanged(event) {
    this.setState({module: {title: event.target.value}});
  }
  renderListOfModules() {
      let modules = this.state.modules.map(
        (module) => {
          return <ModuleListItem module={module}
                                 courseId={this.state.courseId}
                                 delete={this.deleteModule}
                                 key={module.id}/>
      });
      return modules;
  }
  deleteModule(moduleId){
    this.moduleService
        .deleteModule(moduleId)
        .then(() => { this.findAllModulesForCourse(this.state.courseId); });
  }
  render() {
    return (
      <div>
        <h4>Module List for course: {this.state.courseName}</h4>
        <input onChange={this.titleChanged}
               value={this.state.module.title}
               placeholder="Module Title"
               className="form-control"/>
        <button onClick={this.createModule} className="btn btn-primary btn-block">
          <i className="fa fa-plus"></i>
        </button>
        <br/>
        <ul className="list-group">
          {this.renderListOfModules()}
        </ul>
      </div>
    );
  }
}
