import React, { Component } from 'react';

export default class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.renderJobDetail = this.renderJobDetail.bind(this);
  }
  render() {
    const jobDetail = this.props.jobDetail;
    return (
      <li>
        {this.renderJobDetail(jobDetail)}
      </li>
    );
  }
  renderJobDetail(jobDetail) {
    return (
      <div>
        <input type="checkbox" />
        <span>{jobDetail.title}</span>
        <span>{jobDetail.num}</span>
      </div>
    );
  }
}
