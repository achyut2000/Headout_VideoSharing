import React from 'react';
import '../css/navbar.css';

const Filler = () => {
    return <div className="filler-element"></div>
  }
  
  const NavFull = ({
    homeLink,
    pagesLinks
  }) => {
  
    const {
      homeText,
      homeHref
    } = homeLink
  
    const links = pagesLinks.map(({
      text,
      href
    }) => {
      return (
        <div className="nav__item--full">
          <a key={text} href={href} className="nav__link pages__link--full">{text}</a>
        </div>
      )
    })
  
    return (
      <nav className="nav--full">
        <div className="nav__home--full">
          <div className="nav__item">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28.5" stroke="url(#paint0_linear)" stroke-width="3"/>
                <path d="M9.5 26C10 42.5 34.5 22.5001 28 47.0001C21.5 71.5001 79 3.50008 22.5 15.0001" stroke="url(#paint1_linear)" stroke-width="3"/>
                <defs>
                <linearGradient id="paint0_linear" x1="30" y1="0" x2="30" y2="60" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1762A7"/>
                <stop offset="1" stop-color="#BC3A80"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="28.5468" y1="13.6782" x2="28.5468" y2="52.3661" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1762A7"/>
                <stop offset="1" stop-color="#BC3A80"/>
                </linearGradient>
                </defs>
                </svg>
            <a href={homeHref} className="nav__link home__link" style={{padding:"10px"}}>{homeText}</a>
          </div>
        </div>
        <div className="nav__pages--full">{links}</div>
      </nav>
    )
  }
  
  class NavCollapsed extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = ({
        menuOpen: false
      })
  
      this.toggleMenu = this.toggleMenu.bind(this)
  
    }
  
    // toggles the menuOpen variable. When the state updates, the whole element is rerendered. 
    toggleMenu() {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    }
  
    render() {
  
      const {
        homeText,
        homeHref
      } = this.props.homeLink
      
      const links = this.props.pagesLinks.map(({
        text,
        href
      }) => {
        return (
          <div className="nav__item--collapsed">
            <a key={text} href={href} className="nav__link pages__link--collapsed">{text}</a>
          </div>
        )
      })
  
      return (
        <nav className="nav--collapsed">
          <div className="nav__home--collapsed">
            <div className="menu-icon" onClick={this.toggleMenu}>
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
            </div>
            
            {
              !this.state.menuOpen && 
              <div className="collapsed__display">
                <a className="nav__link collapsed__brand" href={homeHref}>{homeText}</a>
              </div>
            }
            
            {
              this.state.menuOpen && 
              <div className="collapsed__display">{links}</div>
            }
            
          </div>
        </nav>
      )
    }
  }
  
 export class NavBar extends React.Component {
  
    constructor(props) {
      super(props)
  
      this.state = {
        navBarType: null,
        homeLink: {
          homeText: 'ShareVeo',
          homeHref: '#'
        },
        pagesLinks: [{
          text: 'EXPLORE',
          href: "#"
        }, {
          text: 'JOIN',
          href: "#"
        }]
      }
      
      this.handleWindowResize = this.handleWindowResize.bind(this)
      
    }
  
    handleWindowResize() {
      if (window.innerWidth < 500) {
        this.setState({navBarType: 'collapsed'})
      } else {
        this.setState({navBarType: 'full'})
      }
    }
    
    componentDidMount() {
      this.handleWindowResize()
      window.addEventListener('resize', this.handleWindowResize)
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize)
    }
  
    render() {
      
      if (this.state.navBarType === 'collapsed') {
        return (
          <nav>
            <NavCollapsed homeLink={this.state.homeLink} pagesLinks={this.state.pagesLinks} />
          </nav>
        )
      } else {
        return (
          <nav>
            <NavFull homeLink={this.state.homeLink} pagesLinks={this.state.pagesLinks} />
          </nav>
        )
      }
      
    }
  }