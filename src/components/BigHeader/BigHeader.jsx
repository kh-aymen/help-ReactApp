import React, { useState } from 'react'
import './BigHeader.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material'
function BigHeader(props) {
    const { title } = props
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
            <section className='section BigHeader-section' >
                <Header />
                <div className="BigHeader-section-content">
                    <h1>{title}</h1>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li>/</li>
                        <li><p
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onMouseEnter={handleClick}

                        >Pages</p>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{ mt: '.5rem' }}
                            >
                                <MenuItem onClick={handleClose}><Link to={'/servece'}>Service</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to={'/Donate'}>Donate</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to={'/OurTeam'}>Our Team</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to={'/Testimonail'}>Testimonail</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to={'/ErrorPage'}>ErrorPage</Link></MenuItem>
                            </Menu>
                        </li>
                        <li>/</li>
                        <li><Link>{title}</Link></li>
                    </ul>
                </div>
            </section>
        </>
    )
}
BigHeader.defaultProps = {
    title: 'My title here'
}

export default BigHeader