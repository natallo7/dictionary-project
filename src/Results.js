import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <section key={index}>
                <Phonetic phonetic={phonetic} />
              </section>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
