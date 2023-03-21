import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Feactured.scss";

function Feactured({type}) {
  return (
    <div className="feactured">
        {type && (
            <div className="catagory">
                <span>{type == 'movie' ? 'Movies' : 'Series'}</span>
                <select name="genre" id="genre">
                    <option value=''>Genre</option>
                    <option value="advanture">Advanture</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantacy">Fantacy</option>
                    <option value="historical">Historical</option>
                    <option value="horrr">Horrer</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                </select>
            </div>
        )}
      <img
        src="https://www.socialsamosa.com/wp-content/uploads/2021/09/3.png"
        alt="Home image"
      />
      <div className="info">
        <img
          src="https://occ-0-2773-993.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRYwssiYqFQk0AMTz6Sk2gJcynwEXm7Z63r-s6aIkwDimtUWoZefgzIsMjMumecjIZWEPE8uoixk_-Acjx57MGODKOw9AGpXTDdPwzwBjSTR2U4COxyFlrtRISIBmHYYtyuEUIvm__G6eMlm0HfP2gEJeq6LnU5O8cdpioXzGlMxJWq1c-qikw.png?r=768"
          alt="title"
        />
        <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sed
            aspernatur? Asperiores molestias debitis facilis tenetur aut nostrum,
            quisquam ut esse minus quis possimus magni neque tempora, unde nihil
            cumque sint. Quos odit optio fugiat iusto numquam dicta itaque, incidunt
            quod eum quis vel quo facilis debitis accusamus voluptatibus quae?
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Feactured;
