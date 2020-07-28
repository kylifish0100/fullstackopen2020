import React from 'react'
import ReactDOM from 'react-dom'

const Hearder = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const parts = props.parts
    return (
      <div>
        {parts.map((part) =>
          <Part name={part.name} exercises={part.exercises} />
        )}
      </div>
    )
  }

const Total = (props) => {
  let sum = 0
  props.number.map((part) => sum += part.exercises)
  return (
    <div>
      <p>
        Number of exercises {sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Hearder course={course.name} />
      <Content parts={course.parts} />
      <Total number={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))