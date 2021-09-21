import React,{useState} from 'react'
import {I18nProvider} from "../src/i18n"
import {LOCALES} from "../src/i18n"
import { FormattedMessage } from 'react-intl';

import './App.css';

function App() {
  const [locale,setLocale]=useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={locale}>
      <div className="navbar-container">
      <div className="navbar">
        <div className="name"><FormattedMessage id="firstName"/></div>
        <div>
          <ul className="navbar-right">
            <li><FormattedMessage id="home"/></li>
            <li><FormattedMessage id="about"/></li>
            <li><FormattedMessage id="contact"/></li>
          </ul>
        </div>
      </div>

      </div>
    <div className="content">
      <div>
      <button  className="btn" onClick={()=>setLocale(LOCALES.ENGLISH)}>English</button>
      <button  className="btn" onClick={()=> setLocale(LOCALES.NEPALI)}>Nepali</button>

      </div>
      <div>
      <FormattedMessage id="name"/>
      </div>
    </div>
    </I18nProvider>
  );
}

export default App;
