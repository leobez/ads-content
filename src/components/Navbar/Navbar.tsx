import CNavLink from './CNavLink'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex justify-center px-1 gap-1 font-bold'>

                <li className='menu-icon'>
                    <CNavLink path='/' text='Application'/>
                </li>

                <li className='menu-icon'>
                    <CNavLink path='/about' text='About'/>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar