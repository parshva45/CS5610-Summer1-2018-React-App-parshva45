import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseServiceClient";

class CourseList extends React.Component {
  constructor() {
    super();
    this.state = {
        course:'',
        courses:[]
    };
    this.courseService = CourseService.instance;
    this.titleChanged = this.titleChanged.bind(this);
    this.createCourse = this.createCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }
  componentDidMount() {
    this.findAllCourses();
  }
  findAllCourses() {
    this.courseService
      .findAllCourses()
      .then((courses) => {
        this.setState({courses: courses});
      })
  }
  renderCourseRows() {
    let courses = this.state.courses.map(
        (course) => {
          var modifiedLocalDate = new Date(course.modified).toString();
          course['modified'] = modifiedLocalDate.substr(4,20);
          var createdLocalDate = new Date(course.created).toString();
          course['created'] = createdLocalDate.substr(4,20);
          console.log(JSON.stringify(course));
          return <CourseRow key={course.id}
                            course={course}
                            delete={this.deleteCourse}/>
    });
    return courses
  }
  titleChanged(event) {
    this.setState({
      course: { title: event.target.value }
    });
  }
  createCourse() {
    this.courseService
      .createCourse(this.state.course)
      .then(() => { this.findAllCourses(); });
  }
  deleteCourse(courseId){
      this.courseService
        .deleteCourse(courseId)
        .then(() => { this.findAllCourses(); });
  }
  render() {
    return (
      <div>
        <br/>
          <div className="row">
            <div className="col-10">
              <input onChange={this.titleChanged}
                     className="form-control"
                     id="titleFld"
                     placeholder="CS5610"/>
            </div>
            <div className="col-2">
              <button onClick={this.createCourse}
                      className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        <br/>
        <table className="table table-striped" style={{textAlign:'center'}}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Owned by</th>
              <th>Creation date</th>
              <th>Last modified date</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCourseRows()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default CourseList;
