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


function Header (){

  
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
			provider = await web3Modal.connect();
		  } catch(e) {
			console.log("Could not get a wallet connection", e);
			return;
	   }
	}
	
	async function disconnectWallet(){
		  //console.log("Killing the wallet connection", provider);

		  // TODO: Which providers have close method?
		  /**if(provider.close) {
			await provider.close();

			// If the cached provider is not cleared,
			// WalletConnect will default to the existing session
			// and does not allow to re-scan the QR code with a new wallet.
			// Depending on your use case you may want or want not his behavir.
			await web3Modal.clearCachedProvider();
			provider = null;
		  }*/
		  //const web3Modal2 = new Web3Modal({ cacheProvider: false });
			await web3Modal.clearCachedProvider();
			provider = null;
		  
	}
	
		//function to check if user wallet is connected to any active network
	function isConnected(){
		return web3Modal.connect();
	}
	
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
				  
		  
				
				<CButton onClick={() => null }>Connect Your Wallet</CButton>
				 
		  </header> 

	) 
}

export default Header
