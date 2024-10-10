import { nanoid } from "nanoid"

const Links=[
            
{href:"https://portal.spineservices.nhs.uk/nationalcarerecordsservice/app/find_patient", title:'SCR',active:true },
{href:"https://epma.nmh.nhs.uk/", title:'EPMA',active:false},
{href:"https://servicefinder.nhs.uk/login", title:'Service Finder',active:false},
{href:"https://connect.careflowapp.com/", title:'Careflow',active:false},
{href:`https://pharmoutcomes.org/pharmoutcomes/`, title:'DMS',active:false},
{href:`https://nhs.sharepoint.com/sites/msteams_e9b1b6/Lists/Nonformulary%20form`, title:'Non-form form',active:false},
{href:`https://oohstocklist.netlify.app`, title:'Wards Stocklist',active:false},
{href:`http://nmh-vdb04/ReportServer/Pages/ReportViewer.aspx?/Infomatics-01/Inpatient/WardDashboard&Ward=`, title:'Ward Dashboard',active:false},
{href:`https://nhs-my.sharepoint.com/personal/northmid_epmareports_nhs_net/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fnorthmid%5Fepmareports%5Fnhs%5Fnet%2FDocuments%2FEPMA%20Intranet%20Reports%2FMed%20Rec%20Report%2Epdf&parent=%2Fpersonal%2Fnorthmid%5Fepmareports%5Fnhs%5Fnet%2FDocuments%2FEPMA%20Intranet%20Reports`, title:'MedRec Report',active:false},
{href:`https://nhs.sharepoint.com/sites/msteams_e9b1b6/Lists/POD%20savings/AllItems.aspx`, title:'Pod Savings',active:false},
{href:`https://nww.mdsas.nhs.uk/IgD/login.aspx`, title:'IVIG',active:false},
]

const navLinks=Links.map(item=>({...item,id:nanoid()}))
export {navLinks}


  
