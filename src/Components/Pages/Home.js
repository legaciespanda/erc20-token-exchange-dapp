import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";


import logo from '../../logo.svg';
import '../../App.css';

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CContainer,CRow,CCol,CForm,CFormLabel
,CFormInput,CFormText,CButton,CModal,
CModalHeader,CModalTitle, CPopover, CTooltip,
CModalBody, CModalFooter,CLink,CHeaderText 
  } from '@coreui/react';

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';



import Footer from '../Uis/Footer';
import Header from '../Uis/Header';


function Home (){
	
	  const navigate = useNavigate();
 
  
    useEffect(() => {
	  
	
  },[]);
  
	
	return (
		 <div>
			<Header />
			<Footer />
		</div>
	) 
}

export default Home
