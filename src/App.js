import './App.css';
import Header  from './components/header';
import Gen from './components/gen';



// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       fname:"",
//       lname:"",
//       age:0,
//       gender:"",
//       loc:"",
//       diet:[],
//     }

//     this.handlechange = this.handlechange.bind(this)
//   }

//   handlechange(event) {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   }
  
//   render() {
//     return (
//       <div>
//           <h1>hello</h1>
//           <form>
//             <input 
//                 name="fname" 
//                 value={this.state.fname} 
//                 onChange={this.handlechange} 
//                 placeholder="fname" /><br></br>
//             <input 
//                 name="lname" 
//                 value={this.state.lname} 
//                 onChange={this.handlechange} 
//                 placeholder="lname" /><br></br>
//             <input 
//                 name="age" 
//                 value={this.state.age} 
//                 onChange={this.handlechange} 
//                 placeholder="age" /><br></br>

//             <label>
//               <input 
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   checked={this.state.gender === "male"}
//                   onChange={this.handlechange} /> Male
//             </label><br/>

//             <label>
//               <input 
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   checked={this.state.gender === "female"}
//                   onChange={this.handlechange} /> Female
//             </label><br/>

//             <select 
//                 value={this.state.loc} 
//                 name="loc" 
//                 onChange={this.handlechange}>
//               <option value="ogun">Ogun</option>
//               <option value="lagos">Lagos</option>
//               <option value="oyo">Oyo</option>
//               <option value="jos">Jos</option>
//             </select>
            
//           </form>
            
//           <h1>ENTERED INFO</h1>
//           <p>Name: {this.state.fname} {this.state.lname}</p>
//           <p>Age:  {this.state.age}</p>
//           <p>Gender:  {this.state.gender}</p>
//           <p>Locations:  {this.state.loc}</p>
//       </div>

//     ) 
      
    
//   }
// }
function App() {
  
  return (
    <>
    <Header />
    <Gen />
      </>
  );
}

export default App;
