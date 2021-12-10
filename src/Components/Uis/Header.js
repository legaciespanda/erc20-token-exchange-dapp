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

import Web3 from "web3";
import Web3Modal from "web3modal";

//importing providers
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import Torus from "@toruslabs/torus-embed";

import ls from 'local-storage';


function Header (){

  const navigate = useNavigate();

  const [provider, setProvider] = useState('');
  //const [web3Modal, setweb3Modal] = useState('');
  let web3Modal;
  const [connected, setConnected] = useState(ls.get('connected'));
  
  
  
  
  
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
 
 
  
	async function  connectWallet() {
		
		  console.log("Opening a dialog");
		  try {
			setProvider(await web3Modal.connect());
			//redirect to exchange page when user has connected to a wallet
			if(isConnected){
				navigate('/exchange');
			}
			
			//save value to local storage
			ls.set('connected', true);
		  } catch(e) {
			console.log("Could not get a wallet connection", e);
			return;
	   }
	   
	}
	
    //function to check if user wallet is connected to any active network
	function isConnected(){
		return web3Modal.connect();
	}
	
	useEffect(() => {
		  
		initWeb3Modal();
		
		if(connected){
			navigate('/exchange');
		}	
		
		
	  },[]);
	
	return (
	      
		  <header className="App-header">

	  
		   <CButton color="light" size="lg" > Welcome To ErnestoExchange - Buy or exchange ErnestCoin (ECN) with your own cyptocurrency </CButton>
		   <br/>
				  <CIcon icon={icon.cilAppsSettings} size="9xl"/>
				  
				  <br/>
				  
		   <CButton color="danger" size="lg" > Access Denied </CButton>
		    <br/>
		   <CButton color="warning" size="lg" > Please You Need To Connect Your Wallet To Proceed To Exchange Page </CButton>
		    <br/>
				  
		  
				
				<CButton onClick={() => connectWallet() }>Connect Your Wallet</CButton>
				 
		  </header> 

	) 
}

export default Header
