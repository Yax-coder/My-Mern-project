import { useForm } from 'Hooks/useForm'
import React from 'react'
import styled from 'styled-components'
import Devs from '../assets/img/dev5.svg'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../actions/auth'
import { PropTypes } from 'prop-types'
import { setAlert } from '../actions/alert';
import Alert from 'components/Alert'





const SplitLogin = styled.div`
@media only screen and (max-width: 600px) {
 section {
  display: grid;
  grid-template-columns: 1fr;
    grid-template-rows: autofill;
  
 }
 .left {
   visibility: hidden;
 }
 .right {
   margin-left: -2rem;
   margin: o;
 }
}
overflow-y: hidden;
position: relative;
section {

  display: grid;
  grid-template-columns: 1fr 1fr;
  /* height: 100vh; */
  @media @tablet {
    grid-template-columns: 1fr;
    grid-template-rows: autofill;
  }

  .title-head {
    position: absolute;
    left: 11rem;
    color: white;
    top: 7rem;
    color: orangered;
    em {
      font-size: 12px;
    }
  }

  // left column
  .left {
    background-color: black;
    opacity: 0.9;
    /* @media @tablet {
      display: none;
    } */
    .container {
      color: white;
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      
      height: 100%;
      h1 {
        font-size: 30px;
      }
    }
  }

  // right column
  .right {
    background-color: white;
    .container {
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      h1 {
        font-size: 30px;
      }
    }
  }
}


`

const LoginBox = styled.div`
  margin: auto;
  width: 400px;
  padding-top: 7rem;
`

export const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`
const SubTitle = styled.div`
  font-size: 11px;
  /* font-weight: bold; */
  text-align: center;
  margin-top: 1rem;
`

const Register = ({ register, isAuthenticated, setAlert }) => {

  const [values, handleChange] = useForm({ name: '', email: '', password: '', password2: '' })
  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.password !== values.password2) {
      setAlert('Passwords do not match', 'bg-red-100 border-red-400');
    } else {
      register(values)
    }
  }

  // redirect to dashboard if login
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <SplitLogin>

      <section>
        <div className="left" style={{
          backgroundImage:
            "url(" + require("assets/img/register_bg_2.png").default + ")",
          // backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          height: '100vh',
          backgroundSize: "cover",
          opacity: 0.9
          // backgroundImage: "url('https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png')"
        }}>
          <div className='title-head'>
            <Title style={{
              // fontStyle:'italic'
            }}>
              <a href="index.html"><i className="fas fa-project-diagram"></i> DevHangouts</a>
            </Title>

          </div>
          <div className="container">
            <img width={400} height={400} src={Devs} alt='devs' />
            <SubTitle>
              Create a developer profile/portfolio, share posts and get help from other developers.
            </SubTitle>
          </div>

        </div>
        <div className="right">
          <LoginBox >
            <Alert />
            <Title style={{
              fontStyle:'italic'
            }}>
              <a href="index.html"><i className="fas fa-project-diagram"></i> Register</a>
            </Title>

            <form onSubmit={e => onSubmit(e)}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  name='name'
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  name='password'
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Password"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name='password2'
                  value={values.password2}
                  onChange={handleChange}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder=" Confirm Password"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="text-center mt-6">
                <input

                  className="cursor-pointer bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                  value='Register'
                />


                <div>
                  <label className="inline-flex items-center cursor-pointer">

                    <span className="ml-2 pt-4 text-sm font-semibold text-gray-700">
                      <Link to="/login">
                        already have an account ?
                      </Link>
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </LoginBox>
        </div>
      </section>
    </SplitLogin >
  )
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});





export default connect(mapStateToProps, { register, setAlert })(Register);
