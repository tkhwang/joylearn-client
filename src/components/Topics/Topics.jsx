import React, { Component } from 'react';
import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import TopicsSearch from './TopicsSearch';
import TopicsDetail from './TopicsDetail';

import './Topics.css';
import config from '../../config';
const { SERVER_URL } = config();
// 로그인을 했을 때의 홈 화면
export default class Topics extends Component {
  state = {
    // topics: [
    //   {
    //     name: "JavaScript",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    //   },
    //   {
    //     name: "node.js",
    //     logo: "https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg"
    //   },
    //   {
    //     name: "Python",
    //     logo: "http://blog.klocwork.com/wp-content/uploads/2016/01/python-logo.png",
    //   },
    //   {
    //     name: "react",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png",
    //   },
    //   {
    //     name: "ruby",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/480px-Ruby_logo.svg.png",
    //   },
    //   {
    //     name: "git",
    //     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSFusff2muc5B3Qj-Vr0OaXdx5WnzsJBqD-5uNi6dTAOLQ-gBpA",
    //   },
    //   {
    //     name: "php",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/480px-PHP-logo.svg.png",
    //   },
    //   {
    //     name: "vue.js",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/300px-Vue.png",
    //   },
    //   {
    //     name: "angular",
    //     logo: "https://teamextension.es/dist/img/skills/angularjs_og.png",
    //   },
    // ]
  };

  // constructor가 필요하지 않나?
  // constructor(props){
  //   super(props);

  //   // binding
  // }

  // axious!!

  async componentDidMount() {
    console.log(this.props.location.search);

    const values = querystring.parse(this.props.location.search);
    if (values) auth.loginWithJwt(values.token);

    const topics = await http.get(SERVER_URL + '/topics');
    console.log(topics);
    this.setState({
      topics: topics.data
    });
  }

  _renderTopics = () => {
    return (
      <div className="topics">
        {this.state.topics.map((topic, index) => {
          return (
            <TopicsDetail name={topic.name} logo={topic.logo} key={index} />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <TopicsSearch />
        {this.state.topics ? this._renderTopics() : 'Loadings'}
      </div>
      // <React.Fragment>
      //   <TopicsSearch />
      //   <TopicsDetail />
      // </React.Fragment>
    );
  }
}

// export default Topics;
