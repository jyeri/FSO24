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
    return (
      <div>
        {props.parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }
  
  const Total = (props) => {
    // reduce method is used to calculate the sum of exercises, 0 is the initial
    // 10 + 7 = 17
    // 17 + 11 = 28
    // 28 + 14 = 42
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <div>
        <h3>total number of exercises: {totalExercises}</h3>
      </div>
    );
  }
  
  const Part = (props) => {
    return(
      <div>
        <p>
          {props.name} {props.exercises}
        </p>
      </div>
    )
  }
  
  const Course = (props) => {
    return(
      <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
      </div>
    )
  }

  const Courses = (props) => {
    return(
      <div>
        {props.courses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    )
  }

export default Courses