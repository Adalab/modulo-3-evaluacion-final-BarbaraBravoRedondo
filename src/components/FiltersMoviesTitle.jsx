function FiltersMoviesTitle({info,updateInput,title}) {

  
  const handleInput=(ev)=>{
 updateInput(ev.target.value)
  }



  return (
    <>
      
        <label htmlFor="">Movie
          <input 
          type="text" 
          name="movie"
          value={title}
          id=""
          placeholder="Escribe aquí la pelicula.." 
          onChange={handleInput}
          />
        </label>
     
    </>
  );
}

export default FiltersMoviesTitle;
