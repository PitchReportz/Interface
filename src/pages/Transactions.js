import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import ReactDom from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme } from 'victory';
import {csv} from 'd3';
import { TransactionsTable } from "../components/Tables";
import datav from './Case_Study_Project.csv';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default () => {
  const [data, setData] = useState([]);
  const [myOptions, setMyOptions] = useState(new Set())
  const [mybOptions, setMybOptions] = useState(new Set())
  const [batsmans, setMybatsmans] = useState([])
  const [bowlers, setMybowlers] = useState([])
  const [runs, setMyruns] = useState(0)
  const [wiks, setMywiks] = useState(0)
  const batstr = useRef('')
  const bowlstr = useRef('')
  useEffect(() => {
    csv(datav)
      .then((data) => {
        setData(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          myOptions.add(data[i].batsman)
        }
        setMyOptions(myOptions)
        console.log(myOptions)
        myOptions.forEach(v => batsmans.push(v));
        console.log(batsmans.length)
        setMybatsmans(batsmans)
        for (var i = 0; i < data.length; i++) {
          mybOptions.add(data[i].bowler)
        }
        setMybOptions(mybOptions)
        console.log(mybOptions)
        mybOptions.forEach(v => bowlers.push(v));
        console.log(bowlers.length)
        setMybowlers(bowlers)
      });
  }, []);

  function matchup(){
    console.log(batstr.current.value)
    console.log(bowlstr.current.value)
    var r=0;
    var w=0;
    for (var i = 0; i < data.length; i++) {
      if(data[i].batsman == batstr.current.value){
        if(data[i].bowler == bowlstr.current.value){
          r = r + parseInt(data[i].batsman_runs)
          w = w + parseInt(data[i].is_wicket)
        }
      }
    }
    setMyruns(r)
    setMywiks(w)
    console.log(runs)
    console.log(wiks)
  };
  const valbat = [{playerid: 1, runsscored: runs}]
  const valbowl = [{playerid: 1, wikstaken: wiks}]


  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Matchups</h4>
          <p className="mb-0">Get to know the battle</p>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <div>
      <div className="d-block mb-4 mb-md-0">
          <h5>Select your batsman</h5>
        </div>
      <Autocomplete
        style={{ width: 500 }}
        placeholder="Search"
        autoComplete
        autoHighlight
        options={batsmans}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
            inputRef={batstr}
          />
        )}
      />
      </div>
      <div>
      <div className="d-block mb-4 mb-md-0">
          <h5>Select your bowler</h5>
        </div>
      <Autocomplete
        style={{ width: 500 }}
        placeholder="Search"
        autoComplete
        autoHighlight
        options={bowlers}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
            inputRef={bowlstr}
          />
        )}
      />
      </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <Button onClick={matchup} >Calculate</Button>
      <div className="d-block mb-4 mb-md-0">
          <h4>RunsScored : {runs}</h4>
        </div>
        <div className="d-block mb-4 mb-md-0">
          <h4>Dismissals : {wiks}</h4>
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
          data={valbat}
          style={{
            data: { fill: "#1B68C2" }
          }}
          barWidth={({ index }) => 30}
          x="playerid"
          y="runsscored"
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
          tickFormat={["wickets"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
         barWidth={({ index }) => 30}
         style={{
          data: { fill: "#B2061B" }
        }}
          data={valbowl}
          x="playerid"
          y="wikstaken"
        />
      </VictoryChart>
      </div>
      </div>
    </>

  );
};
