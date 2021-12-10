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

import DePayWidgets from '@depay/widgets';

import Web3 from "web3";
import Web3Modal from "web3modal";

//importing providers
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import Torus from "@toruslabs/torus-embed";

import ls from 'local-storage';

function Buy (){
	
  const navigate = useNavigate();
  let provider, web3Modal;
  const [connected, setConnected] = useState(ls.get('connected'));
  //let { unmount } = await DePayWidgets.Payment({});
  
   //initializing web3
   function initWeb3Modal() {
	  
	  const providerOptions = {
		walletconnect: {
		  package: WalletConnectProvider,
		  options: {
			// Mikko's test key - don't copy as your mileage may vary
			infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
		  }
		},
		fortmatic: {
		  package: Fortmatic,
		  options: {
			// Mikko's TESTNET api key
			key: "pk_test_391E26A3B43A3350"
		  }
		},
		portis: {
			package: Portis, // required
			options: {
			  id: "PORTIS_ID" // required
			}
		  },
		  torus: {
			package: Torus, // required
			options: {
			  networkParams: {
				host: "https://localhost:8545", // optional
				chainId: 1337, // optional
				networkId: 1337 // optional
			  },
			  config: {
				buildEnv: "development" // optional
			  }
			}
		  }
	  };
		
		web3Modal = new Web3Modal({
		  network: "mainnet", // optional
		  cacheProvider: true, // optional
		  providerOptions // required
		});
		
	   const web3 = new Web3(provider);
	   
 }
  
	async function disconnectWallet(){
			//clear cache
			await web3Modal.clearCachedProvider();
			
			//clear local storage
			ls.remove('connect');
			ls.clear();
			
			//redirect user to home page
			navigate('/');
		  
	}
	
	//function to check if user wallet is connected to any active network
	function isConnected(){
		return web3Modal.connect();
	}
	
  
    
  const displayDp = async ()=>{
	  	  await DePayWidgets.Sale({
	
			tokenImage: 'https://depay.fi/favicon.png',
			  sell: {
				'ethereum': '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
			  },
			   blockchain: 'ethereum',
			  token:{
				  'ethereum': '0xad025D14f8528B35f17C76C04c4bb07FC14434bc',
			  },
			  amount: {
				start: 1,
				step: 1,
				min: 1
			  }
	    });
  }
  
  
	useEffect(() => {
		  
		initWeb3Modal();
		
		if(!connected){
			navigate('/');
		}
		
	  },[]);
  

	return (
	
		<CContainer className="mt-3" >
		  <CRow>
			<CCol className="align-self-center" ><CButton onClick={() => displayDp() }>Exchange Now</CButton></CCol>
			<CCol className="align-self-center" ><CButton color="danger"  onClick={() => disconnectWallet() }>Disconnect Wallet</CButton></CCol>
		  </CRow>
		  
		</CContainer>
		
	)
}

export default Buy;
