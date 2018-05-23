import React, {Component} from 'react'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleEditor from './ModuleEditor'

export default class CourseManager
  extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <h1>Course Manager</h1>

          <Route path="/courses"
                 component={CourseList}>
          </Route>
          <div className="row">
            <div className="col-4">
              <Route path="/course/:courseId"
                     component={CourseEditor}>
              </Route>
            </div>
            <div className="col-8">
              <Route path="/course/:courseId/module/:moduleId"
                     component={ModuleEditor}>
              </Route>
            </div>
          </div>

        </div>
      </Router>
    )
  }
}
