import { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../../assets/logo1.png'
import { Link } from 'react-scroll';

const Header: React.FunctionComponent = (): React.ReactElement => {

    const [showNav, setShowNav] = useState<boolean>(false);
    const handleClick = () => setShowNav(!showNav);

    return (
            <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <h1>TSOY DANIL</h1>
            </div>
    
            <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            {/* <li>
                <Link to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li> */}
            <li>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            </ul>
    
            <div onClick={handleClick} className='md:hidden z-10'>
            {!showNav ? <FaBars /> : <FaTimes />}
            </div>
    
            <ul
            className={
                !showNav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }
            >
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            {/* <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li> */}
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            </ul>
    
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/danil-tsoy-2b0a3926a/'
                    target="_blank"
                >
                    Linkedin <FaLinkedin size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/TsoyDanil?tab=repositories'
                    target="_blank"
                >
                    Github <FaGithub size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3a9d87]'>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://myresume.ru/resume/S9sBF6pkWg3/'
                    target="_blank"
                >
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Header