import React, { Component } from 'react';

export default class JobDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const jobDetail = this.props.jobDetail;
    return (
      <li>
        <div className="checkbox">
        <input type="checkbox" id={jobDetail.id.toString()}
          ref={ c => {if(c!=null) { c.checked=jobDetail.selected }} } />
          <label htmlFor={jobDetail.id.toString()}></label>
        </div>
        <span className="detail">{jobDetail.title}</span>
        <span className="number">{jobDetail.num}</span>
      </li>
    );
  }
}
