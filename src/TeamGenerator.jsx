import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import "./TeamGenerator.css";
import LotteryAnimation from "./lottery.json";
import lotterySfx from "./lottery.mp3";
import { daftarBuah } from "./mock";
import slotSfx from "./slot.mp3";
import winSfx from "./win.mp3";

const TeamGenerator = () => {
  const [players, setPlayers] = useState("");
  const [numTeams, setNumTeams] = useState(13);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const [playSlot] = useSound(slotSfx, {
    interrupt: true,
  });

  const [play, { stop }] = useSound(lotterySfx, {
    interrupt: true,
  });

  const [playWin] = useSound(winSfx, {
    interrupt: true,
  });

  const generateTeams = () => {
    // Process the player names and generate teams
    setLoading(true);
    let processedPlayers = players.split(/\r?\n/);
    processedPlayers = processedPlayers.filter((player) =>
      /[a-z]/i.test(player)
    );
    const numberOfTeam = numTeams - 1;
    const teamsArray = Array.from({ length: numberOfTeam }, () => []);

    let curTeam = 0;
    while (processedPlayers.length > 0) {
      const rndIndex = Math.floor(Math.random() * processedPlayers.length);
      const player = processedPlayers.splice(rndIndex, 1);
      teamsArray[curTeam].push(player);

      curTeam = (curTeam + 1) % numberOfTeam;
    }

    // Update the state to trigger a re-render and display the teams with animation
    setTeams(teamsArray);

    setTimeout(() => {
      setLoading(false);
      playWin();
    }, 15000);
  };

  useEffect(() => {
    // Animasi untuk menampilkan tim satu per satu dalam waktu 2 detik
    const teamsElements = document.getElementsByClassName("team-item");
    for (let i = 0; i < teamsElements.length; i++) {
      teamsElements[i].style.animation = "fadeInAnimation 1s ease-in-out";
      teamsElements[i].style.animationDelay = `${i * 2}s`; // Menambahkan delay sebelum animasi muncul
    }
  }, [teams]);

  useEffect(() => {
    if (loading) {
      play();
    } else {
      stop();
    }
  }, [loading]);

  const countplay = players.split(/\r?\n/);

  const handleClick = () => {
    playSlot();
  };

  return (
    <div className="teamgen-wrapper" onClick={handleClick}>
      <div className="leftdiv">
        <h2>List Pemain</h2>
        <label htmlFor="players">- Tulis namanya dibawah -</label>
        <textarea
          spellCheck="false"
          id="players"
          cols="25"
          rows="19"
          value={players}
          onChange={(e) => setPlayers(e.target.value)}
        />
        <div
          style={{
            background: "red",
            width: "fit-content",
            padding: "5px",
            borderRadius: "10em",
            position: "absolute",
            marginTop: "-60px",
            marginLeft: "140px",
          }}
        >
          PEMAEN {countplay.length}
        </div>
        <p className="number-of-teams">
          Berapa Tim Pingpong
          <input
            type="number"
            id="num-teams"
            value={numTeams}
            min="2"
            onChange={(e) => setNumTeams(Number(e.target.value))}
          />
        </p>
        <button className="generate-btn" onClick={generateTeams}>
          Gaskeun!
        </button>
      </div>
      <div className="teams-list">
        <h2>Hasil</h2>
        <p>- Tim bakal muncul dimarih -</p>
        {loading ? (
          <Lottie animationData={LotteryAnimation} />
        ) : (
          <div className="teams">
            {teams.map((team, index) => (
              <p key={index} className="team-item">
                TIM {daftarBuah[index]}: {team.join(", ")}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamGenerator;
