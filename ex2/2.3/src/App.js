
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

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
      <h1>{course.name}</h1>
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
      <>{course.parts.map(part => 
          <Part key={part.id}  part={part} />
        )}</>
      </div>
    )
  }
  const Part = ({ part }) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App