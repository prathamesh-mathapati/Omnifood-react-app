import './components/All.css';
import NavBar from './components/NavBar'
import SectionHero from './components/SectionHero'
import SectionFatured from './components/SectionFatured';

import SectionHow from './components/SectionHow';
import SectionMeals from './components/SectionMeals';
import SectonTeatimonial from './components/SectonTeatimonial'
import SectionPricing from './components/SectionPricing'

import SectionCta from './components/SectionCta'
import Footer from './components/Footer'
import  './components/All.css'

function App() {
  return (
    <div className='sticky'>
     <NavBar></NavBar>
     <SectionHero></SectionHero>
     <SectionFatured></SectionFatured>
     <SectionHow></SectionHow>
     <SectionMeals></SectionMeals>
     <SectonTeatimonial></SectonTeatimonial>
     <SectionPricing></SectionPricing>
     <SectionCta></SectionCta>
     <Footer></Footer>

    </div>
  );
}

export default App;
