import React from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-responsive-modal';

export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
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
      <li className="list-group-item">
        <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
            {this.props.module.title}
        </Link>
        <span className="float-right">
            <button className="btn btn-danger fa fa-times"
                    onClick={this.onOpenModal}>
            </button>
            <Modal open={open} onClose={this.onCloseModal} center>
                  <span style={{paddingTop:'100px'}}>&nbsp;</span>
                  <p>Do you really want to delete the Module {this.props.module.title}?</p>
                  <button onClick={() => {
                      this.props.delete(
                          this.props.module.id
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
        </span>

      </li>
    );
  }
}
