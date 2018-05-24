import React from 'react';
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
      <li className="nav-item">
          <div style={{display:'inline-block'}}>
              <a className="nav-link" href="#">
                  {this.props.lesson.title}
              </a>
          </div>
          <div style={{display:'inline-block'}}>
              <button className="btn btn-danger btn-sm fa fa-times"
                      onClick={this.onOpenModal}>
              </button>
              <Modal open={open} onClose={this.onCloseModal} center>
                  <span style={{paddingTop:'100px'}}>&nbsp;</span>
                  <p>Do you really wish to delete the Lesson {this.props.lesson.title}?</p>
                  <button onClick={() => {
                              this.props.delete(
                                  this.props.lesson.id
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
              <span style={{paddingRight:'10px'}}>&nbsp;</span>
          </div>
      </li>
    );
  }
}
