import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { IdSaver, TokenSaver, tokenSelector, idSelector } from "./userData";

export function Login() {
  const dispatch = useAppDispatch();

  const id = useAppSelector(idSelector);
  const token = useAppSelector(tokenSelector);

  console.log(` the id is ${id}`);
  console.log(` the token is ${token}`);

  return (
    <div>
      Login
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(IdSaver(1))}
        >
          -
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(TokenSaver(1))}
        >
          +
        </button>
      </div>
    </div>
  );
}
