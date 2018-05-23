import React from 'react';
import { Link } from 'react-router-dom'
import CourseService from "../services/CourseServiceClient";

class CourseRow extends React.Component {
  constructor(props) {
    super(props);
      this.courseService = CourseService.instance;
  }
  render() {
    return (
      <tr>
        <td><Link to={`/course/${this.props.course.id}`}>
            {this.props.course.title}
            </Link>
        </td>
        <td>
            Parshva Shah
        </td>
        <td>
          {this.props.course.created}
        </td>
        <td>
            {this.props.course.modified}
        </td>
        <td>
            <button className="btn btn-danger"
                    onClick={() => {this.props.delete(this.props.course.id)}}>
                Delete
            </button>
        </td>
      </tr>
    )
  }
}
export default CourseRow;
