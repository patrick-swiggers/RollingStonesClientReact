import React from 'react';

const SingleSong = ({ item }) => (
  <tr>
    <td>{item.single}</td>
    <td>{item.year}</td>
  </tr>
);

export default SingleSong;