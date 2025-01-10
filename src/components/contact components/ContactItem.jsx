import React, { useState } from 'react';
import ContactItemProperty from './ContactItemProperty';
import Button from '../Button'
import { useAuth } from '../../context/AuthContext';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';
const ContactItem = ({ id, name, email, tel, address = null, postcode = null,ods=null, isChemist=null,collectionType }) => {
  const {currentUser}=useAuth()
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedTel, setEditedTel] = useState(tel);
  const [editedAddress, setEditedAddress] = useState(address);
  const [editedPostcode, setEditedPostcode] = useState(postcode);
  const [editedOds,setEditedOds]=useState(ods)
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isTelCopied, setIsTelCopied] = useState(false);
  const [isOdsCopied,setIsOdsCopied]=useState(false)
  const {updateDocument,deleteDocument}=useFirestoreCollection(collectionType)
  const copyItem = async (item, setIsCopied) => {
    await navigator.clipboard.writeText(item);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const copyEmail =async () => copyItem(email, setIsEmailCopied);
  const copyTel = async() => copyItem(tel, setIsTelCopied);
  const copyOds = async() => copyItem(ods, setIsOdsCopied);
  // Copy functionality remains unchanged

  const handleSave = async (e) => {
    e.preventDefault()
    console.log(id)
    await updateDocument(id, {
      name: editedName,
      email: editedEmail,
      tel: editedTel,
      address: editedAddress,
      postcode: editedPostcode,
      ods:editedOds? editedOds.toUpperCase():""
    });
   

    setIsEditing(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    if (window.confirm('Are you sure you want to delete this contact?')) {
      await deleteDocument(id);
    }
    setIsEditing(false)
  };

  return (
    <div className='contact-item'>
      {isEditing ? (
        <form onSubmit={handleSave} className='container flex-col edit-form'>
          
          <input className='edit-form-input' type="text" name='editedName' value={editedName} onChange={(e) => setEditedName(e.target.value)} placeholder="Name" />
          <input className='edit-form-input' type="email" name='editedEmail' value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} placeholder="Email" />
          <input className='edit-form-input' type="tel" name='editedTel' value={editedTel} onChange={(e) => setEditedTel(e.target.value)} placeholder="Telephone" />
         {isChemist&& <input className='edit-form-input' type="text" name='editedOds' value={editedOds} onChange={(e) => setEditedOds(e.target.value)} placeholder="ODS Code" />}
          <input className='edit-form-input' type="text" name='editedAddress' value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} placeholder="Address" />
          <input className='edit-form-input' type="text" name='editedPostcode' value={editedPostcode} onChange={(e) => setEditedPostcode(e.target.value)} placeholder="Postcode" />
         <div className='flex-row '>
          <Button className='mr-2 copy-button' onClick={handleSave} >Save</Button>
          <Button className='mr-2 copy-button' onClick={() => setIsEditing(false)}>Cancel</Button>

         </div>
        </form>
      ) : (
        <>
          <ContactItemProperty type={'Name'} text={name} />
          <ContactItemProperty type={'Email'} text={email} isCopied={isEmailCopied} copy={copyEmail} />
          <ContactItemProperty type={'Telephone'} text={tel} isCopied={isTelCopied} copy={copyTel} />
         {address&& <ContactItemProperty type={'Address'} text={address} />}
         {isChemist&& <ContactItemProperty type={'ODS Code'} text={ods} isCopied={isOdsCopied} copy={copyOds}/>}
         {postcode&& <ContactItemProperty type={'Postcode'} text={postcode} />}
         
         {currentUser&&(<div className="flex-row">
          <Button className='mr-2 copy-button' onClick={() => setIsEditing(true)}>Edit</Button>
{/*           <Button className='mr-2 copy-button' onClick={handleDelete}>Delete</Button> */}

         </div>)}
        </>
      )}
    </div>
  );
};

export default ContactItem;
