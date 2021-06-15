import React, { useEffect } from 'react';
import contenido from './contenido';
import Default from './Content/Default';

const Content = (items) => {
 return (
  <div>
   {!window.location.hash ? <Default items={items} /> : null}
   {contenido.map((item) => {
    if (window.location.hash === item.name) {
     return item.content;
    }
   })}
  </div>
 );
};

export default Content;
