/* eslint-disable no-undef */
import React from 'react'
import { useGooglePicker } from 'hooks/useGooglePicker'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const { pickFile } = useGooglePicker({
    developerKey: process.env.REACT_APP_GOOGLE_DRIVE_DEVELOPER_KEY,
    clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_KEY,
    scope: ['https://www.googleapis.com/auth/drive.file'],
  })

  const handleOnClick = async () => {
    try {
      const file = await pickFile()
      console.log('[##] file', file)
    } catch (err) {
      console.log('[##] err', err)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <button type="button" onClick={handleOnClick}>
          GET FILE
        </button>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
