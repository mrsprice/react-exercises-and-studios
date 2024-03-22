import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setBoardName] = useState('no boards yet!');
   const [boards, setBoards] = useState([
      {label: "Soups", value: "Soups"},
      {label: "Sides", value: "Sides"},
      {label: "Suppers", value: "Suppers"}
   ]);

   const handleChange = (event) => {   
      setBoardName(event.target.value);
   };

   const boardOptions = boards.map((board, index) => (
      <option key = {index} value={board.value}>
         {board.label}
      </option>
   ))

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
