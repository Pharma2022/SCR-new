
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import useAccordion from '../../hooks/useAccordion';
const Accordion = ({placeholder,title,arr,collectionType }) => {
  const {renderContacts,filterContacts,search,shown,toggleShown,handleChange}=useAccordion(collectionType)
    
      
      return (<> 
                  <h3 onClick={toggleShown} className="flex-row space-between align-center pointer accordion-icon">
                     {title}<FontAwesomeIcon icon={shown ? faChevronUp : faChevronDown} />
                  </h3>
                  {shown&&(
                  <>
                    <input className='search-input' 
                        type="text" 
                        value={search} 
                        onChange={handleChange} 
                        placeholder={`${placeholder} click on email or tel to copy`} />
                    {renderContacts(filterContacts(arr,search))}
                  </>)
          }
          
          
           </>)

}
export default Accordion