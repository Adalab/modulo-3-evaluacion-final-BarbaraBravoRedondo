function FiltersMoviesTitle({info,updateInput,title}) {

  
  const handleInput=(ev)=>{
 updateInput(ev.target.value)
  }



  return (
    <><div className="searchName" >
      
        <label className="label" htmlFor="">Movie
          <input 
          className="boxI"
          type="text" 
          name="movie"
          value={title}
          id=""
          placeholder="Escribe aquí la pelicula.." 
          onChange={handleInput}
          />
        </label></div>
     
    </>
  );
}

export default FiltersMoviesTitle;
