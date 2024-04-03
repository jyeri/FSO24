const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.p1} - {props.p1e}</p>
      <p>{props.p2} - {props.p2e}</p>
      <p>{props.p3} - {props.p3e}</p>
    </div>

  )
}

const Total = (props) => {
  return(
    <div>
      <h3>total number of exercises: {props.p1e + props.p2e + props.p3e}</h3>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p1e={exercises1} p2={part2} p2e={exercises2} p3={part3} p3e={exercises3} />
      <Total p1e={exercises1} p2e={exercises2} p3e={exercises3} />
    </div>
  )
}

export default App