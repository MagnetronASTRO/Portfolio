import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['pl', 'en'],
    fallbackLng: 'pl',
    debug: false,
    // Options for language detector
    detection: {
      order: ['cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

const loadingMarkup = (
  <div
    style={{
      textAlign: 'center',
      position: 'relative',
      marginTop: '50%',
      fontSize: '34px',
    }}
  >
    {' '}
    <h2>loading...</h2>
  </div>
);
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
