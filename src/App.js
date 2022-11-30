import logo from './logo.svg';
import './App.css';

function App() {
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
              <form className="form">
                  <label htmlFor="lname" className="form-label">Player Last Name</label>
                  <input type="text" id="lname" name="lname" className="form-textfield"/><br/>
                  
                  <label htmlFor="fname" className="form-label">Player First Name (Optional)</label>
                  <input type="text" id="fname" name="fname" className="form-textfield"/><br/>
                  <br></br>
                  
                  <label htmlFor="stats" className="form-label">Select Statistic</label>
                  <select>
                    <option selected value="aces">
                      Average Aces per Match
                    </option>
                    <option value="doubleFaults">Average Double Faults per Match</option>
                    <option value="overallServe">Overall Serve Percentage</option>
                    <option value="firstIn">First Serve Percentage In</option>
                    <option value="firstWon">First Serve Won</option>
                    <option value="secondWon">Second Serve Won</option>
                    <option value="break">Break Points Saved</option>
                  </select>
                  <br></br>
                  <br></br>
                  <label htmlFor="year" className="form-label">Select Year for Statistic (2010-2021)</label>
                  <select>
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
