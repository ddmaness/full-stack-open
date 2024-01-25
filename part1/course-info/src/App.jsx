import { useState } from "react"

const Header = (({course}) => {
  return(
    <>
      <h1>{course}</h1>
    </>
  )
})

const Part = ({title, count}) => {
  return (
    <p>
      {title} {count}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map((part ,i) => <Part key={i} title={part.name} count={part.exercises}></Part>)}
    </>
  )
}

const Total = ({parts}) => {
  const count = parts.reduce((accumlator, {exercises}) => accumlator + exercises, 0)
  return (
    <>
      <p>
        Number of Exercises {count}
      </p>
    </>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }      
    ]
  }
  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default App
