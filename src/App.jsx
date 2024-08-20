// src/App.jsx
import { useState , useEffect} from "react";
import * as petService from '../services/petService.js';
import PetList from '../components/PetList.jsx';

const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
  
      const fetchPets = async () => {
        try {
          const pets = await petService.index()
          if (pets.error){
            throw new Error(pets.error);
          }

          setPetList(pets)

        } catch (error) {
          console.log(error)
        }
      }
      fetchPets()
  }, []) 

  const updateSelected = (pet) => {
    setSelected(pet)
    console.log(pet)
  } 

  return(
    <>
      <h1>Hello world!</h1>
      <PetList petList={petList} updateSelected={updateSelected} />
    </>
  ) 
    
};

export default App;
