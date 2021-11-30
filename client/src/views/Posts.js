import Modal from 'components/Modal'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types';
import { getPosts, addLike, removeLike, deletePost, deleteComment } from 'actions/post'
import Spinner from 'components/Spinner'

import Avatar from 'react-avatar';
import moment from 'moment'
import { DeleteIcon } from 'components/ExperienceTable'
import CommentForm from 'components/CommentForm'

const LayoutPort = styled.div`

  /* display: flex; */
  /* grid-template-columns: 1fr 1fr; */
  padding: 20px;
  margin-top: 4rem;
  /* justify-content: center; */
  /* margin:auto; */
  margin-left:20%;
  margin-right:20%;
  overflow-x: hidden ;
`

const Posts = ({
     getPosts,
     post: { loading, posts },
     auth,
     addLike,
     removeLike,
     deletePost,
     deleteComment
}) => {

     useEffect(() => {
          getPosts();
     }, [getPosts])
     const [open, setOpen] = useState(false)
     const [comment, setComment] = useState(false)
     const [showComments, setShowComments] = useState(false)
     const [postID, setPostID] = useState('')

     if (loading) {
          return (
               <Spinner />
          )
     }

     if (!loading && posts !== null) {
          return (
               <>
                    <LayoutPort style={{
                         overflowX: "hidden",
                    }}>


                         <div>
                              <div style={{
                                   marginLeft: ".8rem",
                                   width: '200px'
                              }}>
                                   <div style={{
                                        width: '510px'
                                   }} className="each flex rounded shadow  text-gray-600 mb-5 bg-white px-4 py-3">
                                        <div className="sec self-center p-2 pr-1">
                                             <Avatar
                                                  round={true}
                                                  name={auth?.user?.name}
                                                  size={45}
                                                  googleId={auth?.user?.name}
                                                  className="img-circle mt10 h-12 w-12 rounded-full"
                                             />
                                        </div>
                                        <div className="sec self-center p-2 ">
                                             <div className="flex">
                                                  <div className="name text-sm">{auth?.user?.name}</div>
                                                  {/* <div className="role font-normal text-xxs text-blue-600 self-center px-1 w-max rounded">(Admin)</div> */}
                                             </div>
                                        </div>
                                        <div className="sec ml-20 p-2 w-2/8">
                                             <div className="buttons text-xs  font-light">
                                                  <div onClick={() => setOpen(true)} className="btn p-2 rounded shadow cursor-pointer hover:bg-gray-100">
                                                       Add new post  <i className="fas fa-plus-circle"></i>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {posts.map(post => (
                                   <div key={post?._id} className=" p-3 flex items-center w-screen ">
                                        <div className="bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg">
                                             <div className="flex items-center" style={{
                                                  position: "relative"
                                             }}>

                                                  <Avatar
                                                       round={true}
                                                       name={post?.name}
                                                       size={45}
                                                       googleId={post?.user}
                                                       className="img-circle mt10 h-12 w-12 rounded-full"
                                                  />
                                                  <div className="ml-2">
                                                       <div className="text-sm ">
                                                            <span className="font-semibold">{post?.name}</span>
                                                       </div>
                                                       {/* <div className="text-gray-500 text-xs ">Software Engineer at Tesla, Inc</div> */}
                                                       <div className="text-gray-500 text-xs flex">
                                                            <span className="inline-block">{moment(`${post?.date}`).format('MMMM Do YYYY, h:mm:ss a')} • </span>
                                                            <svg className="inline-block ml-1 fill-current mercado-match" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                                                 <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                                            </svg>
                                                       </div>
                                                  </div>
                                                  {!auth?.loading && post?.user === auth?.user?._id && (
                                                       <DeleteIcon style={{
                                                            fontSize: "14px",
                                                            padding: "5px",
                                                            borderRadius: "5px",
                                                            marginTop: "-1rem",
                                                            marginRight: "-2rem"
                                                       }}
                                                            onClick={() => deletePost(post?._id)}
                                                       >
                                                            <i className="fas fa-trash"></i>
                                                       </DeleteIcon>
                                                  )}
                                             </div>
                                             <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">{post?.text}</p>
                                             <div className="text-gray-500 border-b border-grey-lighter text-xs flex items-center mt-3">
                                                  <footer className="border-t border-grey-lighter text-sm flex">
                                                       <a onClick={() => addLike(post._id)} href="#!" className="block no-underline text-blue flex px-1 py-2 items-center hover:bg-grey-lighter">
                                                            <i style={{
                                                                 fontSize: "12px"
                                                            }} className="far fa-thumbs-up"></i>
                                                            <span style={{
                                                                 fontSize: "10px"
                                                            }} className="ml-1">{post?.likes?.length}</span>
                                                       </a>
                                                       <a href="#!" onClick={() => removeLike(post._id)} className="block no-underline text-blue flex px-1 py-2 items-center hover:bg-grey-lighter">
                                                            <i style={{
                                                                 fontSize: "12px"
                                                            }} className="far fa-thumbs-down"></i>
                                                            <span style={{
                                                                 fontSize: "10px"
                                                            }} className="ml-1"></span>
                                                       </a>

                                                  </footer>
                                                  <span className="ml-1">comments • {post?.comments?.length} </span>
                                                  {post?.comments?.length > 0 && (<div>
                                                       <div onClick={() => setShowComments(!showComments)} className="flex justify-between items-center ml-2">
                                                            <p className="text-blue-600 hover:underline" to="">{!showComments ? ('view comments') : ' hide comments'}</p>
                                                       </div>
                                                  </div>)}
                                             </div>

                                             {post?.comments?.length > 0 && showComments && (<div>
                                                  {post?.comments.map(comment => (
                                                       <div cursor-pointer bg-gray-200 className="flex pt-4 px-4" style={{
                                                            position: "relative"
                                                       }}>
                                                            <div className="w-16 mr-2">
                                                                 <Avatar
                                                                      round={true}
                                                                      name={comment?.name}
                                                                      size={45}
                                                                      googleId={comment?.user}
                                                                      className="img-circle mt10 h-12 w-12 rounded-full"
                                                                 />
                                                            </div>

                                                            <div className="px-2 pt-2 flex-grow">
                                                                 {!auth?.loading && comment?.user === auth?.user?._id && (
                                                                      <DeleteIcon style={{
                                                                           fontSize: "14px",
                                                                           padding: "5px",
                                                                           borderRadius: "5px",
                                                                           marginTop: "1rem",
                                                                           // marginRight: "-2rem"
                                                                      }}
                                                                           onClick={() => deleteComment(post._id, comment._id)}
                                                                      >
                                                                           <i className="fas fa-trash"></i>
                                                                      </DeleteIcon>)}
                                                                 <header>
                                                                      <a href="#!" className="text-black no-underline">
                                                                           <span className="font-medium">{comment?.name}</span>
                                                                      </a>
                                                                      <div className="text-xs text-grey flex items-center my-1">
                                                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                                                className="h-4 w-4 mr-1 feather feather-calendar">
                                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                           </svg>
                                                                           <span><span className="inline-block">{moment(`${Comment?.date}`).format('MMMM Do YYYY, h:mm:ss a')} • </span></span>
                                                                      </div>

                                                                 </header>
                                                                 <article className="py-4 text-grey-darkest">
                                                                      {comment?.text}
                                                                 </article>


                                                            </div>
                                                       </div>
                                                  ))}
                                             </div>)}

                                             <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                                                  <div className="w-16 mr-2">
                                                       <Avatar
                                                            round={true}
                                                            name={auth?.user?.name}
                                                            size={45}
                                                            className="img-circle mt10 h-12 w-12 rounded-full"
                                                       />
                                                  </div>
                                                  <div onClick={() => {
                                                       setComment(true);
                                                       setPostID(post._id)
                                                  }}>
                                                       <input
                                                            disabled

                                                            style={{
                                                                 borderRadius: "25px"
                                                            }} type="search" className="w-full py-2 
                                                       cursor-pointer 
                                                       pl-4 pr-10 
                                                 text-sm bg-gray-100 border border-transparent
                                                  appearance-none rounded-tg placeholder-gray-400
                                                   focus:bg-white focus:outline-none focus:border-blue-500
                                                    focus:text-gray-900 focus:shadow-outline-blue"
                                                            placeholder="Post a comment..." autocomplete="off" />
                                                  </div>
                                             </div>

                                        </div>
                                   </div>
                              ))}



                         </div>
                         <Modal open={open} setOpen={setOpen} />
                         <CommentForm getPosts={getPosts} comment={comment} setComment={setComment} postID={postID} />
                    </LayoutPort >
               </>
          )
     }


}

Posts.propTypes = {
     post: PropTypes.object.isRequired,
     getPosts: PropTypes.func.isRequired,
     auth: PropTypes.object.isRequired,
     addLike: PropTypes.func.isRequired,
     removeLike: PropTypes.func.isRequired,
     deletePost: PropTypes.func.isRequired,
     deleteComment: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
     post: state.post,
     auth: state.auth
})

export default connect(mapStateToProps, { getPosts, addLike, removeLike, deletePost, deleteComment })(Posts)
