import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navMenus, navMenusTwo } from "@/config/navMenus.js";
import "./header.scss";

function Header(props) {
  // console.log(props, "header");
  const [select, setSelect] = useState("discover");

  useEffect(() => {
    if (props.location.pathname === "/download") {
      return setSelect("download");
    } else if (props.location.pathname === "/discover") {
      return setSelect("discover");
    }
  }, [props.location.pathname]);

  return (
    <div className='all'>
      {/* nav导航 */}
      <div className='nav'>
        <div className='wrap'>
          <Link to='/'>
            <h1 className='logo'>logo</h1>
          </Link>
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
                    // target="_blank"
                  >
                    {item.title}
                  </Link>
                  <span
                    className={select === item.key ? "sanjiao" : null}
                  ></span>
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
                  {item.title === "下载客户端" ? (
                    <span className='hotIcon'></span>
                  ) : null}
                  <div className={select === item.key ? "sanjiao" : null}></div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 页面导航 */}
        {select === "discover" ? (
          <div className='navBar'>
            <div className='wrap'>
              <ul className='navUlTwo'>
                {navMenusTwo.map((item) => {
                  return (
                    <li key={item.key} className='navLiTwo'>
                      <Link
                        className={
                          props.location.pathname === item.path ? "actionTwo"   : null
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
          </div>
        ) : (
          <div className='navBarString'></div>
        )}
      </div>
    </div>
  );
}

export default Header;
