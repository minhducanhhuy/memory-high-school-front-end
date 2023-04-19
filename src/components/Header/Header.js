import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  requestIdleCallback(function () {
    const url = window.location.href;
    if (url.includes('Members')) {
      $('.header-nav_item.active').classList.remove('active');
      $('.header-nav_item.Members').classList.add('active');
    } else if (url.includes('Album')) {
      $('.header-nav_item.active').classList.remove('active');
      $('.header-nav_item.Album').classList.add('active');
    } else if (url.includes('LastDay')) {
      $('.header-nav_item.active').classList.remove('active');
      $('.header-nav_item.LastDay').classList.add('active');
    } else {
      $('.header-nav_item.active').classList.remove('active');
      $('.header-nav_item.MyClass').classList.add('active');
    }
    const navActive = $('.header-nav_item.active');
    const line = $('.header-nav_line');
    const navs = $$('.header-nav_item');
    line.style.left = navActive.offsetLeft + 'px';
    line.style.width = navActive.offsetWidth + 'px';

    navs.forEach((nav) => {
      nav.onclick = function () {
        $('.header-nav_item.active').classList.remove('active');
        line.style.left = nav.offsetLeft + 'px';
        line.style.width = nav.offsetWidth + 'px';
        this.classList.add('active');
      };
    });
  });

  return (
    <div className="header">
      <div className="header-logo"></div>

      <div className="header-wrap_nav">
        <ul className="header-nav">
          <li>
            <Link className="header-nav_item MyClass active" to="/MyClass">
              MY-CLASS
            </Link>
          </li>
          <li>
            <Link className="header-nav_item Members" to="/Members">
              MEMBERS
            </Link>
          </li>
          <li>
            <Link className="header-nav_item Album" to="/Album">
              ALBUM
            </Link>
          </li>
          <li>
            <Link className="header-nav_item LastDay" to="/LastDay">
              LAST-DAY
            </Link>
          </li>
          <div className="header-nav_line"></div>
        </ul>

        {/* <div className="header-swap-btn">
            <div className="header-swap-btn_icon">
              <i className="ti-reload"></i>
            </div>

            <div className="header-swap-figure-btn_img"></div>
          </div> */}
      </div>
    </div>
  );
}

export default Header;
