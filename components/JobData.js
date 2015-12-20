import React, { Component } from 'react';
import JobDetail from './JobDetail.js';

export default class JobData extends Component {
  constructor(props) {
    super(props);
    
    this.renderJobDetails = this.renderJobDetails.bind(this);
    this.count = this.count.bind(this);
  }
  render() {
    const jobData = this.props.jobData;
    const jobDetails = this.props.jobData.jobDetails;
    return (
      <li>
        <input type="checkbox" />
        {jobData.department}
        <span>&#711;</span>
        <span>{this.count(jobData.jobDetails)}</span>
        <ul>
          {jobDetails.map(this.renderJobDetails)}
        </ul>
      </li>
    );
  }
  renderJobDetails(jobDetail) {
    return (
      <JobDetail jobDetail={jobDetail} key={jobDetail.id} />
    );
  }
  count(jobDetails) {
    return jobDetails.reduce(function(pre, cur) {
      return pre + cur.num;
    }, 0);
  }
}
