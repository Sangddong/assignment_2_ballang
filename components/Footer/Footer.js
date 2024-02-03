import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
        <footer>
            <ul>
                <li>회사소개</li>
                <li>|</li>
                <li>제휴문의</li>
                <li>|</li>
                <li>고객센터</li>
                <li>|</li>
                <li>이용약관</li>
                <li>|</li>
                <li>개인정보처리방침</li>
            </ul>
            <ul>
                <li>MY ORDER</li>
                <li>CUSTOMER SERVICE</li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer