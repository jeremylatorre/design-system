import { addons } from '@storybook/addons';
import theme from './ods.theme';
import React from 'react';

import { releases } from '../public/releases.js';

document.addEventListener('DOMContentLoaded', function() {

  // Add version select
  const observeReleaseSelector = () => {
    const callback = function(mutationsList) {
      for (let i = 0, len = mutationsList.length; i < len; i++) {
        if (mutationsList[i].type === 'childList') {
          const urlVersionRegex = /\/(latest|v(\d\.?){3}[^\/]*)\//gmi;
          const selector = document.querySelector('.sidebar-header');
            let element;
            if (urlVersionRegex.test(location.href)) {
              const releasesSelector = document.createElement('select');
              releasesSelector.id = 'release-selector';
              Object.entries(releases).forEach((value) => {
                const option = document.createElement('option');
                option.text = value[0];
                option.value = value[1];
                releasesSelector.appendChild(option);
              });
              element = releasesSelector;

              releasesSelector.onchange = (selection) => {
                const version = selection.target.value === 'latest' ? 'latest' : `v${selection.target.value}`;
                location.pathname = location.pathname.replace(urlVersionRegex, version);
              };
            } else {
              const version = document.createElement('div');
              version.id = 'release-selector';
              version.innerText = Object.keys(releases)[0];
              element = version;
            }
            selector.parentNode.insertBefore(element, selector.nextSibling);
            observer.disconnect();
          break;
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(document.body, { childList: true, subtree: false });
  };

  // trigger a click on ODS Components sections
  const observeItems = () => {
    const callback = function(mutationsList) {
      for (let i = 0, len = mutationsList.length; i < len; i++) {
        if (mutationsList[i].type === 'childList') {
          let items = Array.from(document.querySelectorAll(".sidebar-item[id*='ods-components-'][data-nodetype='group']"));
          if (items.length > 0) {
            items.forEach(item => item.click());
            observer.disconnect();
          }
          break;
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(document.getElementById('root'), { childList: true, subtree: true });
  };

  observeReleaseSelector();
  observeItems();
});

addons.setConfig({
  theme,
  sidebar: {
    renderLabel: item => {
      const badge = item.name
        .replace(/.*\[(.*?)\].*/i, '$1');

      let res = '';
      if(item.name !== badge) {
        res = `badge-${badge}`
      } else if(item.id.includes('--page')) {
        res = 'page';
      } else {
        res = 'folder';
      }

      return (<span className={res} title={res} badge-type={badge}>
                {item.name.replace(/\s?\[.*?\]\s?/gmi, '')}
              </span>);
    },
  },
});
