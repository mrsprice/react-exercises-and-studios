import { useState } from 'react';

export default function StatusChange () {
   const [notes, setNotes] = useState('');
   const [recipeStatus, setrecipeStatus] = useState(false);

   const handleChange = (event) => {
      recipeStatus(event.target.value)
   }

   const handleSubmit = (event) => {
      alert("Recipe Submitted");
      event.preventDefault();
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe Notes aren't here!</p>

         <p>I have not tried this recipe!</p>
      </div>
   );
}
