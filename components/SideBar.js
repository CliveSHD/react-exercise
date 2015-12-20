import React, { Component } from 'react';
import JobData from './JobData.js';

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.renderJobData = this.renderJobData.bind(this);
  }
  render() {
    const jobData = this.props.jobData;
    return (
      <div>
        <div>
          <span>招聘职位</span>
          <a href="#">清空</a>
        </div>
        <ul>
          {jobData.map(this.renderJobData)}
        </ul>
      </div>
    );
  }
  renderJobData(jobData) {
    return <JobData jobData={jobData} key={jobData.id} />;
  }
}
