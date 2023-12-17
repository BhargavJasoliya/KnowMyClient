import React from 'react';
import "./Login.css";
import {Link} from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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

function Login() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-light text-black my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-black-50 mb-5">Please enter your login details!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-black-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='black' size='lg'>
                Login
              </MDBBtn>
              <div className='m-5'></div>
              <div>
                <p className="mb-0">Don't have an account? <a href="./Signup" class="text-black fw-bold">Sign Up</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;