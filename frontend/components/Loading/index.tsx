import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingBox}>
        <div className={styles.loading}>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
