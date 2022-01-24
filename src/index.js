import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Card(props) {
  return (
    <div className='box'>
      <img className="image" src={props.image} alt='image' width='145px' />
      <div className="block">
       
        <h4><b />{props.head}</h4>
        <p className="clearBtn">{props.description}</p>
        <a className="sxprova" href={props.link}>Click Here</a>
      </div>
    </div>

  );
}
ReactDOM.render(
  <>
    <h3 className="heading_style">Uttarakhand Hill Station's and (Related Blogs)</h3>
    <div className="container">
      <Card image="https://tse4.mm.bing.net/th?id=OIP.N43GWluuzkXHYNEAEUVZwwHaE6&pid=Api&P=0&w=231&h=153"
        head="Mukteshwar hill station"
        description="Mukteshwar is a village and tourist destination in the Nainital district of Uttarakhank
        ,India."
        link="https://en.wikipedia.org/wiki/Mukteshwar#:~:text=Mukteshwar%20is%20a%20village%20and,and%20343%20km%20from%20Delhi."
      />
      <Card image="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/02/Nainital-in-evening-bb2552017.jpg"
        head="Nainital hill station"
        description="Nainital,the charming Himalayan lake town,
        one of the most popular in Uttarakhand ,Northern India."
        link="https://www.tourmyindia.com/hill_stations/nainital.html"
      />
      <Card image="https://www.uttarakhandtourpackages.com/images/hill-station-tours.jpg"
        head="Mussoorie hill station"
        description="Mussoorie,also known as Queen of the hills,is among 
        the most popular hill station of the country. "
        link="https://www.tourmyindia.com/hill_stations/mussoorie.html"
      />
    </div>
  </>,
  document.getElementById('root')
);
