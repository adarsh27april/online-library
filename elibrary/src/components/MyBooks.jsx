import React, { useState, useEffect, useContext } from 'react';
//import Layout from './Layout';
import { userBooks } from '../apiCalls';
import Card from './Card';
import { AuthContext } from '../context/AuthContext';
import Menu from './Menu';
//import Search from './Search';
//import 'fontsource-roboto';
//import Copyright from './Copyright';

const Books = () => {
  const [myBooks, setMyBooks] = useState([]);
  const {user} = useContext(AuthContext);

  //const [productsByArrival, setProductsByArrival] = useState([]);
  //const [error, setError] = useState([]);

  const loadProductsBySell = () => {
    userBooks(user._id).then((data) => {
        setMyBooks(data);
      
    });
  };

 

  useEffect(() => {
    loadProductsBySell();
    console.log(myBooks);
  }, []);

  return (
    <div>
	<Menu />
      <div className='row' style={{paddingTop:"50px"}}>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          

          <h2 className='mb-2 mt-4'>Purchased Books</h2>
          <div className='row'>
            {myBooks.map((product, i) => (
              <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
      </div>
      
    
  );
};

export default Books;
