import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {APIendpoint, APIkey} from './APIconstants';
import {apiCall} from './APIhandlers';
import {PopUp} from './PopUp'
import { useNavigate } from 'react-router-dom';
import {Modal} from './Modal';
import ReactDOM from 'react-dom';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    year: "",
    stat: ""
  })

  const dictionary = new Map([
    ['aces', 'Average Aces Per Match'],
    ['doubleFaults', 'Average Double Faults Per Match'],
    ['overallServe', 'Overall Serve Percentage'],
    ['firstIn', 'First Serve In Percentage'],
    ['firstWon', 'First Serve Points Won'],
    ['secondWon', 'Second Serve Points Won'],
    ['break', 'Break Points Saved']
  ]);

  const handleChange = (event) => {
    console.log("in handle change")
    console.log(event.target.value)
    const value = event.target.value
    const name = event.target.name
    setFormValues({
        ...formValues,
        [name]: value
    })
    //console.log(formValues)
}

const handleSubmit = async (event) => {
  event.preventDefault()
  console.log("in handle submit")
  //console.log(formValues)
  const body = {
      event: `${formValues.stat}`,
      body: {...formValues}
  }
  const response = await apiCall('POST', JSON.stringify(body))
  const data = await response.json()
  console.log("Im here")
  console.log(data)
  if(response.status === 200){
      console.log("successful response")
      console.log(data.res[0])
      const props = {
        title: ''+formValues.lastName+"'s "+dictionary.get(formValues.stat)+' in '+formValues.year,
        value: data.res[0]
      }
      const MyPopUp = () => {
        return PopUp(props);
      }
      
      ReactDOM.render(<MyPopUp />, document.getElementById('root'));
  }

  
}
  
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <p>Welcome to Instant Tennis!</p>
        </div>
        <div className="logo">
          <p>Serve Up Statitstics Below</p>
        </div>
      </div>
      <header className="App-header">
        <div className="form-container">
              <h1 className="form-title">Generate Stat</h1>
              <form className="form" method="POST" onSubmit={handleSubmit}>
                  <label htmlFor="lname" className="form-label">Player Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="form-textfield" onChange={handleChange}/><br/>
                  
                  <label htmlFor="fname" className="form-label">Player First Name (Optional)</label>
                  <input type="text" id="firstName" name="firstName" className="form-textfield" onChange={handleChange}/><br/>
                  <br></br>
                  
                  <label htmlFor="stats" className="form-label">Select Statistic</label>
                  <select name="stat" onChange={handleChange}>
                    <option selected value="aces">Average Aces per Match</option>
                    <option value="doubleFaults">Average Double Faults per Match</option>
                    <option value="overallServe">Overall Serve Percentage</option>
                    <option value="firstIn">First Serve Percentage In</option>
                    <option value="firstWon">First Serve Points Won</option>
                    <option value="secondWon">Second Serve Points Won</option>
                    <option value="break">Break Points Saved</option>
                  </select>
                  <br></br>
                  <br></br>
                  <label htmlFor="yearLabel" className="form-label">Select Year for Statistic (2010-2021)</label>
                  <select name="year" onChange={handleChange}>
                    <option selected value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="allYears">All years (2010-2021)</option>
                  </select>
                  <br></br>
                  <input type="submit" className="form-button" value="Generate"/>
              </form>
              <div className="whitespace"></div>
          </div>
      </header>
    </div>
  );
}

export default App;
