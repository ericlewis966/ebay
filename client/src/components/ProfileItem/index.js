import React from 'react'
import { Divider } from 'antd'

const ProfileItem = (props) => {
    return (
        <div className='profile-item flex col'>
            <div className='profile-name flex'>
                {props.name}
            </div>
            <Divider />
            <div className='profile-link flex'>
                <a href={props.href}>
                    {props.link}
                </a>
            </div>
            <Divider />
            <div className='profile-feedback flex'>
                {props.feedback}
            </div>
        </div>
    )
}

export default ProfileItem