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
          placeholder="Movie Title..." 
          onChange={handleInput}
          />
        </label></div>
     
    </>
  );
}

export default FiltersMoviesTitle;
