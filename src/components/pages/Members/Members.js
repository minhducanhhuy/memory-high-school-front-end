import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Members.css';
import _1a from '../../../img/members/1a.JPG';
import _2a from '../../../img/members/2a.JPG';
import _3a from '../../../img/members/3a.JPG';
import _4a from '../../../img/members/4a.JPG';
import _5a from '../../../img/members/5a.JPG';
import _7a from '../../../img/members/7a.JPG';
import _8a from '../../../img/members/8a.JPG';
import _10a from '../../../img/members/10a.JPG';
import _11a from '../../../img/members/11a.JPG';
import _12a from '../../../img/members/12a.JPG';
import _13a from '../../../img/members/13a.JPG';
import _14a from '../../../img/members/14a.JPG';
import _15a from '../../../img/members/15a.JPG';
import _16a from '../../../img/members/16a.JPG';
import _17a from '../../../img/members/17a.JPG';
import _18a from '../../../img/members/18a.JPG';
import _19a from '../../../img/members/19a.JPG';
import _20a from '../../../img/members/20a.JPG';
import _21a from '../../../img/members/21a.JPG';
import _22a from '../../../img/members/22a.JPG';
import _23a from '../../../img/members/23a.JPG';
import _24a from '../../../img/members/24a.JPG';
import _25a from '../../../img/members/25a.JPG';
import _26a from '../../../img/members/26a.JPG';
import _27a from '../../../img/members/27a.JPG';
import _28a from '../../../img/members/28a.JPG';
import _29a from '../../../img/members/29a.JPG';
import _30a from '../../../img/members/30a.JPG';
import _31a from '../../../img/members/31a.JPG';
import _32a from '../../../img/members/32a.JPG';
import _33a from '../../../img/members/33a.JPG';
import _34a from '../../../img/members/34a.JPG';
import _35a from '../../../img/members/35a.JPG';
import _36a from '../../../img/members/36a.JPG';
import _37a from '../../../img/members/37a.JPG';
import _38a from '../../../img/members/38a.JPG';
import _39a from '../../../img/members/39a.JPG';

function Members() {
  const [members, serMembers] = useState([
    _1a,
    _2a,
    _3a,
    _4a,
    _5a,
    _7a,
    _8a,
    _10a,
    _11a,
    _12a,
    _13a,
    _14a,
    _15a,
    _16a,
    _17a,
    _18a,
    _19a,
    _20a,
    _21a,
    _22a,
    _23a,
    _24a,
    _25a,
    _26a,
    _27a,
    _28a,
    _29a,
    _30a,
    _31a,
    _32a,
    _33a,
    _34a,
    _35a,
    _36a,
    _37a,
    _38a,
    _39a,
  ]);
  const [isShow, setIsShow] = useState(true);
  const [indexUser, setIndexUser] = useState(0);

  const handleShow = (index) => {
    setIsShow(!isShow);
    setIndexUser(index);
  };
  return (
    <div className="members">
      <div className="member-container">
        {isShow ? (
          members.map((member, index) => {
            return (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleShow(index);
                }}
                className="member-item"
                style={{ backgroundImage: `url('${member}')` }}
              ></div>
            );
          })
        ) : (
          <div className="member-profile">
            <div className="container-info">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsShow(!isShow);
                }}
                className="btn-comback"
              >
                Back
              </div>
              <div className="member-avatar" style={{ backgroundImage: `url('${members[indexUser]}')` }}></div>
              <div className="member-info">
                <div className="member-info_text">name:</div>
                <div className="member-info_text">favourite:</div>
                <div className="member-info_text">dream:</div>
                <div className="member-info_text">slogan:</div>
                <div className="member-info_text">personality:</div>
                <div className="member-info_text">thêm các thông tin khác nếu muốn</div>
              </div>
            </div>

            <div className="member-album">
              <div className="album-nav">
                <div className="album-list">image</div>
                <div className="album-list">video</div>
              </div>
            </div>
          </div>
        )}
        {console.log(isShow)}
      </div>
    </div>
  );
}

export default Members;
