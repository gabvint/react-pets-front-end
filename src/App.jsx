// src/App.jsx
import { useState , useEffect} from "react";
import * as petService from '../services/petService.js';
import PetList from '../components/PetList.jsx';
import PetDetail from "../components/PetDetail.jsx";
import PetForm from "../components/PetForm.jsx";


const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false)

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

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen)
  }

  const handleAddPet = async (formData) =>  {
    try {

      const newPet = await petService.create(formData)

      if(newPet.error){
        throw new Error(newPet.error)
      }

      setPetList([newPet, ...petList])
      setIsFormOpen(false)

    } catch (error) {
        
        console.log(error)
    }
  }
  return(

      <>
        <PetList
          petList={petList}
          updateSelected={updateSelected}
          handleFormView={handleFormView}
          isFormOpen={isFormOpen}
        />
        {isFormOpen ? (
          <PetForm handleAddPet={handleAddPet} />
        ) : (
          <PetDetail selected={selected} />
        )}
      </>

  ) 
    
};

export default App;
