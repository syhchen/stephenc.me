import React from 'react'

import SocialMedia from './SocialMedia'

import styles from './Footer.module.less'

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footerOuter}>
        <div className={styles.footerInner}>
          {/* <SocialMedia /> */}
          <p className={styles.copy}>&copy; 2018 Stephen Chen</p>
        </div>
      </div>
    )
  }
}

export default Footer
