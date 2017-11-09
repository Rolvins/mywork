import React from 'react';

export default class EditProfile extends React.Component{
    render(){
        return (
          <div>
            <div className="card ml-1 mb-1 ">
            <div className="card-header">
                    <h4>
                      <i className="fa fa-address-card" aria-hidden="true" />&nbsp;
                      Edit Profile
                    </h4>
            </div>
            <div className="card-block">
            <form>
            <div className="form-row form-inline my-1">
               <div className="form-group col-6">
                 <input type="text" className="form-control w-100" id="inputEmail4" ref="UserFullName" placeholder="Full Namejbjk" />
               </div>
               <div className="form-group col-6">
                 <input type="text" className="form-control w-100" id="inputPassword4" ref="UserNickName" placeholder="Nickname" />
               </div>
             </div>
             <div className="form-row form-inline my-1">
               <div className="form-group col-6 w-100">
                <label >Gender</label>
                  <select className="form-control ml-2" id="gender" ref="UserGender" name="Gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
               </div>
               <div className="form-group col-6 w-100">
                   <label>Date Of Birth</label>
                   <input type="date" className="form-control ml-2" id="inptE4" placeholder="Date of Birth" max="2007-11-31" ref="UserDOB"/>
               </div>
             </div>
             <div className="form-group col-12 my-1">
               <input type="number" className="form-control" id="mobilenumber" placeholder="Mobile Number" ref="UserPhone" />
             </div>
             <div className="form-group col-12 my-1">
               <textarea type="text" className="form-control" id="ShortBio" placeholder="Short Bio About Yourself(~160 Characters)" ref="UserShortBio" />
             </div>
             <div className="d-flex flex-row justify-content-center">
             <button type="submit" className="btn btn-primary my-3"> <i className="fa fa-floppy-o" aria-hidden="true"></i> &nbsp; Update</button>
             </div>
              </form>
              </div>
            </div>
            </div>
        );
    }
}
