import React, {useState, useEffect} from 'react';

const AllPuppies = () => {
    //state to store the fetched data 
    const [puppies, setPuppies] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players');
                console.log(response);
                const jsonData = await response.json();
                console.log(jsonData);
                setPuppies(jsonData.data.players);
            } catch (error) {
                console.error('error fetching data:', error);
            }
        };

        fetchData();  
       
    },[]); //empty array -> ensure the effect runs only once on mount 

    console.log(puppies);  

    return (
        <div>
        <br></br>
        {Array.isArray(puppies) && puppies.length > 0 ? (
          <ul className="image-grid">
            {puppies.map((puppy) => (
                <ul key={puppy.id} className="grid-item">
                    <img 
                    src={puppy.imageUrl} 
                    alt={puppy.name} 
                    style={{width:'auto'}} className="grid-image" />
                    <p>{puppy.name}</p>
                    <button>See Details</button>
                </ul>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
          
        )}
      </div>
      
    );
  };

  
  
  export default AllPuppies;
//         <div>
//             <h1>Data from Api: </h1>
//             { puppies ? (
//                 <ul> 
//                     {puppies.map((puppy) => (
//                         <li key={puppy.id}>{puppy.name}</li>
//                     ))}
//                 </ul>
//             ):( 
//                 <p>loading...</p>
//             )}
//         </div>
//     );
// }
// export default AllPuppies;