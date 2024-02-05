import React from "react";
import { useAuth } from "../../contexts/auth.context";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { AiFillShopping } from "react-icons/ai";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  return (
    <div>
      <div className={styles.header}>
        <ul className={styles.first}>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              럭셔리 쇼핑이 참 쉽다, 발랑
            </Link>
          </li>
          <li className={styles.mainp}>Online luxury boutique</li>
          {isLoggedIn ? (
            <ul>
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
              <li>|</li>
              <li>
                <Link
                  to="/mypage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  마이페이지
                </Link>
              </li>
              <li>|</li>
              <li>주문배송</li>
              <li>|</li>
              <li>고객센터</li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link
                  to="/sign-in"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  로그인
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link
                  to="/sign-in"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  마이페이지
                </Link>
              </li>
              <li>|</li>
              <li>주문배송</li>
              <li>|</li>
              <li>고객센터</li>
            </ul>
          )}
        </ul>
      </div>
      <div className={styles.second}>
        <ul>
          <ul>
            <li>WOMEN</li>
            <li>|</li>
            <li>MEN</li>
          </ul>
          <li className={styles.mainLogo}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 80,
                fontFamily: "",
              }}
            >
              BALLANG
            </Link>
          </li>
          <ul>
            <li>
              <input type="text" placeholder="검색어를 입력하세요" />
            </li>
            {isLoggedIn ? (
              <li>
                <Link to='/cart'>
                <AiFillShopping />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/sign-in">
                <AiFillShopping />
                </Link>
              </li>
            )}
          </ul>
        </ul>
      </div>
      <div className={styles.third}>
        <ul>
          <li>New In</li>
          <li>의류</li>
          <li>슈즈</li>
          <li>가방</li>
          <li>악세사리</li>
          <li>주얼리</li>
          <li>SALE</li>
          <li>DESIGNERS</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
