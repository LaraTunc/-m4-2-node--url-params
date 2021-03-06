import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import SongListItem from "./SongListItem"

const PopularArtistPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/top50/popular-artist")
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, []);

  console.log("PopularArtistPage.js: songs: ", songs);

  return (
    <>
      <Header pageTitle="Most Popular Artist" />
      <Content>
        <ul>
          {songs.map((element)=>{ 
            return (<SongListItem key={element.rank} song={element}></SongListItem>);
          })}
        </ul>
      </Content>
    </>
  );
};

export default PopularArtistPage;
