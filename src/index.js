import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Badge from './components/Badge';
//
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';

//const element = document.createElement('h1');
//element.innerText ='Hello , Platzi Badges!';
//const container =document.getElementById('root');
///container.appendChild(element);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

//ReactDOM.render(__que,__donde);

const container=document.getElementById('root');
//const element  =<h1>Hello, Platzi Badges from Reacts! </h1>;
//const element=React.createElement('h1',{},'Hola,Soy los children!');
//const element=React.createElement('a',{href:'https://platzi.com'},'Ir a Platzi!');
//const jsx=(<div><h1>Hola,Soy Rodrigo</h1><p>Ingenieron Front End</p></div>);
//const element=React.createElement('div',{},React.createElement('h1',{},'Hola,Soy Richard!'),React.createElement('p',{},'Soy Ingeniero Font End'));
//ReactDOM.render(element,container);
/*ReactDOM.render(<Badge firstName="Rodrigo" 
	                   lastName="lopez"
	                   avatarUrl="https://www.gravatar.com/avatar?d=identicon"
	                   jobTitle="Frontend Engineer" 
	                   twitter="sparragus" />,container);*/
//ReactDOM.render(<BadgeNew/>,container);
//ReactDOM.render(<Badges/>,container);
ReactDOM.render(<App/>,container);	                   
reportWebVitals();