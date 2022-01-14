import React, { useState } from "react"

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({name, exercise}) => {

  return (
    <div>
    <p>
        {name} {exercise}
    </p>
    </div>
  );
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map( (part) => {
        return (<Part key={part.id} name={part.name} exercise={part.exercises} />);
      })}
    </div>
  )
}

const Total = ({parts}) => {
  //construct an array of exercises from parts array
  const exercises = parts.map((part) => {
    return part.exercises;
  })
  return (
    <div>
      <p>Total: {exercises.reduce((prev, curr) => {
        return prev + curr;
      })}</p>
    </div>
  )
}

const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return (<Course course={course} />)
}

export default App;
