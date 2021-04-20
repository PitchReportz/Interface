import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Forms";
import {csv} from 'd3';
import datav from './Case_Study_Project.csv';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Profile3 from "../assets/img/team/profile-picture-3.jpg";


export default () => {
  const [data, setData] = useState([]);
  const [myteams, setMyteams] = useState(new Set())
  const [team, setMyteam] = useState([])
  const [win, setMywin] = useState(0)
  const team1 = useRef('')
  const team2 = useRef('')
  const tos = useRef('')
  const twin = useRef('')
  const dicteam = {'Sunrisers Hyderabad': 0, 'Royal Challengers Bangalore': 1, 'Mumbai Indians': 2, 'Rising Pune Supergiant': 3, 'Gujarat Lions': 4, 'Kolkata Knight Riders': 5, 'Kings XI Punjab': 6, 'Delhi Daredevils': 7, 'Chennai Super Kings': 8, 'Rajasthan Royals': 9, 'Deccan Chargers': 10, 'Kochi Tuskers Kerala': 11, 'Pune Warriors': 12, 'Rising Pune Supergiants': 13, 'Delhi Capitals': 14}
  const fiel = {'Fielding':0,'Batting':1}
  const orderofteam = {'Team-1':0,'Team-2':1}


  useEffect(() => {
    csv(datav)
      .then((data) => {
        setData(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          myteams.add(data[i].batting_team)
        }
        setMyteams(myteams)
        myteams.forEach(v => team.push(v));
        setMyteam(team)
      });
  }, []);

  function matchup(){
    var w = 0
    const bothteams = [team1.current.value,team2.current.value]
    console.log(dicteam[team1.current.value])
    console.log(dicteam[team2.current.value])
    console.log(fiel[tos.current.value])
    console.log(orderofteam[twin.current.value])
    fetch(`http://localhost:8080/score?team1=${dicteam[team1.current.value]}&team2=${dicteam[team2.current.value]}&toss=${fiel[tos.current.value]}&twin=${orderofteam[twin.current.value]}`).then(response => response.json())
    .then(data => {
        console.log(data);
        w = data
        setMywin(w)
        console.log(w)
        console.log(win)
  });


  };

  const tossvalues = ["Batting","Fielding"]
  const fieldop = ["Team-1","Team-2"]


  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Predictions</h4>
          <p className="mb-0">Past isn't Past, Past defines Future</p>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <div>
      <div className="d-block mb-4 mb-md-0">
          <h5>Select your first team</h5>
          <h5>Team-1</h5>
        </div>
      <Autocomplete
        style={{ width: 500 }}
        placeholder="Search"
        autoComplete
        autoHighlight
        options={team}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
            inputRef={team1}
          />
        )}
      />
      </div>
      <div>
      <div className="d-block mb-4 mb-md-0">
          <h5>Select your second team</h5>
          <h5>Team-2</h5>
        </div>
      <Autocomplete
        style={{ width: 500 }}
        placeholder="Search"
        autoComplete
        autoHighlight
        options={team}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
            inputRef={team2}
          />
        )}
      />
      </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <div>
      <div className="d-block mb-4 mb-md-0">
          <h5>Toss Won By</h5>
        </div>
      <Autocomplete
        style={{ width: 500 }}
        placeholder="Search"
        autoComplete
        autoHighlight
        options={fieldop}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
            inputRef={twin}
          />
        )}
      />
      </div>
      <div>
      <div className="d-block mb-4 mb-md-0">
          <h5>Bat or Field</h5>
        </div>
      <Autocomplete
        style={{ width: 500 }}
        placeholder="Search"
        autoComplete
        autoHighlight
        options={tossvalues}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
            inputRef={tos}
          />
        )}
      />
      </div>
      </div>
      <Button onClick={matchup}>Calculate</Button>
      <br></br>
      <div className="d-block mb-4 mb-md-0 mt-4">
          <h5>Predicted Match Winner : Team-{win}</h5>
        </div>
    </>
  );
};
