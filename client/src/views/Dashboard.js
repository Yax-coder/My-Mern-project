/* This example requires Tailwind CSS v2.0+ */
import AddEducation from 'components/Add-Education'
import AddExperience from 'components/Add-Experience'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getCurrentProfile } from 'actions/profile'
import { PropTypes } from 'prop-types'
import Spinner from 'components/Spinner'
import { Link } from 'react-router-dom'
import CreateProfile from 'components/Create-profile'
import EditProfile from 'components/Edit-Profile'
import ExperienceTable from 'components/ExperienceTable'
import EducationTable from 'components/EducationTable'
import { DeleteIcon } from 'components/ExperienceTable'
import { deleteAccount } from 'actions/profile'



export const FlexCard = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  position: relative;
`

function Dashboard({ getCurrentProfile, deleteAccount, auth: { user }, profile: { loading, profile } }) {
  const [open, setOpen] = useState(false)
  const [expereince, setExperience] = useState(false)
  const [profileOpen, setProfile] = useState(false)
  const [profileEdit, setProfileEdit] = useState(false)

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);


  return loading && profile === null ? <Spinner /> : <>
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="max-w-7xl mt-5 mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900"><i className="fas fa-user"> </i> Welcome {user && user.name}</h3>
            </div>

            <FlexCard>
              <DeleteIcon style={{
                marginTop: "2rem",
                fontSize: "11px",
                border: "1px solid red",
                padding: "7px",
                borderRadius: "5px"
              }}
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-trash"></i> Delete Account
              </DeleteIcon>
              {profile !== null ? (
                <div onClick={() => setProfileEdit(true)} class="btn p-2 m-2 rounded shadow cursor-pointer hover:bg-gray-100">
                  Edit Profile
                </div>
              ) : (
                <div onClick={() => setProfile(true)} class="btn p-2 m-2 rounded shadow cursor-pointer hover:bg-gray-100">
                  Create Profile
                </div>
              )}
              <div onClick={() => setOpen(true)} class="btn p-2 m-2 rounded shadow cursor-pointer hover:bg-gray-100">
                Add Education
              </div>
              <div onClick={() => setExperience(true)} class="btn p-2 m-2 rounded shadow cursor-pointer hover:bg-gray-100">
                Add Experience
              </div>
              <div>
                {profile !== null ? <div style={{
                  width: "100px"
                }} class="btn p-2 m-2 rounded shadow cursor-pointer hover:bg-gray-100"><Link to={`/user/${user?._id}`}>View Profile</Link></div>
                  : <p className="ml-6 mt-1 max-w-2xl text-sm text-gray-500">You have not create profile yet, please setup your profile.</p>}
              </div>
              {/* <div onClick={() => setExperience(true)} class="btn p-2 m-2 text-white rounded shadow bg-red-500 cursor-pointer hover:bg-red-400 ">
                Delete My Account
              </div> */}

            </FlexCard>
          </div>
          <div className="px-4 py-6 sm:px-0">
            <ExperienceTable profile={profile} />
          </div>
          <div className="px-4 py-6 sm:px-0">
            <EducationTable profile={profile} />
          </div>
          {/* /End replace */}
        </div>
      </main>
      <AddEducation open={open} setOpen={setOpen} />
      <CreateProfile profileOpen={profileOpen} setProfile={setProfile} />
      <AddExperience expereince={expereince} setExperience={setExperience} />
      <EditProfile profileEdit={profileEdit} setProfileEdit={setProfileEdit} />
    </div >
  </>
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})


export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
