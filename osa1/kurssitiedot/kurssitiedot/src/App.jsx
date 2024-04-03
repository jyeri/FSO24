const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} value={props.parts[0].value} />
      <Part name={props.parts[1].name} value={props.parts[1].value} />
      <Part name={props.parts[2].name} value={props.parts[2].value} />
    </div>

  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        <h3>total number of exercises: {props.parts[0].value + props.parts[1].value + props.parts[2].value}</h3>
      </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.name} {props.value}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    coursename: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        value: 10
      },
      {
        name: 'Using props to pass data',
        value: 7
      },
      {
        name: 'State of a component',
        value: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.coursename} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App