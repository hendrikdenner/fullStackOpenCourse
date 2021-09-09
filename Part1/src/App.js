import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>
        Welcome to the course: {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        Part: {props.part} Number of Exercises: {props.ex}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part  part={props.part1} ex={props.ex1} />
      <Part  part={props.part2} ex={props.ex2} />
      <Part  part={props.part3} ex={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
       total number of exercises: {props.total}
      </p>
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
      <Content part1={part1} ex1={exercises1} part2={part2} ex2={exercises2} part3={part3} ex3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App