import React from 'react';
import "./Signup.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Login from './Login';

function Signup() {
    const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/Login');
  };

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-light text-black my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 ">Sign Up</h2>
              <p className="text-black-50 mb-5">Please fill all requird details!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Confirm-password' id='formControlLg' type='password' size="lg"/>

             
              <MDBBtn outline className='mx-2 px-5' color='black' size='lg'>
                Sign Up
              </MDBBtn>

              <div className='m-5'></div>

              <div>
                <p className="mb-0">Already have an account? <button onClick={navigateToLogin}>Login</button></p>
                <Routes><Route path="/Login" element={<Login />} /></Routes>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;