import React from "react";
import { nanoid, } from "nanoid";

const errorMessage=<span>Error please check your input and try again or use FreeType instead </span>

export const sortMyMeds=(inputText,sort)=>{
    let lines = inputText.split('\n');
    

      const filterArr=['reason for medication','date discontinued',`number of repeats authorised`,`supporting information`,`date cancelled`,]
      const filterArrWithStar=filterArr.map(item=>`***${item}`)
      const finalFilterArr=[...filterArr,...filterArrWithStar]


    // Process lines and filter out disruptive lines
    let cleanedLines = lines.filter(line => !finalFilterArr.some(item => line.toLowerCase().startsWith(item.toLowerCase())));
    
    // Join cleaned lines to form the output
    const cleaned_spaces = cleanedLines
      .map(item => item.split('\n'))
      .filter(item => item[0] !== '')
      .flat();
    if (cleaned_spaces.length%5){
      return (errorMessage)
    }
    
    // Generate the extractionIndices dynamically based on the length of cleaned_spaces
    const extractionIndices = [];
    for (let i = 0; i < cleaned_spaces.length; i += 5) {
     sort?  extractionIndices.push(i + 2, i + 3): extractionIndices.push(i+1,i + 2, i + 3);
    }
  


    // Extract elements based on the dynamically generated extractionIndices
    const extractedItems = extractionIndices
      .filter(index => index >= 0 && index < cleaned_spaces.length) // Ensure valid indices
      .map(index => cleaned_spaces[index]);

    
    let uniqueConcatenatedPairs = new Set();
    
    // Loop through the extractedItems array
    for (let i = 0; i < extractedItems.length; i += sort?2:3) {
      let pair = sort? extractedItems.slice(i, i + 2) : extractedItems.slice(i, i + 3);
      const acuteDate=`${pair[0].split(': ')[1]}: `
      const acuteDrugAndDose=pair.slice(-2)

      let concatenatedPair = sort? pair.join(' ') :[acuteDate,...acuteDrugAndDose].join(" ")
      uniqueConcatenatedPairs.add(concatenatedPair);
    }
    
    // Convert the Set back to an array if needed
    let concatenatedPairsArray = Array.from(uniqueConcatenatedPairs)
    
    const finalArr= sort? concatenatedPairsArray.sort((a, b) => a.localeCompare(b)) :concatenatedPairsArray


    return (<ul>{finalArr.map(item=>(<li>{item}</li>))}
    </ul>)
    }

export function sortRepeats(str) {
  const medsArr = [];
  const medsStrArr = str.split(/\n(?=Repeat)/);
  for (let i = 0; i < medsStrArr.length; i++) {
    const medStr = medsStrArr[i].trim();
    const medObj = {};
    let [repeatType, issueDate, name, instructions, quantity] = medStr.split(/\t/);
    medObj.repeatType = repeatType;
    medObj.issueDate = issueDate.split(": ")[1];
    medObj.name = name;
    medObj.instructions = instructions;
    medObj.quantity = quantity;
    let supportingInfoMatch = medStr.match(/Supporting Information: \[(.*)\]/);
    if (supportingInfoMatch) {
      medObj.supportingInformation = supportingInfoMatch[1];
    }
    // handle 'Authorised (not issued):' case
    let authorisedMatch = medStr.match(/Authorised(?: \(not issued\))?: ([^\t]*)/);
    if (authorisedMatch) {
      medObj.authorisedDate = authorisedMatch[1];
    }
    medsArr.push(medObj);
  }
  medsArr.sort((a, b) => a.name.localeCompare(b.name));
    
    return   <ol>
    {medsArr.map(({name,instructions})=>(<li key={nanoid()}>{name} {instructions}  </li>))}    </ol>
  }
  

  export function sortAcutes(str) {
    const medsArr = [];
  const medsStrArr = str.split(/\n(?=Acute Medication)/);
  for (let i = 0; i < medsStrArr.length; i++) {
    const medStr = medsStrArr[i].trim();
    const medObj = {};
    const [prescribedStr, name, instructions, quantity] = medStr.split(/\t/);
    medObj.prescribed = prescribedStr.split(": ")[1];
    medObj.name = name;
    medObj.instructions = instructions;
    medObj.quantity = quantity;
    medsArr.push(medObj);
  }

  // sort the medications array by name
  medsArr.sort((a, b) => a.name.localeCompare(b.name));
    
    return   <ol>
    {medsArr.map(({name,instructions,quantity})=>(<li key={nanoid()}> {instructions} {quantity} </li>))}    </ol>
  }



  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const daySuffix = getDaySuffix(day);
  


    return isNaN(day) ?null: `${day}${daySuffix} ${month} ${year}`;
  }
  
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
  
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  
  export {formatDate}


  export const sortContactsByName=(contacts)=> contacts.sort(({name:a}, {name:b}) => a.localeCompare(b));
  

  export const arrayModifyForAccordion=arr=>arr.map(({name,postcode,tel,email})=>({name:`${name} ${postcode}`,tel,email })

  )

  export const singleOrDouble= element=>element.split('\n').length?
  <ul style={{marginTop:0}}>{ element.split('\n').map(item=>(<li key={nanoid()}>{item}</li>))  }</ul>:
  <p style={{marginTop:0}}>{element}</p>

  export function addCommaAfterSecondToLastWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');
  
    // Get the second-to-last word
    let secondToLastWord = words[words.length - 2];
  
    // Add a comma after the second-to-last word
    words[words.length - 2] = secondToLastWord + ',';
  
    // Join the words back into a string
    let result = words.join(' ');
  
    return result;
  }

  export const sortInputHie=(input,isAcute=false)=>{
    
    const sliceBool=(item)=>item.startsWith('Not yet')

    const splitText=input.split('\n')
    const filteredText= splitText.filter(item=>item.trim()!=='')
    const dates= filteredText.map(item=>{
    
      return item.slice(0, sliceBool(item)? 15:11)})
    
    const drugAndQuantity=filteredText.map(item=>item.slice( sliceBool(item)? 15:12))
    console.log(drugAndQuantity)
    const meds = drugAndQuantity.map(item=>item.split(',').slice(0,-1).join(""))
      
    const acuteMeds=(meds.map((item,i)=>`${dates[i]}: ${item}`))
    const finalMeds= isAcute? acuteMeds:meds.sort((a, b) =>a.localeCompare(b))
   
    return  <ul>{finalMeds.length===1? <li>{finalMeds}</li>: finalMeds.map(item=>(<li key={nanoid()}>{item}</li>))}
    </ul>
  }