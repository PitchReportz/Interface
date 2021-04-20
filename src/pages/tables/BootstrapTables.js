
import React, {useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import {csv} from 'd3';
import datav from '../Case_Study_Project.csv';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from '@themesberg/react-bootstrap';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryPie } from 'victory';


import { PageTrafficTable, RankingTable } from "../../components/Tables";


export default () => {
  const [data, setData] = useState([]);
  const [myOptions, setMyOptions] = useState(new Set())
  const [teams, setMyteams] = useState([])
  const teamstr = useRef('')
  const [runs, setMyruns] = useState(0)
  const [wiks, setMywiks] = useState(0)
  const [wikscsk, setMywikscsk] = useState(0)
  const [wiksmi, setMywiksmi] = useState(0)
  const [wiksrcb, setMywiksrcb] = useState(0)
  const [wikskkr, setMywikskkr] = useState(0)
  const [wiksdc, setMywiksdc] = useState(0)
  const [wiksrr, setMywiksrr] = useState(0)
  const [wikssrh, setMywikssrh] = useState(0)
  const [wikspk, setMywikspk] = useState(0)
  const [runscsk, setMyrunscsk] = useState(0)
  const [runsmi, setMyrunsmi] = useState(0)
  const [runsrcb, setMyrunsrcb] = useState(0)
  const [runskkr, setMyrunskkr] = useState(0)
  const [runsdc, setMyrunsdc] = useState(0)
  const [runsrr, setMyrunsrr] = useState(0)
  const [runssrh, setMyrunssrh] = useState(0)
  const [runspk, setMyrunspk] = useState(0)
  const [pier, setMypier] = useState([])
  const [piew, setMypiew] = useState([])
  useEffect(() => {
    csv(datav)
      .then((data) => {
        setData(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          myOptions.add(data[i].batting_team)
        }
        setMyOptions(myOptions)
        console.log(myOptions)
        myOptions.forEach(v => teams.push(v));
        console.log(teams.length)
        setMyteams(teams)
        console.log(teams)
      });
  }, []);

  function totalruns(){
    var r=0;
    var w =0;
    for (var i = 0; i < data.length; i++) {
      if(data[i].batting_team == teamstr.current.value){
        r = r + parseInt(data[i].batsman_runs)
        w = w + parseInt(data[i].is_wicket)
      }
    }
    if(teamstr.current.value == "Kolkata Knight Riders"){
      if(runskkr == 0){
        pier.push({x:"kkr",y:r})
        piew.push({x:"kkr",y:w})
      }
      setMyrunskkr(r)
      setMywikskkr(w)
    }
    if(teamstr.current.value == "Royal Challengers Bangalore"){
      if(runsrcb == 0){
        pier.push({x:"rcb",y:r})
        piew.push({x:"rcb",y:w})    
      }
      setMyrunsrcb(r)
      setMywiksrcb(w)
    }
    if(teamstr.current.value == "Kings XI Punjab"){ 
      if(runspk == 0){
        pier.push({x:"kp",y:r})
      piew.push({x:"kp",y:w})    
      }
      setMyrunspk(r)
      setMywikspk(w)
    }
    if(teamstr.current.value == "Chennai Super Kings"){
      if(runscsk == 0){
        pier.push({x:"csk",y:r})
      piew.push({x:"csk",y:w})   
      } 
      setMyrunscsk(r)
      setMywikscsk(w)
    }
    if(teamstr.current.value == "Delhi Capitals"){
      if(runsdc == 0){
        pier.push({x:"dc",y:r})
      piew.push({x:"dc",y:w})   
      }
      setMyrunsdc(r)
      setMywiksdc(w)
    }
    if(teamstr.current.value == "Mumbai Indians"){
      if(runsmi == 0){
        pier.push({x:"mi",y:r})
      piew.push({x:"mi",y:w})    
      }
      setMyrunsmi(r)
      setMywiksmi(w)
    }
    if(teamstr.current.value == "Rajasthan Royals"){
      if(runsrr == 0){
        pier.push({x:"rr",y:r})
      piew.push({x:"rr",y:w})   
      }
      setMyrunsrr(r)
      setMywiksrr(w)
    }
    if(teamstr.current.value == "Sunrisers Hyderabad"){
      if(runssrh == 0){
        pier.push({x:"srh",y:r})
      piew.push({x:"srh",y:w})    
      }
      setMyrunssrh(r)
      setMywikssrh(w)
    }
    setMyruns(r)
    setMypier(pier)
    setMypiew(piew)
    console.log(runs)
    setMywiks(w)
    console.log(wiks)
    console.log(pier)
    console.log(piew)
  };


  const totalteams = [{x: 1, y: runs}]
  const totalwiks = [{x: 1, y: wiks}]
  const totalrunscmp = [{x: "csk", y: runscsk},{x: "mi", y: runsmi},{x: "rcb", y: runsrcb},{x: "kkr", y: runskkr},
  {x: "dc", y: runsdc},{x: "pk", y: runspk},{x: "rr", y: runsrr},{x: "srh", y: runssrh}]
  const totalwikscmp = [{x: "csk", y: wikscsk},{x: "mi", y: wiksmi},{x: "rcb", y: wiksrcb},{x: "kkr", y: wikskkr},
  {x: "dc", y: wiksdc},{x: "pk", y: wikspk},{x: "rr", y: wiksrr},{x: "srh", y: wikssrh}]


  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <h4>Visualizations</h4>
          <p className="mb-0">
           Insights from data
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <div>
      <div className="d-block mb-4 mb-md-0">
          <h5>Choose your team</h5>
        </div>
      <Autocomplete
        style={{ width: 500 }}
        placeholder="Search"
        autoComplete
        autoHighlight
        options={teams}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
            inputRef={teamstr}
          />
        )}
      />
      </div>
      </div>
      <Button onClick={totalruns}>Calculate</Button>
      <p></p>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <div className="d-block mb-4 mb-md-0">
          <h4>TotalRunsScored : {runs}</h4>
        </div>
        <div className="d-block mb-4 mb-md-0">
          <h4>TotalWickets : {wiks}</h4>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1]}
          tickFormat={["Runs"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
          data={totalteams}
          style={{
            data: { fill: "#1B68C2" }
          }}
          barWidth={({ index }) => 30}
          x="x"
          y="y"
        />
      </VictoryChart>
      </div>
      <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1]}
          tickFormat={["Wickets"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
          data={totalwiks}
          style={{
            data: { fill: "#B2061B" }
          }}
          barWidth={({ index }) => 30}
          x="x"
          y="y"
        />
      </VictoryChart>
      </div>
      </div>
      <div>
        <div className="d-block mb-4 mb-md-0">
          <h4>Comparision of current eight prime teams</h4>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1,2,3,4,5,6,7,8]}
          tickFormat={["csk","mi","rcb","kkr","dc","pk","rr","srh"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
          data={totalrunscmp}
          style={{
            data: { fill: "#1B68C2" }
          }}
          barWidth={({ index }) => 15}
          x="x"
          y="y"
        />
      </VictoryChart>
      </div>
      <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1,2,3,4,5,6,7,8]}
          tickFormat={["csk","mi","rcb","kkr","dc","pk","rr","srh"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
          data={totalwikscmp}
          style={{
            data: { fill: "#B2061B" }
          }}
          barWidth={({ index }) => 15}
          x="x"
          y="y"
        />
      </VictoryChart>
      </div>
      </div>
      <div>
        <div className="d-block mb-4 mb-md-0">
          <h4>Piecharts for runs and Wickets</h4>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div>
        <VictoryPie
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
        colorScale={["navy","blue","violet","black","tomato", "orange", "gold", "cyan",  ]}
           data={Array.from(pier)}
          />
        </div>
        <div>
        <VictoryPie
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
        colorScale={["tomato", "orange", "gold", "cyan", "navy","blue","violet","black" ]}
          data={Array.from(piew)}
             />
        </div>
      </div>
    </>
  );
};
