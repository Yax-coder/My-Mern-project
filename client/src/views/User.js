import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { getProfileById, } from 'actions/profile'
import Spinner from 'components/Spinner'
import { FlexCard } from './Dashboard'
import Avatar from 'react-avatar';
import EducationTable from 'components/EducationTable'
import ExperienceTable from 'components/ExperienceTable'


const LayoutPort = styled.div`

  display: grid;
  grid-template-columns:  1fr;
  padding-left: 100px;
  padding-right: 100px;
`
const GitHub = styled.div`
    margin: auto;
     /* background-color: #ccc; */
`

const User = ({ getProfileById, repos, profile: { profile, loading }, auth, match }) => {
     useEffect(() => {
          getProfileById(match.params.id)
     }, [getProfileById, match])

     // console.log(,'');



     return (
          loading ? (<Spinner />) : (<div>
               <main className="font-sans bg-white">
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                         <FlexCard style={{
                              cursor: "pointer"
                         }}>

                              <div>
                                   <div className="btn p-2 m-2 rounded shadow cursor-pointer bg-gray-200 hover:bg-gray-100">
                                        <i className="fas fa-chevron-left"></i> <Link to='/developers'>Back</Link>
                                   </div>
                              </div>
                              <div>
                                   {auth?.isAuthenticated && auth?.loading === false && auth?.user?._id === profile?.user?._id ? <div style={{
                                        width: "100px"
                                   }} className="btn p-2 m-2 rounded shadow cursor-pointer hover:bg-gray-100">Edit Profile</div>
                                        : ""}
                              </div>
                              {/* <div onClick={() => setExperience(true)} className="btn p-2 m-2 text-white rounded shadow bg-red-500 cursor-pointer hover:bg-red-400 ">
                Delete My Account
              </div> */}

                         </FlexCard>
                    </div>
                    <div>
                         <section className="bg-white mt-5">
                              <div className="max-w-2xl mb-5 rounded shadow  bg-gray-100 p-5 px-6 text-center mx-auto">
                                   <div className="flex items-end justify-center mt-16">
                                        {profile?.githubusername !== '' ? (
                                             <Avatar
                                                  round={true}
                                                  name={profile?.user?.name}
                                                  githubHandle={profile?.githubusername}
                                                  size={120}
                                                  className="img-circle mt10"
                                             />
                                        ) : (
                                             <div className="mb-8">
                                                  <Avatar
                                                       round={true}
                                                       name={profile?.user?.name}
                                                       size={120}
                                                       className="img-circle mt10"
                                                  />
                                             </div>
                                        )}
                                   </div>
                                   <div className=' mt-10'>
                                        <h2 className="text-3xl font-semibold text-gray-800"> {profile?.user?.name}</h2>
                                        <h4 className="text-1xl font-semibold text-gray-800"> {profile?.status}</h4>
                                        <p style={{
                                             cursor: "pointer",
                                             fontSize: "12px"
                                        }}><i className="fas fa-map-marker-alt"></i> {profile?.location}</p>
                                        <p className="text-gray-600 mt-4">{profile?.bio}</p>
                                   </div>
                                   <div className="flex justify-center ">
                                        {profile?.skills?.map((skill, idx) => (
                                             <div style={{
                                                  fontSize: "22px",
                                                  padding: '5px'
                                             }} key={idx}><i s className="fas fa-check"></i> {skill}</div>
                                        ))}
                                   </div>
                              </div>
                              <div className="flex justify-center py-2 lg:pt-1 pt-2">
                                   <div className="mr-4 p-3 text-center">
                                        {profile?.social?.twitter ?
                                             <a rel="noreferrer" target="_blank" href={`${profile?.social.twitter}`}>
                                                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                       <i className="fab fa-twitter"></i>
                                                  </span>
                                                  <span className="text-sm text-gray-500">Twitter</span>
                                             </a> : null}
                                   </div>
                                   <div className="mr-4 p-3 text-center">
                                        {profile?.social?.facebook ? <a rel="noreferrer" target="_blank" href={`${profile?.social.facebook}`}>
                                             <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                  <i className="fab fa-facebook"></i>
                                             </span>
                                             <span className="text-sm text-gray-500">Facebook</span>
                                        </a> : null}
                                   </div>
                                   <div className="lg:mr-4 p-3 text-center">
                                        {profile?.social?.youtube ? <a rel="noreferrer" target="_blank" href={`${profile?.social.youtube}`}>
                                             <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                  <i className="fab fa-youtube"></i>
                                             </span>
                                             <span className="text-sm text-gray-500">Youtube</span>
                                        </a> : null}

                                   </div>
                                   <div className="lg:mr-4 p-3 text-center">
                                        {profile?.social?.linkedin ? <a rel="noreferrer" target="_blank" href={`${profile?.social.linkedin}`}>
                                             <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                  <i className="fab fa-youtube"></i>
                                             </span>
                                             <span className="text-sm text-gray-500">linkedin</span>
                                        </a> : null}

                                   </div>
                                   <div className="lg:mr-4 p-3 text-center">
                                        {profile?.social?.instagram ? <a rel="noreferrer" target="_blank" href={`${profile?.social.instagram}`}>
                                             <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                  <i className="fab fa-youtube"></i>
                                             </span>
                                             <span className="text-sm text-gray-500">Instagram</span>
                                        </a> : null}

                                   </div>

                              </div>
                         </section>

                         <LayoutPort className="bg-white py-1">
                              <div>
                                   <div style={{
                                        textAling: "center",
                                        borderBottom: "1px  red solid ",
                                        textAlign: "center",

                                   }}><p style={{
                                        fontSize: "1rem",
                                        textTransform: "uppercase"

                                   }}></p> </div>
                                   <EducationTable profile={profile} />
                                   <ExperienceTable profile={profile} />
                              </div>

                         </LayoutPort>
                         <GitHub style={{
                              padding: "40px",
                              paddingLeft: "110px",
                              paddingRight: "110px"
                         }}>
                              {profile?.githubusername ? (<div className="bg-white shadow overflow-hidden sm:rounded-md">
                                   <div>
                                        <h2 className="text-2xl pt-7 ml-5 font-semibold text-gray-800">Github Repos</h2>
                                   </div>
                                   <ul className="divide-y divide-gray-200">
                                        <li>
                                             <Link className="block hover:bg-gray-50" >
                                                  <div className="px-4 py-4 sm:px-6">
                                                       <div className="flex items-center justify-between">
                                                            <p className="text-sm font-thin text-gray-700 truncate">
                                                                 Increase sales by 10% year over year
                                                            </p>
                                                            <div className="ml-2 flex-shrink-0 flex">
                                                                 <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                      Stars: 44
                                                                 </p>
                                                                 <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                                                                      <time datetime="2020-01-07">Watchers: 21</time>
                                                                 </p>
                                                                 <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                                                                      <time datetime="2020-01-07">Forks: 25</time>
                                                                 </p>
                                                            </div>
                                                       </div>
                                                       <div className="mt-2 sm:flex sm:justify-between">
                                                            <div className="sm:flex">
                                                                 <p className="flex items-center text-sm font-light text-gray-500">
                                                                      <time datetime="2020-01-07">January 7, 2020</time>
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </Link>
                                        </li>



                                   </ul>
                                   <button type="button" className="inline-flex items-center m-4 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        View All
                                   </button>
                              </div>) : ""}
                         </GitHub>

                         <div className="max-w-5xl px-6 mx-auto text-center">
                              <h2 className="text-2xl font-semibold text-gray-800">Recent Created Posts</h2>

                              <div className="flex flex-col items-center justify-center mt-6">
                                   <a className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/s#">
                                        <div className="flex items-center justify-between px-4 py-2">
                                             <h3 className="text-lg font-medium text-gray-700">Easy, Free Laravel CI Using GitHub Actions</h3>
                                             <span className="block text-gray-600 font-light text-sm">20 Jan 2020</span>
                                        </div>
                                   </a>

                                   <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/s#">
                                        <div className="flex items-center justify-between px-4 py-2">
                                             <h3 className="text-lg font-medium text-gray-700">Pest: a delightful PHP Testing Framework</h3>
                                             <span className="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                                        </div>
                                   </a>

                                   <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/s#">
                                        <div className="flex items-center justify-between px-4 py-2">
                                             <h3 className="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                                             <span className="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                                        </div>
                                   </a>

                                   <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/s#">
                                        <div className="flex items-center justify-between px-4 py-2">
                                             <h3 className="text-lg font-medium text-gray-700">Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                                             <span className="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                                        </div>
                                   </a>
                              </div>

                              <div className="flex items-center justify-center mt-12">
                                   <a className="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="/s#">
                                        <span>View More</span>

                                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                   </a>
                              </div>
                         </div>



                    </div>
               </main >
          </div >)


     )
}

User.propTypes = {
     getProfileById: PropTypes.func.isRequired,
     profile: PropTypes.object.isRequired,
     auth: PropTypes.object.isRequired,
     repos: PropTypes.array.isRequired,
}


const mapStateToProps = state => ({
     profile: state.profile,
     auth: state.auth,
     repos: state.profile.repos
})

export default connect(mapStateToProps, { getProfileById, })(User)
