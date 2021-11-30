import PropTypes from 'prop-types'
import Moment from 'react-moment'
import styled from 'styled-components'
import { deleteExperience } from 'actions/profile';
import { connect } from 'react-redux';

export const LayoutPort = styled.div`
     position: relative;
`
export const DeleteIcon = styled.div`
     position: absolute;
     top: 1rem;
     right: 2rem;
     color: red;
     cursor: pointer;
`

const ExperienceTable = ({ profile, deleteExperience }) => {
     const experiences = profile && profile?.experience.map(exp => (
          <LayoutPort key={exp._id} >
               <DeleteIcon style={{
                    fontSize: "11px",
                    border: "1px solid red",
                    padding: "7px",
                    borderRadius: "5px"
               }} onClick={() => deleteExperience(exp._id)}>
                    <i className="fas fa-trash"></i> Delete Experience
               </DeleteIcon>
               <div className='mb-10 ml-5 mr-2'>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">

                         <div className="border-t border-gray-200">
                              <dl>
                                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                             Company
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             <h3>{exp.company}</h3>
                                             <small> <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                                                  exp.to === null ? ('Current') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                                             }</small>
                                        </dd>
                                   </div>

                              </dl>
                         </div>
                         <div className="border-t border-gray-200">
                              <dl>
                                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                             Position
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             {exp.title}
                                        </dd>
                                   </div>
                                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                             Location
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             {exp.location ? exp.location : 'N / A'}
                                        </dd>
                                   </div>
                                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                             Description
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                             {exp.description ? exp.description : 'N / A'}
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
               <h3 class="text-2xl pt-7 pb-5 ml-5 font-semibold text-gray-800">Experience</h3>
               {experiences}
          </div>
     )
}

ExperienceTable.propTypes = {
     profile: PropTypes.object.isRequired,
     deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(ExperienceTable)
