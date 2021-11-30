import React, { useState } from 'react'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'Hooks/useForm'
import { connect } from 'react-redux'
import { createProfile } from '../actions/profile'
import { withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types'


function CreateProfile({ profileOpen, setProfile, createProfile, history }) {
     const cancelButtonRef = useRef(null)
     const [showSocials, setShowSocials] = useState(false)
     const [values, handleChange] = useForm({
          company: '',
          website: '',
          location: '',
          status: '',
          skills: '',
          githusername: '',
          bio: '',
          twitter: '',
          facebook: '',
          linkedin: '',
          youtube: '',
          instagram: ''
     });

     const onSubmit = () => {
          createProfile(values, history)
          setProfile(false)
     }
     return (
          <Transition.Root show={profileOpen} as={Fragment}>
               <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setProfile}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                         <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                         >
                              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                         </Transition.Child>

                         {/* This element is to trick the browser into centering the modal contents. */}
                         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                              &#8203;
                         </span>
                         <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              enterTo="opacity-100 translate-y-0 sm:scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         >
                              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                   <div className="mt-2">
                                        <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Create Profile</div>

                                        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl pb-5">
                                             <div className="flex items-center space-x-4">
                                                  <div className="flex flex-col">
                                                       <label className="leading-loose">Company</label>
                                                       <input name='company' value={values.company} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Company Name" />
                                                  </div>
                                                  <div className="flex flex-col">
                                                       <label className="leading-loose">Website</label>
                                                       <input name='website' value={values.website} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="http://yoursite.com" />
                                                  </div>
                                             </div>
                                             <div className="flex items-center space-x-4">
                                                  <div className="flex flex-col">
                                                       <label className="leading-loose">Location</label>
                                                       <input name='location' value={values.location} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="city" />
                                                  </div>
                                                  <div className="flex flex-col">
                                                       <label className="leading-loose">Skills</label>
                                                       <input name='skills' value={values.skills} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="skills list" />
                                                  </div>
                                             </div>
                                             <div className="flex items-center space-x-4">
                                                  <div className="flex flex-col">
                                                       <label className="leading-loose">Profession</label>
                                                       <input name='status' value={values.status} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="software developer" />
                                                  </div>
                                                  <div className="flex flex-col">
                                                       <label className="leading-loose">Github Username</label>
                                                       <input name='githubusername' value={values.githubusername} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="your github username" />
                                                  </div>
                                             </div>
                                             <div class="flex flex-col">
                                                  <label class="leading-loose">Job Description</label>
                                                  <input name='bio' value={values.bio} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Job Description" />
                                             </div>
                                             <p onClick={() => setShowSocials(!showSocials)} className=" cursor-pointer mt-1 max-w-2xl text-sm text-gray-500 ml-1"> Add socials links (optional)</p>
                                             {
                                                  showSocials ? <>
                                                       <div className="flex items-center space-x-4">
                                                            <div className="flex flex-col">
                                                                 <label className="leading-loose">Twitter Link</label>
                                                                 <input name='twitter' value={values.twitter} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="http://twiterlink.com" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                 <label className="leading-loose">linkedin</label>
                                                                 <input name='linkedin' value={values.linkedin} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="http://linkedin.com" />
                                                            </div>
                                                       </div>
                                                       <div className="flex items-center space-x-4">
                                                            <div className="flex flex-col">
                                                                 <label className="leading-loose">youtube</label>
                                                                 <input name='youtube' value={values.youtube} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="http://youtube.com" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                 <label className="leading-loose">Facebook</label>
                                                                 <input name='facebook' value={values.facebook} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="http://facebook.com" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                 <label className="leading-loose">instagram</label>
                                                                 <input name='instagram' value={values.instagram} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="http://instagram.com" />
                                                            </div>
                                                       </div>
                                                  </> : null
                                             }
                                             {/* <!-- buttons --> */}

                                        </div>
                                   </div>
                                   <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse pt-5 mb-10">
                                        <div class="buttons flex">
                                             <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" onClick={() => setProfile(false)}>Cancel</div>
                                             <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" onClick={onSubmit}>Save</div>
                                        </div>
                                   </div>
                              </div>
                         </Transition.Child>
                    </div>
               </Dialog>
          </Transition.Root>
     )
}

CreateProfile.propTypes = {
     createProfile: PropTypes.func.isRequired,
}
export default connect(null, { createProfile })(withRouter(CreateProfile));
