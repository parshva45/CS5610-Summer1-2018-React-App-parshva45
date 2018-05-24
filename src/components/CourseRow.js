import React from 'react';
import { Link } from 'react-router-dom'
import CourseService from "../services/CourseServiceClient";
import Modal from 'react-responsive-modal';

class CourseRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.courseService = CourseService.instance;
  }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

  render() {
    const { open } = this.state;
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
                    onClick={this.onOpenModal}>
                Delete
            </button>
            <Modal open={open} onClose={this.onCloseModal} center>
                <span style={{paddingTop:'100px'}}>&nbsp;</span>
                <p>Do you really want to delete the Course {this.props.course.title}?</p>
                <button onClick={() => {
                    this.props.delete(
                        this.props.course.id
                    )
                }}
                        className="btn btn-success"
                        style={{float:'left'}}>
                    Yes
                </button>
                <button onClick={this.onCloseModal}
                        className="btn btn-danger"
                        style={{float:'right'}}>
                    No
                </button>
            </Modal>
        </td>
      </tr>
    )
  }
}
export default CourseRow;
