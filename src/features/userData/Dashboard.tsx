import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import "../../App.css";
import SearchComponent from "./SearchComponent";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { IdSaver, TokenSaver, tokenSelector, idSelector } from "./userData";

export function Dashboard() {
  const dispatch = useAppDispatch();

  const id = useAppSelector(idSelector);
  const token = useAppSelector(tokenSelector);

  const [searchQuery, setSearchQuery] = useState<string>("a");
  const [value, setValue] = useState<any>();
  const [items, setItems] = useState<any>();

  const searchArtist = (e: any) => {
    setSearchQuery(e.target.value);

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track%2Cartist`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        setItems(response.data);
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <SearchComponent searchQuery={searchQuery} onChange={searchArtist} />
      <div className="container">
        {items
          ? items.artists?.items
              ?.filter((item: any) =>
                item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
              )

              .map((filteredItem: any) => {
                return (
                  <Link to="/artist/albums/">
                    <Card
                      onClick={() => {
                        dispatch(IdSaver(filteredItem.id));
                      }}
                      className="item"
                      sx={{ maxWidth: 300 }}
                    >
                      <CardContent>
                        {filteredItem.images
                          .filter((img: any) => img.height === 160)
                          .map((img: any) => {
                            return (
                              <img
                                src={
                                  !img.url
                                    ? "https://www.legal.ca/public/uploads/images/noimage.jpg"
                                    : img.url
                                }
                              />
                            );
                          })}

                        <Typography>{filteredItem.name}</Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {filteredItem.followers.total} followers
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {filteredItem.popularity} popularity
                        </Typography>

                        <Typography
                          sx={{ position: "relative", top: 30 }}
                          color="text.secondary"
                        >
                          {filteredItem.total_tracks} tracks
                        </Typography>
                        <Rating
                          style={{ position: "relative", top: 25, right: 4.5 }}
                          name="simple-controlled"
                          value={filteredItem.popularity > 40 ? 5 : 3}
                          // onChange={(event, newValue) => {
                          //   setValue(5);
                          // }}
                        />
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
          : null}
      </div>
    </div>
  );
}
