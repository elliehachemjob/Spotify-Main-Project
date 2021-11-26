import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { IdSaver, TokenSaver, tokenSelector, idSelector } from "./userData";

export function ArtistAlbums() {
  const dispatch = useAppDispatch();
  const id = useAppSelector(idSelector);
  const token = useAppSelector(tokenSelector);

  return <div></div>;
}
