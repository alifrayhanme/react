import React, { useState } from "react";
import Artist from "./ArtistData";

export const SF_Artist = () => {
  const [artists, setArtists] = useState(Artist);

  const deleteArtist = (id) => {
    const newArray = artists.filter((a) => {
      return a.id !== id;
    });

    setArtists(newArray);
  };

  const addArtist = () => {
    const alif = { id: 6, name: "alif rayhan" };
    const newArray = [...Artist, alif];
    setArtists(newArray);
  };

  const editArtist = (id) => {
    const edit = artists.map(function (a) {
      if (a.id === id) {
        a.name = a.name + "alif"
      }
      return a;
    });

    setArtists(edit);
  };

  return (
    <div>
      <button onClick={addArtist}>Add Artist</button>
      <ul className="space-y-2 m-5">
        {artists.map(function (a) {
          return (
            <li key={a.id}>
              {a.name}
              <button
                className="border-2 rounded-sm border-red-600"
                onClick={() => deleteArtist(a.id)}
              >
                Delete
              </button>{" "}
              <button onClick={() => editArtist(a.id)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
