import React from 'react'

import styles from './Hero.module.less'

import profilePic from './img/me@2x.png'

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.heroOuter}>
        <div className={styles.heroInner}>
          <div className={[styles.heroSection, styles.profilePic].join(' ')}>
            <img
              src={profilePic}
              alt="Stephen Chen"
            />
          </div>
          <div className={[styles.heroSection, styles.profileText].join(' ')}>
            <h1>Hi, I'm Stephen!</h1>
            <p>I design & build <strong>digital experiences</strong> in sunny <strong>Los Angeles, CA.</strong></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
