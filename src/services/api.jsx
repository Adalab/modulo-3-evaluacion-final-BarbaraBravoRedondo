// import { v4 as uuidv4 } from 'uuid';

const callToApi = () => {
  // Llamamos a la API y convertimos la respuesta en formato JSON
  return fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data
      
        .map((data,index) => {
          //const id = uuidv4();
         // console.log(`Generated ID: ${id}`);
          return {
            id: data.timestamp,
            poster: data.poster,
            movie: data.movie,
            year: data.year,
            phrase: data.full_line,
            audio: data.audio,
          };
        });
      return cleanData;
    });
};

export default callToApi;
