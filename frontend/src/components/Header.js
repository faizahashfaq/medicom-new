import React, { useState } from 'react'
import { Link} from 'react-router-dom'

 const Header = () => {
  let width = window.innerWidth
  let searchBarSize = '50'
  if (width <= 880 && width > 768) {
    searchBarSize = '30'
  } else {
    searchBarSize = '50'
  }
  const [classList, setClassList] = useState({
    navList: 'none',
    searchBar: 'noDisplay',
  })
  const [searchInput, setSearch] = useState("")
  const navToggleHandler = () => {
    if (classList.navList === 'none') {
      setClassList({
        navList: 'resNav',
        searchBar: 'noDisplay',
      })
    } else {
      setClassList({
        navList: 'none',
        searchBar: 'noDisplay',
      })
    }
  }
  const searchBarHandler = () => {
    if (classList.searchBar === 'noDisplay') {
      setClassList({
        navList: 'none',
        searchBar: 'searchBar',
      })
    } else {
      setClassList({
        navList: 'none',
        searchBar: 'noDisplay',
      })
    }
  }
  const cancelBtnHandler = () => {
    setClassList({
      navList: 'navList',
      searchBar: 'noDisplay',
    })
  }
  
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <div className={classList.searchBar}>
        <div className='searchBarLogo'>Medicom</div>
        <div>
          <form className='searchForm'>
            <input
              className='searchInput'
              placeholder='Search'
              type='text'
              onChange={(e)=> setSearch(e.target.value)}
              value={searchInput}
              size={searchBarSize}
            />
            
            <input type="submit" value="Search"/> 
          </form>
        </div>
        <div onClick={cancelBtnHandler} style={{ paddingTop: '1.2rem' }}>
          <button className='cancelBtn'>Cancel</button>
        </div>
      <div className='navHeader'>
        <div>
          <Link className='navLogo' to='/'>
            Medicom
          </Link>
        </div>

        <div>
          <ul className='navList'>
            <li>
              <Link to='/HomePage'>HOME</Link>
            </li>
            <li>
              <Link to='/productpage'>CATEGORY</Link>
            </li>
            <li>
              <Link to='/'>CONTACT</Link>
            </li>
            <li>
              <Link to='/'>ABOUT</Link>
            </li>
          </ul>
        </div>

        <div className='navButtons'>
          {user? <Link to='/login'>
            <button onClick={()=>localStorage.removeItem("user")} className='loginBtn'>Logout</button>
          </Link> :
          <Link to='/login'>
          <button className='loginBtn'>Login</button>
        </Link>}
          <Link to='/cart'>
            <button className='cartIcon'>
              <i className='fa fa-shopping-cart' aria-hidden='true'></i>
            </button>
          </Link>
          <div>
            <button onClick={searchBarHandler} className='searchIcon'>
              <i className='fa fa-search' aria-hidden='true'></i>
            </button>
          </div>
          <div onClick={navToggleHandler}>
            <button className='bars'>
              <i className='fa fa-bars' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
      <ul className={classList.navList}>
        <li className='links'>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/home'>Category</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Header
