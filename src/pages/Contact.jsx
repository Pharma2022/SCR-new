import Accordion from '../components/contact components/Accordion';
import useFirestoreCollection from '../hooks/useFirestoreCollection';
import LoginAuth from '../components/auth/Login';
const Contact = () => {


const GPs=useFirestoreCollection('gp-list').data
 const Pharmacies=useFirestoreCollection('chemists').data
 const medicinesInfo=useFirestoreCollection('medsinfo').data
  const anticoag=useFirestoreCollection('anticoag').data
  return (
    <div className='flex-row'>
        <div className="container flex-col contact-page">
          <h2>Contacts</h2>

          <Accordion
            collectionType={ 'medsinfo'}
            placeholder={'Search Medicines Information Centres'}
            title='Medicines Information Services'
            arr={medicinesInfo}
          />
          <Accordion
            collectionType={ 'anticoag'}
            placeholder={'Search Anticoagulation Centers'}
            title='Anticoagulation Clinics'
            arr={anticoag}
          />
          <Accordion
            collectionType={'chemists'}
            placeholder={'Search Community Pharmacies'}
            title='Community Pharmacies'
            arr={Pharmacies}
            />
          <Accordion
            collectionType={'gp-list'}
            placeholder={'Search GP Surgeries'}
            title='GP Practices'
            arr={GPs}
            />
        </div>

        <LoginAuth/>
        
    </div>
  );
};

export default Contact;
