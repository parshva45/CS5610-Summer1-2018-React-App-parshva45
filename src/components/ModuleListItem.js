import React from 'react';
import { NavLink } from 'react-router-dom'
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
        <NavLink to={`/course/${this.props.courseId}/module/${this.props.module.id}`}
                 style={{textDecoration:'none',color:'black', display:'block', padding:'10px'}}
                activeStyle={{background:'grey'}}>
            {this.props.module.title}
            <button className="btn btn-danger fa fa-times float-right"
                    onClick={this.onOpenModal}>
            </button>
        </NavLink>
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
      </li>
    );
  }
}
