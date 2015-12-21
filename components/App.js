import React, { Component } from 'react';
import SideBar from './SideBar.js';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <SideBar data={data} />
      </div>
    );
  }
}

const data = {
jobData: [
{
id: 1,
department: "工程研发部门",
selected: false,
jobDetails: [
{
  id: 11,
  title: "Mac 开发工程师",
  num: 9,
  selected: false
},
{
  id: 12,
  title: "iOS App 测试工程师",
  num: 17,
  selected: false
},
{
  id: 13,
  title: "Android 远程控制工程师",
  num: 61,
  selected: false
},
{
  id: 14,
  title: "Web 前端工程师",
  num: 31,
  selected: false
},
{
  id: 15,
  title: "Android 多媒体软件开发工程师",
  num: 2,
  selected: false
}
]
},
{
id: 2,
department: "产品设计部门",
selected: false,
jobDetails: [
{
  id: 21,
  title: "网页设计师",
  num: 47,
  selected: false
},
{
  id: 22,
  title: "ID／工业设计师",
  num: 39,
  selected: false
},
{
  id: 23,
  title: "视觉设计师／GUI界面设计师",
  num: 42,
  selected: false
},
{
  id: 24,
  title: "平面设计师",
  num: 8,
  selected: false
}
]
}
]
};
