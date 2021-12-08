import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";


import logo from '../../logo.svg';
import '../../App.css';

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CContainer,CRow,CCol,CForm,CFormLabel
,CFormInput,CFormText,CButton,CModal,
CModalHeader,CModalTitle, CPopover, CTooltip,
CModalBody, CModalFooter,CLink,CHeaderText,CAlert
  } from '@coreui/react';

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';



function Buy (){
	
  const navigate = useNavigate();

  
  

  useEffect(() => {
	  
	
  },[]);
  
  
  

  

	return (
	
    <div className="App">
	
	
      <header className="App-header">

	  
	   <CButton color="light" size="lg" > Fake Product Identification System Using Blockchain</CButton>
	   
	   <br/>
	   
			  <CIcon icon={icon.cilAppsSettings} size="9xl"/>
			  
			  <br/>
			  
	  
			
			<CButton onClick={() => null }>Admin Login</CButton>
			 
      </header> 
	  
    </div>
	
	)
}

export default Buy;
