import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navMenus, navMenusTwo } from "@/config/navMenus.js";
import "./header.scss";

function Header(props) {
  console.log(props);
  const [select, setSelect] = useState("discover");

  useEffect(() => {
    if(props.location.pathname === '/download') {
      return setSelect('download')
    }
  });

  return (
    <div>
      {/* nav导航 */}
      <div className='nav'>
        <div className='wrap'>
          <h1 className='logo'>
            <Link to='/'></Link>
          </h1>
          <ul className='navUl'>
            {navMenus.map((item) => {
              return item.target ? (
                <li
                  key={item.key}
                  className='navLi'
                  onClick={() => {
                    setSelect(item.key);
                  }}
                >
                  <Link
                    className={select === item.key ? "action" : null}
                    to={item.path}
                    // target={item.target}
                  >
                    {item.title}
                  </Link>
                  <span className={select === item.key ? "sanjiao" : null}></span>
                </li>
              ) : (
                <li
                  key={item.key}
                  className='navLi'
                  onClick={() => {
                    setSelect(item.key);
                  }}
                >
                  <Link
                    className={select === item.key ? "action" : null}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                  <div className={select === item.key ? "sanjiao" : null}></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {select === "discover"  ? (
        <div className='navBar'>
          <ul className='navUl wrap'>
            {navMenusTwo.map((item) => {
              return (
                <li key={item.key} className='navLi'>
                  <Link
                    className={
                      props.location.pathname === item.path ? "actionTwo" : null
                    }
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className='navBarString'></div>
      )}
    </div>
  );
}

export default Header;
