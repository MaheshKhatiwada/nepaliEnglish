import React,{useState} from 'react'
import {I18nProvider} from "../src/i18n"
import {LOCALES} from "../src/i18n"
import { FormattedMessage } from 'react-intl';

import './App.css';

function App() {
  const [locale,setLocale]=useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={locale}>
    <div className="App">
      <button onClick={()=>setLocale(LOCALES.ENGLISH)}>English</button>
      <button onClick={()=> setLocale(LOCALES.NEPALI)}>Nepali</button>
      <div>

      <FormattedMessage id="name"/>
      </div>
    </div>
    </I18nProvider>
  );
}

export default App;
