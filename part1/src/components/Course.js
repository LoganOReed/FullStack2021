import React from 'react'

const Header = ({ course }) => {
  return (
    <div>
      <h3>{course}</h3>
    </div>
  )
}

const Part = ({ name, exercise }) => {
  return (
    <div>
      <p>
        {name} {exercise}
      </p>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => {
        return <Part key={part.id} name={part.name} exercise={part.exercises} />
      })}
    </div>
  )
}

const Total = ({ parts }) => {
  //construct an array of exercises from parts array
  const exercises = parts.map(part => {
    return part.exercises
  })
  return (
    <div>
      <p>
        Total:{' '}
        {exercises.reduce((prev, curr) => {
          return prev + curr
        })}
      </p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
