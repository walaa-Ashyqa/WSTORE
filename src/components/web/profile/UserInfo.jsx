import React, { useContext } from 'react'
import { UserContext } from '../context/User';

function UserInfo() {
    let {userData,loading}=useContext(UserContext);
    console.log("UserInfo",userData);
if(loading){
    return(<div className="row py-4">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>)
}
  return (
    <div className="col-md-8">
    <div className="tab-content profile-tab" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="row">
          <div className="col-md-6">
            <label>User Id</label>
          </div>
          <div className="col-md-6">
            <p>{ userData?.userName}123</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
          </div>
          <div className="col-md-6">
            <p>{ userData?.userName}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
            <p>{ userData?.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Phone</label>
          </div>
          <div className="col-md-6">
            <p>0569172954</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Profession</label>
          </div>
          <div className="col-md-6">
            <p>Web Developer and Designer</p>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div className="row">
          <div className="col-md-6">
            <label>Experience</label>
          </div>
          <div className="col-md-6">
            <p>Expert</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Hourly Rate</label>
          </div>
          <div className="col-md-6">
            <p>10$/hr</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Total Projects</label>
          </div>
          <div className="col-md-6">
            <p>230</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>English Level</label>
          </div>
          <div className="col-md-6">
            <p>Expert</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Availability</label>
          </div>
          <div className="col-md-6">
            <p>6 months</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label>Your Bio</label><br />
            <p>Your detail description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserInfo