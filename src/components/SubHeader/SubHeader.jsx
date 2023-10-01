import React from 'react'
import './SubHeader.css'

function SubHeader(props) {
  const { title, body } = props
  return (
    <>
      <div className="subheader flexColCenter" data-aos="fade-down" data-aos-duration="2000">
        <span>{title}</span>
        <p>{body}</p>
      </div>
    </>
  )
}
SubHeader.defaultProps = {
  title: 'My title here',
  body: 'my body here my body heremy body heremy body here my body heremy body here'
}
export default SubHeader