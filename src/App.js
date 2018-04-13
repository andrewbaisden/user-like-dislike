import React, { Component } from 'react';
import MainButtons from './components/MainButtons';

const API = 'https://randomuser.me/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.getApi = this.getApi.bind(this);
    this.dislikeCopy = this.dislikeCopy.bind(this);
    this.likeProfile = this.likeProfile.bind(this);
    this.dislikeProfile = this.dislikeProfile.bind(this);
    this.likeCopy = this.likeCopy.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  getApi() {
    fetch(API)
      .then(res => {
        const response = res.json();
        response.then(data => {
          this.setState({ data: data.results });
          console.log('Data', data);
        });
        console.log('Response', res);
      })
      .catch(e => {
        console.error('Error', e);
      });
  }

  dislikeCopy() {
    this.dislikedCopy.innerHTML = 'DISLIKED';
  }

  likeCopy() {
    this.likedCopy.innerHTML = 'LIKED';
  }
  dislikeProfile() {
    this.getApi();
    this.dislikeCopy();
  }

  likeProfile() {
    this.getApi();
    this.likeCopy();
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        {data.map(res => (
          <div className="profile-container" key={res.login.username}>
            <div className="profile">
              <div className="profile-image">
                <img src={res.picture.large} alt="" />
                <div className="like-dislike-container">
                  <p className="dislike" ref={disliked => (this.dislikedCopy = disliked)} />
                  <p className="like" ref={liked => (this.likedCopy = liked)} />
                </div>
                <div className="profile-copy">
                  <h1>
                    {res.name.first} {res.name.last}
                  </h1>
                  <p>{res.gender}</p>
                </div>
                <h3>{res.login.username}</h3>

                <p>
                  {res.location.street}
                  <br />
                  {res.location.city}
                  <br />
                  {res.location.state}
                  <br />
                  {res.location.postcode}
                </p>
                <p>{res.email}</p>
              </div>
              <MainButtons dislikeProfile={this.dislikeProfile} likeProfile={this.likeProfile} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
