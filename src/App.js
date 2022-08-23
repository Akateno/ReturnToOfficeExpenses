
import './App.css';
import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

 

function App() {

const [wakeEarly, setWakeEarly]=useState("")
const[commute, setCommute]=useState("")
const[parking, setParking]=useState("")
const[lunch, setLunch]=useState("")
const [homeCommute, setHomeCommute]=useState("")
const [timeCommuteHome, setTimeCommuteHome]=useState("")

const[unit1, setUnit1]=useState("")
const[unit2, setUnit2]=useState("")
const[unit3, setUnit3]=useState("")
const[unit4, setUnit4]=useState("")
const[unit5, setUnit5]=useState("")
const[unit6, setUnit6]=useState("")

const[payRate, setPayRate]=useState("")
const[hourRate, setHourRate]=useState(0)

const[daysInOffice, setDaysInOffice]=useState("")

const fedNumber = 0.785


let total1=0; 
let total2=0; 
let total3=0; 
let total4=0; 
let total5=0; 
let total6=0; 

let dailyTotal=0;
let annualCost = 0; 
let newTotal=0; 


function handleCalc(e){
  e.preventDefault(); 
  let amt = document.priceCalc.valves.value
   console.log(amt)
   if(amt == "Salary"){
     newTotal=(payRate/2080).toFixed(2)
   }else{
    newTotal=payRate
   }
   
   return setHourRate(newTotal), setWakeEarly(newTotal), setCommute(fedNumber), setHomeCommute(fedNumber); 
   
}


function handleWakeEarly(event){
  setWakeEarly(event.target.value)
}
function handleCommute(event){
  setCommute(event.target.value)
}
function handleParking(event){
  setParking(event.target.value)
}
function handleLunch(event){
  setLunch(event.target.value)
}
function handleHomeCommute(event){
  setHomeCommute(event.target.value)
}
function handleTimeCommuteHome(event){
  setTimeCommuteHome(event.target.value)
}
  return (
    <div className="App">
      <h1>Return to Office Expenses</h1>

      <p>1. Type your salary/hourly rate and select your pay type then hit 'Calculate'.</p>

<Form name="priceCalc" className="topTable"onSubmit={handleCalc}>
  <table striped bordered hover>
    <tody>

      <tr>
    <td>Pay Rate</td>
    <td><input  type="integer" onChange={(e) => setPayRate(e.target.value)} value={payRate} name="units" placeholder="salary / pay Rate" /></td>
  </tr>
  <tr>
    <td>Pay Type</td>
    <td>
    <select id="valves" name="valves" >
    <option value="Salary">Salary</option>
    <option value="Hourly">Hourly</option>
    </select>
    </td>
  </tr>
  <tr>
    <td>Cost Per Hour</td>
    <td>${hourRate}</td>
  </tr>
  <tr>
    <td>Mileage Reimbursement*</td>
    <td>${fedNumber} </td>
  </tr>
  <input type="submit" value="calculate" />
    </tody>
  
</table>

</Form>


<p>2. Add your dollar costs in the 'Cost Rate' and the amount of hours/days/miles it takes.</p>



     <Table striped bordered hover className="bottomTable">
      <thead className="bottomHeader">
        <tr className="bottomHeader">
        <th>Activity</th>
        <th>Cost Rate</th>
        <th>Units </th>
        <th># Units </th>
        <th>Daily Cost </th>
      </tr>
      </thead>
    <tbody>
<tr>
    <td>Wake up Early (incl. Commmute)</td>
    <td>
    <input onChange={handleWakeEarly} value={wakeEarly} type="wakeEarly" name="wakeEarly" placeholder="hourly pay rate" />
    </td>
    <td>Hours</td>
    <td><input  type="integer" onChange={(e) => setUnit1(e.target.value)} value={unit1} name="units" placeholder="# of units" /></td>
    <td> ${ total1= (unit1*wakeEarly)}</td>
  </tr>
  <tr>
    <td>Commute(morning) </td>
    <td>
    <input onChange={handleCommute} value={commute} type="commute" name="commute"  placeholder="commute" />
    </td>
    <td>miles</td>
    <td><input  type="integer" onChange={(e) => setUnit2(e.target.value)} value={unit2} name="units" placeholder="# of units" /></td>
    <td>${total2=unit2*commute}</td>
  </tr>
  <tr>
    <td>Parking</td>
    <td>
    <input onChange={handleParking} value={parking} type="parking" name="parking"  placeholder="parking" />
    </td>
    <td>Day</td>
    <td><input  type="integer" onChange={(e) => setUnit3(e.target.value)} value={unit3} name="units" placeholder="# of units" /></td>
    <td>${total3=unit3*parking}</td>
  </tr>
  <tr>
    <td>Office Lunch</td>
    <td>
    <input onChange={handleLunch} value={lunch} type="lunch" name="lunch"  placeholder="lunch" />
    </td>
    <td>Day</td>
    <td><input  type="integer" onChange={(e) => setUnit4(e.target.value)} value={unit4} name="units" placeholder="# of units" /></td>
    <td>${total4=(unit4*lunch)}</td>
  </tr>
  <tr>
    <td>Commute(evening)</td>
    <td>
    <input onChange={handleHomeCommute} value={homeCommute} type="homeCommute" name="Homecommute"  placeholder="HomeCommute" />
    </td>
    <td>miles</td>
    <td><input  type="integer" onChange={(e) => setUnit5(e.target.value)} value={unit5} name="units" placeholder="# of units" /></td>
    <td>${total5=unit5*homeCommute}</td>
  </tr>
  <tr>
    <td>Misc. Cost(s)</td>
    <td>
    <input onChange={handleTimeCommuteHome} value={timeCommuteHome} type="timeCommuteHome" name="timeCommuteHome"  placeholder="i.e. Daycare" />
    </td>
    <td>Hours/Day</td>
    <td><input  type="integer" onChange={(e) => setUnit6(e.target.value)} value={unit6} name="units" placeholder="# of units" /></td>
    <td>${total6=unit6*timeCommuteHome}</td>
  </tr>
  <tr>
    <th> Daily Total </th>
    <td>${dailyTotal=total1+total2+total3+total4+total5+total6} </td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
     <th># of days per week in office </th>
    <td><input  type="integer" onChange={(e) => setDaysInOffice(e.target.value)} value={daysInOffice} name="units" placeholder="# of days" /> </td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
 
  <tr>
    <th>Annual Cost </th>
    <td> ${annualCost=((daysInOffice*dailyTotal)*52).toFixed(2)} </td>
    <td></td>
    <td></td>
    <td></td>
  </tr>

    </tbody>
    
</Table>
<p>*Fed. reimbursement of $0.625 + $0.16 per mile for fuel (est. 25mpg at $4/gal)</p>


    </div>
  );
}

export default App;
