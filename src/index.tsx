/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { ModelClient, ModelManager } from "@adobe/aem-spa-page-model-manager";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ModelManager.initializeAsync({
  modelClient: new ModelClient('https://publish-p47369-e228224.adobeaemcloud.com'),
  path: '/content/wknd-app/us/en/home.model.json'
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);