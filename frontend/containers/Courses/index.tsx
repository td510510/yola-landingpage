import styles from './Courses.module.scss'
import StarIcon from '../../public/svg/star.svg'
import Button from '@/components/Button'

const Courses = () => {
  const courses = [
    {
      image: '/images/course-1.png',
      title: 'Resortive Yoga Training & Immersion',
      description: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
      rating: 4,
      totalRating: 20,
    },
    {
      image: '/images/course-2.png',
      title: 'Resortive Yoga Training & Immersion',
      description: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
      rating: 5,
      totalRating: 27,
    },
    {
      image: '/images/course-3.png',
      title: 'Resortive Yoga Training & Immersion',
      description: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
      rating: 3,
      totalRating: 21,
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Popular Courses</h2>
        <p>Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself. We are providing the best.</p>
        <div className={styles.courses}>
          {
            courses.map((course: { image: string, title: string, description: string, rating: number, totalRating: number }, i) => (
              <div className={styles.course} key={`course-${i}`}>
                <img src={course.image} />
                <h6>{course.title}</h6>
                <p>{course.description}</p>
                <div className={styles.information}>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <div className={`${styles.star} ${(i + 1) <= course.rating ? styles.filled : ''}`} key={`star-${i}`}>
                        <StarIcon />
                      </div>
                    )
                    )}
                    <span className={styles.totalRating}>({course.totalRating})</span>
                  </div>
                  <div className={styles.getStarted}>Get Started</div>
                </div>
              </div>
            ))
          }
        </div>
        <Button classStyles={styles.button} text='Browse All' />
      </div>
    </div>
  )
}

export default Courses