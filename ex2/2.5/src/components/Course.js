const Course = ({ course }) => { 
    const total = course.parts.reduce( (sum, part) => console.log('sum, part', sum, part) || sum + part.exercises, 0)
    console.log(course)

    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <b>Total of {total} exercises</b>
      </div>
    )
  }

  const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }

  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => 
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }

  const Part = ({ part }) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }

export default Course;