import React, {Component} from 'react';
import Feed from './Feed.jsx';
import FollowRequests from './FollowRequests.jsx';
import Notification from './Notifications.jsx';
import FolloweesFeed from './FolloweesFeed.jsx';
import $ from 'jquery';


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      followeesPosts: [],
      userId: this.props.userId,
    }
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    $.get('http://127.0.0.1:1337/posts/all', (data) => {
      this.setState({
        posts: data
      });
    });
  }
  
  render() {
  
    if (this.props.showFollows) {
      return (
        <div>
          <FollowRequests userId={this.props.userId} />
        </div>
      );
    } else if (this.props.showNotifications) {
      return (
        <div>
          <Notification userId={this.props.userId} />
        </div>
      );
    } else if (this.props.showFolloweesPosts) {
      return(
        <div>
          <FolloweesFeed posts={this.props.followeesPosts} userId={this.props.userId} />
        </div>
      );
    }
    return (
      <div>
        <Feed posts={this.state.posts} getPosts={this.getPosts} userId={this.props.userId} />
      </div>
    );
  }
}

export default Routes;
