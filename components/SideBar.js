import React, { Component } from 'react';
import JobData from './JobData.js';

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.data;

    this.renderJobData = this.renderJobData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.clear = this.clear.bind(this);
  }
  render() {
    const jobData = this.state.jobData;
    return (
      <div id="side-bar">
        <div className="head">
          <span>招聘职位</span>
          <a href="#" onClick={this.handleClick}>清空</a>
        </div>
        <ul>
          {jobData.map(this.renderJobData)}
        </ul>
      </div>
    );
  }
  renderJobData(jobData) {
    return <JobData jobData={jobData} key={jobData.id} changeSelect={this.changeSelect} />;
  }
  handleClick(e) {
    e.preventDefault;
    this.clear();
  }
  changeSelect(departmentId) {
    let newState = this.state;
    let departmentIndex = newState.jobData.findIndex(function(department) {
      return department.id === departmentId;
    });
    newState.jobData[departmentIndex].selected = !newState.jobData[departmentIndex].selected;
    newState.jobData[departmentIndex].jobDetails = this.state.jobData[departmentIndex].jobDetails.map(function(detail) {
      detail.selected = newState.jobData[departmentIndex].selected;
      return detail;
    });
    this.setState(newState);
  }
  clear() {
    let newState = this.state;
    newState.jobData = newState.jobData.map(function(jobData) {
      let newJobData = jobData;
      newJobData.selected = false;
      newJobData.jobDetails = newJobData.jobDetails.map(function(jobDetail) {
        jobDetail.selected = false;
        return jobDetail;
      });
      return newJobData;
    });
    this.setState(newState);
  }
}
