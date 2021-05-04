import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";



const Search = ({hideButtons = false}) => {
    const [{}, dispatch] = useStateValue();
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: searchText
    })
    history.push("./search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
        placeholder="Search Google or type a URL"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
          <div className="search__buttons">
          <Button variant="outlined" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
        <Button className="search__buttonsHidden" variant="outlined" type="submit" onClick={search}>
          Google Search
        </Button>
        <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
      </div>
      )}
    </form>
  );
};

export default Search;
