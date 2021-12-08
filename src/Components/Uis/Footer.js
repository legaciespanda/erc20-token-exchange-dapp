import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";



import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CFooter, CLink } from '@coreui/react'

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';



function Footer (){


	return (
	
    <div className="App">
	
	
		<CFooter>
		  <div>
			<CLink href="https://megtrix.com">ErnestoPay</CLink>
			<span>&copy; 2021 ErnestoPay</span>
		  </div>
		  <div>
			<span>Powered by</span>
			<CLink href="https://megtrix.com">Megtrix</CLink>
		  </div>
		</CFooter>
	  
    </div>
	
	)
}

export default Footer;
