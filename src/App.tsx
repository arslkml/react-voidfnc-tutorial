// Component
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import CardProfile from "./components/CardProfile";

type Teacher = {
  year: number,
  job: string,
  name: string,
  id: number,
}

const teachers: Teacher[] = [
  {
    job: 'Dosen',
    year: 2022,
    name: 'Arsal Kamil',
    id: 1,
  },
  {
    job: 'Creator',
    year: 2022,
    name: 'Naufal',
    id: 2,
  },
  {
    job: 'Tech Lead',
    year: 2022,
    name: 'Arsal Kamil',
    id: 3,
  },
]

function App() {

  return (
    <>
      <Welcome />
      <h1>Hello World</h1>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column'}}>
        {teachers.map((teacher) => (
          <CardProfile
            key={teacher.id}
            name={teacher.name}
            age={teacher.year}
            birthday={teacher.year}
          />
        ))}
      </div>

      <Header />
    </>
  )
}

export default App
