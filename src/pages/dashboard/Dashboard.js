import React from 'react'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  console.log('[##] test')
  return (
    <div className={styles.root}>
      <div className={styles.container}>sss</div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
