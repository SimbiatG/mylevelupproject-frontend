import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Absenceform.css';


class Absenceform extends Component {

    render(){
  
        return(
            
    <React.Fragment>

<div className="container-fluid" style={{padding:"0px"}}>
                        <nav className="navbar navbar-light bg-light">
                            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
                                <form className="form-inline">
                                <Link className="btn btn-outline-success my-2 my-sm-0"  to='/'> HOME </Link>
                                <Link className="btn btn-outline-success my-2 my-sm-0" to='/dashboard' type="submit"> DASHBOARD </Link>
                                </form>
                        </nav>
                     </div>
                    

                     <div className="container">

                     <h3 className="header"> Please Fill The Absence Request Form </h3>

                     <div className="pagelayout">
                     <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01"> Type Of Leave</label>
  </div>
  <select className="custom-select" required id="inputGroupSelect01">
  <option value="choose" selected> choose </option>
    <option value="sick"> Sick Leave </option>
    <option value="maternity">Maternity Leave </option>
    <option value="paternity">Paternity Leave</option>
    <option value="holiday"> Holiday Leave</option>
    </select>
</div>
<form>
                <div className="row">

                <div className="col-md-4">
                <div className="form-group">
    <label for="from"> FROM </label>
    <input type="date" required class="form-control" id="from"/>  
    
  </div>
                </div>

                <div className="col-md-4">
                <div className="form-group">
    <label for="to">TO </label>
    <input type="date" required class="form-control" id="to" />
    
  </div>
</div>

<div className="col-md-4">
<div className="form-group">
    <label for="formGroupExampleInput"> DURATION</label>
    <input type="text" class="form-control" id="formGroupExampleInput" />
  </div>
</div>

              </div>



                        
                        <div class="form-group">
    <label for="exampleFormControlTextarea1">  </label>
    <textarea class="form-control" required id="exampleFormControlTextarea1" placeholder="Reasons for Leave" rows="6"></textarea>
  </div>

  <button type="submit" className="btn btn-secondary btn-large "> Submit </button>
                        </form>

                     </div>


</div>



<div className="container-fluid"  style={{padding:"0px"}}>
            <nav className="navbar  fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
            </nav>
            </div>




 </React.Fragment>











        )
    }
}


export default Absenceform;