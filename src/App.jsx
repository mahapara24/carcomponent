import Card from './components/Card'
import './App.css'

function App() {
  let mycardcomponentobject = {
    username: "mahapara",
    age: "22"
  }


  return (
    <>
    <div className='text-red-600  flex space-x-3'>
      <h1>Card Component</h1>
      <Card imageused='https://images.unsplash.com/photo-1536317203120-03881cb89d41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  username= "Zakia" btnText='Go to my profile' paragraph='qHi I am Zakia nizamni and I am a teacher'/>

    <Card imageused="https://images.unsplash.com/photo-1540128633858-89fe2c980033?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" username="Mahapara" btnText='Go to my linkedin' paragraph='hi i am mahapara and I am a student studying in sindh university and currentk i am in going in4th ear as final student' />
    </div>
    <div></div>
    </>
  )
}

export default App
