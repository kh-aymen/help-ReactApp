import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button } from '@mui/material'
import { ArrowCircleRight } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'



function Header() {
  const theme = useTheme()
  const mobileBreakponit = useMediaQuery(theme.breakpoints.down('md'))

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [btnopen, setBtnopen] = useState(false)

  const handleClickicon = () => {
    setBtnopen(!btnopen)
  }


  const [scroll, setScroll] = useState('')

  window.onscroll = () => {
    let scrollvalue = window.scrollY
    scrollvalue > 40 ? setScroll('darkbg') : setScroll('transparentbg')
  }

  return (
    <>
      <section className={`section header-section ${scroll}`}>
        <div className="header-section-container">
          <div className="header-section-container-logo">
            <span><span>Chari</span>Team</span>
          </div>
          <div className="header-section-container-navbar">
            {mobileBreakponit ?
              btnopen ? <CloseIcon onClick={handleClickicon} className='menuicon' fontSize='large' /> : <MenuIcon onClick={handleClickicon} className='menuicon' fontSize='large' />
              :
              <ul className='desktopView'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/Causes'}>Causes</Link></li>
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
                    sx={{ mt: '1rem'}}
                  >
                    <MenuItem onClick={handleClose}><Link to={'/Service'}>Service</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={'/Donate'}>Donate</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={'/OurTeam'}>Our Team</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={'/Testimonial'}>Testimonail</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={'/ErrorPage'}>ErrorPage</Link></MenuItem>
                  </Menu>

                </li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Button className='button-white'>Donate Now <ArrowCircleRight /></Button></li>
              </ul>
            }
          </div>
        </div>
        {
          btnopen ? 
          
          <ul className='mobileView' >
            <li><Link to={'/'} onClick={handleClickicon}>Home</Link></li>
            <li><Link to={'/about'} onClick={handleClickicon}>About</Link></li>
            <li><Link to={'/Causes'} onClick={handleClickicon}>Causes</Link></li>
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
                <MenuItem onClick={handleClose}><Link to={'/Service'}>Service</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={'/Donate'}>Donate</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={'/OurTeam'}>Our Team</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={'/Testimonial'}>Testimonail</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={'/ErrorPage'}>ErrorPage</Link></MenuItem>
              </Menu>
            </li>
            <li><Link to={'/contact'} onClick={handleClickicon}>Contact</Link></li>
            <li><Button className='button-white' onClick={handleClickicon}>Donate Now <ArrowCircleRight /></Button></li>
          </ul>
            : ''
        }
      </section>
    </>
  )
}


export default Header


