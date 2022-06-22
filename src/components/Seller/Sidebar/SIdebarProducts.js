

import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCube} from 'react-icons/fa'
import './SidebarProduct.Module.css'
import {FaRegHeart} from 'react-icons/fa'
import {FaDollarSign} from 'react-icons/fa'

function SidebarProducts (){
    return(
        <div className='card-test'>
            <div className='card-body'>
                <h5 className='px-3 pt-1'>Kategory</h5>
                <ListGroup className='py-2 text-decoration' variant="flush">
     
                <ListGroup.Item className='py-3'>
                <Link to='' className='text-decoration'>
                <i type='button' className='link'><FaCube/> Semua Product</i> 
                </Link>
                </ListGroup.Item>
    
           <ListGroup.Item className='py-3'>
                <Link to='' className='text-decoration'>
                <i type='button' className='link'><FaRegHeart style={{color: '#8A8A8A'}}/> Diminati</i> 
                </Link>
             </ListGroup.Item>
            <ListGroup.Item className='py-3'>
            <Link to='' className='text-decoration'>
            <i type='button' className='link'><FaDollarSign style={{color: '#8A8A8A'}}/> Terjual</i> 
            </Link>
            </ListGroup.Item>
        </ListGroup>
        </div>
        </div>
    )
}
export default SidebarProducts;