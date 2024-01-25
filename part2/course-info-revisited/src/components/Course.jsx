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
      {parts.map((part) => <Part key={part.id} title={part.name} count={part.exercises}></Part>)}
    </>
  )
}

const Total = ({parts}) => {
  const count = parts.reduce((accumlator, {exercises}) => accumlator + exercises, 0)
  return (
    <>
      <p>
        <b>Number of Exercises {count}</b>
      </p>
    </>
  )
}

function Course({course}) {
  return ( 
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
   );
}

export default Course