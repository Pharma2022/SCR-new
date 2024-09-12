import { nanoid } from "nanoid"

const Links=[
            
{href:"https://portal.spineservices.nhs.uk/nationalcarerecordsservice/app/find_patient", title:'SCR',active:true },
{href:"https://epma.nmh.nhs.uk/", title:'EPMA',active:false},
{href:"https://servicefinder.nhs.uk/login", title:'Service Finder',active:false},
{href:"https://connect.careflowapp.com/", title:'Careflow Connect',active:false},
{href:`https://pharmoutcomes.org/pharmoutcomes/`, title:'DMS',active:false},
{href:`https://nhs.sharepoint.com/sites/msteams_e9b1b6/Lists/Nonformulary%20form`, title:'Non-formulary form',active:false},
{href:`https://oohstocklist.netlify.app`, title:'All Wards Stocklist',active:false},
{href:`https://nhs.sharepoint.com/sites/msteams_e9b1b6/Lists/POD%20savings/AllItems.aspx`, title:'Pod Savings',active:false},
]

const navLinks=Links.map(item=>({...item,id:nanoid()}))
export {navLinks}


  
