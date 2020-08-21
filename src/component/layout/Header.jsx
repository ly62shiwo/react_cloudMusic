import React from "react";
import navMenu from "@/config/navMenus.js";
import "./header.scss";

function Header(props) {
  console.log(props);

  return (
    <div className='nav'>
      <div className='wrap'>
        <h1 className='logo'>
          <a href='/'></a>
        </h1>

        <ul className='navUl'>
          {navMenu.map((item) => {
            return item.target ? (
              <li key={item.key} className='navLi'>
                <a
                  className={
                    props.location.pathname === item.path ? "action" : null
                  }
                  href={item.path}
                  target={item.target}
                >
                  {item.title}
                </a>
              </li>
            ) : (
              <li key={item.key} className='navLi'>
                <a
                  className={
                    props.location.pathname === item.path ? "action" : null
                  }
                  href={item.path}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>


      </div>
    </div>
  );
}

export default Header;
