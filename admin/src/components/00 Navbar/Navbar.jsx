import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiUserPin, BiSearch } from 'react-icons/bi'
import { RiSettings4Line } from "react-icons/ri";
import { FaRegUserCircle, FaBars } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import './Navbar.css'
import { NavLink } from 'react-router-dom'


const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <BiHome />,
  },
  {
    path: "/drives",
    name: "Drives",
    icon: <BiTask />,
  },
  {
    path: "/courses",
    name: "Courses",
    icon: <BiBookAlt />,
  },
  {
    path: "/questionbank",
    name: "Contents",
    icon: <BiHome />,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <HiOutlineDocumentReport />,
  },
  {
    path: "/analysis",
    name: "Analysis",
    icon: <BiStats />,
  },
  {
    path: "/updates",
    name: "Updates",
    icon: <BiMessage />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <RiSettings4Line />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaRegUserCircle />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <BiUserPin />,
  },
];


export default function Navbar({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    }
  }

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    }
  }

  return (
    <>
      <div className="main_container">
        <motion.div animate={{
          width: isOpen ? "200px" : "45px", transition: {
            duration: 0.2,
            type: "spring",
            damping: 10,
          }
        }} className='sidebar'>
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1 className='logo' variants={showAnimation} initial="hidden" animate="show" exit="hidden">
                  CSE SCT
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <input placeholder='Search'/>
          </div> */}

          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="link" activeClassName="active">
                <div className="icon">
                  {route.icon}
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div className="link_text" variants={showAnimation} initial="hidden" animate="show" exit="hidden">
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main>
          {children}
        </main>
      </div >
    </>
  )
}