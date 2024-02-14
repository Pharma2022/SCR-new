import { nanoid } from "nanoid"

const Links=[
            
{href:"https://portal.spineservices.nhs.uk/nationalcarerecordsservice/app/find_patient", title:'SCR',active:true },
{href:"https://epma.nmh.nhs.uk/", title:'EPMA',active:false},
{href:"https://servicefinder.nhs.uk/login", title:'Service Finder',active:false},
{href:"https://connect.careflowapp.com/", title:'Careflow Connect',active:false},
{href:"https://rap-vitals.syhapp.com/vpClinical/Login#/", title:'Vitals',active:false},
{href:`https://pharmoutcomes.org/pharmoutcomes/`, title:'DMS',active:false}
,

]

const navLinks=Links.map(item=>({...item,id:nanoid()}))
export {navLinks}


  