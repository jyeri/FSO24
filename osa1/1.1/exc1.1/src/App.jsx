// renders header in h2
const Header = (props) => {
  return(
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

// renders content from props-olio (name + number of exercises)
// using part module from below
const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} value={props.parts[0].value} />
      <Part name={props.parts[1].name} value={props.parts[1].value}/>
      <Part name={props.parts[2].name} value={props.parts[2].value}/>
    </div>
  )
}

// makes paragraph containing content from props-olio (name + number of exercises)
// so basically how to render singular part
const Part = (props) => {
  return(
    <div>
      <p>
        {props.name} {props.value}
      </p>
    </div>
  )
}

// counts total value of parts, should probably do with foreach instead
const TotalValue = (props) => {
  
  return(
    <div>
      <p>
        Num of exc: {props.parts[0].value + props.parts[1].value + props.parts[2].value}
      </p>
    </div>
  )  
}

// add data to course-olio
// return Header, content and totalValue
const App = () => {

  const course = {
    name: 'Half Stack application development',
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <TotalValue parts={course.parts} />
    </>
  )
}

export default App