
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
    console.log(course)
    return (
      <div>
      <Header course={course} />
      <Content Content={Content} />
      </div>
    )
  }
  const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
      <Part parts={course.parts[0]} />
      <Total />
      </div>
    )
  }
  const Part = (props) => {
    return (
      <>
      {course.parts.map(part => <p>{part.name} {part.exercises}</p>)}
    </>
    )
     }
  
  const Total = () => {
    var all = 0;
      for (var i = 0; i< course.parts.length; i++)
      {
        all += course.parts[i].exercises
      }
        console.log(all)
          return(
            <b>Total of {all} exercises</b>
          )
     }
    

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App