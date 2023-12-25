import React, { useContext } from 'react';
import { UserContext } from '../context/User';
import { CartContext } from '../cart/CartContextProvider';
import { useQuery } from 'react-query';
import axios from "axios"
import './Profile.css'
import { useNavigate } from 'react-router-dom';
function Profile() {
  let navigate=useNavigate();

    let {userToken,setUserToken}=useContext(UserContext)
    // if(!userToken){
    //   navigate('/home');
    // }
    const getuser = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile` ,
        {headers:{Authorization:`Tariq__${userToken}`}});
        console.log(data);
        return data;
    }
    const { data, isLoading } = useQuery('getuser_details', getuser)
    if (isLoading) {
        return (
          <div className='container p-5'>
            <h3>Profile </h3>
            <div className="row py-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )
      }
  return (
   
<div className="container emp-profile">
  <form method="post">
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img className=' rounded-2' src={data?.user?.image.secure_url} alt="profile image" />
          
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
          <h5>
           {data?.user?.userName}
          </h5>
          <h6>
            Web Developer and Designer
          </h6>
          <p className="proile-rating">RANKINGS : <span>8/10</span></p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="profile-work">
          <p>WORK LINK</p>
          <a href>Website Link</a><br />
          <a href>Bootsnipp Profile</a><br />
          <a href>Bootply Profile</a>
          <p>SKILLS</p>
          <a href>Web Designer</a><br />
          <a href>Web Developer</a><br />
          <a href>WordPress</a><br />
          <a href>WooCommerce</a><br />
          <a href>PHP, .Net</a><br />
        </div>
      </div>
      <div className="col-md-8">
        <div className="tab-content profile-tab" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="row">
              <div className="col-md-6">
                <label>User Id</label>
              </div>
              <div className="col-md-6">
                <p>{ data?.user?.userName}123</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Name</label>
              </div>
              <div className="col-md-6">
                <p>{ data?.user?.userName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
              </div>
              <div className="col-md-6">
                <p>{ data?.user?.email}</p>
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
    </div>
  </form>           
</div>



  )
}

export default Profile