import React, { useState } from 'react'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'Hooks/useForm';
import { addExperience } from 'actions/profile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types';

function AddExperience({ expereince, setExperience, history, addExperience }) {
     const cancelButtonRef = useRef(null)
     const [toggleDisabled, setToggleDisabled] = useState(false)
     const [values, handleChange] = useForm({
          company: '',
          title: '',
          location: '',
          from: '',
          to: '',
          description: ''
     });
     const onSubmit = () => {
          const data = {
               ...values,
               current: toggleDisabled
          }
          addExperience(data, history)
          setExperience(false)
     }

     return (
          <Transition.Root show={expereince} as={Fragment}>
               <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setExperience}>
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
                                        <div class="heading text-center font-bold text-2xl m-5 text-gray-800">Add Experience</div>

                                        <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl pb-5">
                                             <div class="divide-y divide-gray-200">
                                                  <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                       <div class="flex flex-col">
                                                            <label class="leading-loose">Job Title</label>
                                                            <input name='title' value={values.title} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Job Title" />
                                                       </div>
                                                       <div class="flex flex-col">
                                                            <label class="leading-loose">Company</label>
                                                            <input name='company' value={values.company} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Company Name" />
                                                       </div>
                                                       <div class="flex flex-col">
                                                            <label class="leading-loose">Location</label>
                                                            <input name='location' value={values.location} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Company Name" />
                                                       </div>
                                                       <div class="flex items-center space-x-4">
                                                            <div class="flex flex-col">
                                                                 <label class="leading-loose">Start</label>
                                                                 <div class="relative focus-within:text-gray-600 text-gray-400">
                                                                      <input name='from' value={values.from} onChange={handleChange} type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020" />
                                                                      <div class="absolute left-3 top-2">
                                                                           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div class="flex flex-col">
                                                                 <label class="leading-loose">End</label>
                                                                 <div class="relative focus-within:text-gray-600 text-gray-400">
                                                                      <input disabled={toggleDisabled} name='to' value={values.to} onChange={handleChange} type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020" />
                                                                      <div class="absolute left-3 top-2">
                                                                           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="flex items-center">
                                                            <input
                                                                 id="remember-me"
                                                                 checked={toggleDisabled}

                                                                 name="current"
                                                                 // value={toggleDisabled ? values.current = true : false}
                                                                 onChange={() => setToggleDisabled(!toggleDisabled)}
                                                                 type="checkbox"
                                                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                            />
                                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                                 I currently work there.
                                                            </label>
                                                       </div>
                                                       <div class="flex flex-col">
                                                            <label class="leading-loose">Job Description</label>
                                                            <input name='description' value={values.description} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Job Description" />
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* <!-- buttons --> */}

                                        </div>
                                   </div>
                                   <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse pt-5 mb-10">
                                        <div class="buttons flex">
                                             <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" onClick={() => setExperience(false)}>Cancel</div>
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



addExperience.propTypes = {
     addExperience: PropTypes.func.isRequired,
}
export default connect(null, { addExperience })(withRouter(AddExperience));
