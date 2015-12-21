import React, { Component } from 'react';
import JobDetail from './JobDetail.js';

export default class JobData extends Component {
  constructor(props) {
    super(props);
    
    this.renderJobDetails = this.renderJobDetails.bind(this);
    this.count = this.count.bind(this);
    this.check = this.check.bind(this);
  }
  render() {
    const jobData = this.props.jobData;
    const jobDetails = this.props.jobData.jobDetails;
    return (
      <li>
        <div className="checkbox">
        <input type="checkbox" id={jobData.id.toString()}
          ref={ c => {if(c!=null) { c.checked=jobData.selected }} }
          onClick={e => this.check(e, jobData)}/>
          <label htmlFor={jobData.id.toString()}></label>
        </div>
        <span className="department"><strong>{jobData.department}</strong></span>
        <span className="down-arrow"></span>
        <span className="number sum">{this.count(jobDetails)}</span>
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
  check(e, jobData) {
    this.props.changeSelect(jobData.id);
  }
}
