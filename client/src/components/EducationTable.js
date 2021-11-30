import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { DeleteIcon, LayoutPort } from './ExperienceTable';
import { deleteEducation } from 'actions/profile';
import { connect } from 'react-redux';



const EducationTable = ({ profile, deleteEducation }) => {
     console.log(profile);
     const educations = profile && profile?.education.map(edu => (
          <LayoutPort key={edu._id} >
               <DeleteIcon style={{
                    fontSize: "11px",
                    border: "1px solid red",
                    padding: "7px",
                    borderRadius: "5px"
               }} onClick={() => deleteEducation(edu._id)}>
                    <i className="fas fa-trash"></i> Delete Education
               </DeleteIcon>
               <div className='mb-10 ml-5 mr-2'>
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">

                         <div class="border-t border-gray-200">
                              <dl>
                                   <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                             School
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             <h3>{edu.school}</h3>
                                             <small> <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                                                  edu.to === null ? ('Current') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                                             }</small>
                                        </dd>
                                   </div>

                              </dl>
                         </div>
                         <div class="border-t border-gray-200">
                              <dl>
                                   <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                             Field
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             {edu.fieldofstudy}
                                        </dd>
                                   </div>
                                   <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                             Major
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             {edu.degree}
                                        </dd>
                                   </div>
                                   <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                             Location
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             {edu.location ? edu.location : 'N / A'}
                                        </dd>
                                   </div>
                                   <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                             Description
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             {edu.description ? edu.description : 'N / A'}
                                        </dd>
                                   </div>
                              </dl>
                         </div>
                    </div>
               </div>
          </LayoutPort>
     ))
     return (

          <div>
               <h3 class="text-2xl pt-7 pb-5 ml-5 font-semibold text-gray-800">Education</h3>
               {educations}
          </div>
     )
}

EducationTable.propTypes = {
     profile: PropTypes.object.isRequired,
     deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, { deleteEducation })(EducationTable) 
