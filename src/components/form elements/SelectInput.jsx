import React, { useState, useEffect } from 'react';
import { useFormContext } from '../../context/formContext';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

const SelectInput = ({ name, title, className }) => {
  const { formData, setFormData } = useFormContext();
  const [searchTerm, setSearchTerm] = useState('');
  const chemists = useFirestoreCollection('chemists').data;
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filteredChemists = chemists.filter(chemist =>
      chemist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredChemists);
    setShowSuggestions(true);
  }, [searchTerm, chemists]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectSuggestion = (selectedChemist) => {

    setSearchTerm(selectedChemist.name); // Update the input field with the selected chemist's name
    setSuggestions([]); // Clear suggestions after selection
    setShowSuggestions(false); // Hide suggestions
    // Directly update the chemistNo and nhsMail in the form state
    setFormData(prev => ({
      ...prev,
      chemistName: selectedChemist.name, // Name of the chemist
      chemistNo: selectedChemist.tel, // Update chemistNo
      nhsMail: selectedChemist.email, // Update nhsMail
      odsCode:selectedChemist.ods
    }));
  };

  const handleCancel = () => {
    setShowSuggestions(false);
  };

  return (
    <div className={`form-row flex-col wrap ${className}`}>
      <label htmlFor={name}>{title}</label>
      <input
        type='text'
        name={name}
        value={searchTerm}
        onChange={handleSearchChange}
        // autoComplete="off"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="flex-col suggestions-container">
          {suggestions.map((chemist, index) => (
            <button key={index} onClick={() => handleSelectSuggestion(chemist)} className="suggestion-item">
              {chemist.name}
            </button>
          ))}
          <button key="cancel" onClick={handleCancel} className="suggestion-cancel">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
