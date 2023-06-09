import React from 'react'
import './header.css'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/IMG_1099.JPG'
import HeaderSocials from './HeaderSocials' //import of headerSocial component
export const Header = () => {
return (
<header id='header'>
<div className='container header__container'>
<h5>Hello I'm</h5>
<h1> Mbi Ayamba Dianna </h1>
<h5 className='text-light'>Software Engineer </h5>
<CTA/>
{/* //here we are using the imported CTA component */}
<HeaderSocials/>
{/* //same here */}
<div className='my_image'>
<img src={me} alt='my image'/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;

