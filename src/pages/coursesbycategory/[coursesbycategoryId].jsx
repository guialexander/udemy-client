import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from 'axios';
import Footer from '@/componentes/footer';
import CourseCard from '../../componentes/coursecard/CourseCard.js'

const CoursebycategoryId = (props) => {
  const { query } = useRouter()
  const [courses, setCourses] = useState([])
  let category = query.coursesbycategoryId;

  console.log('category de params:', category.Category)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HEROKU_URL}/courses`
    ).then((res) => {
      const allCourses = res.data.data
      console.log('allcourses:', allCourses)
    
      const coursesByCategory = allCourses.filter(function (item) {
        return item.category === category.Category
      })
      console.log('coursesBycategory', coursesByCategory)
      
      setCourses(coursesByCategory)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
    })
  }, [])




  return(
    <>
      <div className="category-title-container">
            <h2>{category.Category} Courses</h2>
          </div>
          <div className='coursesbycategory-container'>
            {courses.length > 0 ? 
              (courses.map((item)=>{
                return(
                  <CourseCard
                  key={item._id}
                  img={item.image}
                  title={item.title}
                  teacher={item.courseOwner.fullName}
                  price={item.price}
                  rating={4.5}
                  lastUpdate={item.primaryTaught}
                  id={item._id}
                  //totalHours={item.totalHours}
                  level={item.level}
                  subtitle={item.subtitle}
                  description={item.description}
                  />
                )
              })) 
              : <p>No courses yet</p>
            }   
          </div>

      <Footer />
    </>
  )
}

export default CoursebycategoryId
