import { useState } from 'react';
import {ethers} from 'ethers'

function useMetamask(setIsLoading, setErrorMessage) {
  // web3 instance
  const [provider, setProvider] = useState(null);
  // active account
  const [account, setAccount] = useState('');
  // connect this function to a button click event
  const [network, setNetwork] = useState(null)
  const [balance, setBalance] = useState(null)
  const connectMetamask = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      // ensure Metamask is installed
      if (!window.ethereum) throw new Error('You should enable Metamask');
      // show Metamask prompt
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      // connect Metamask to web3.js and get a web3 provider instance
      const web3 = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3);
      // refresh account on change
      window.ethereum.on('accountsChanged', (accounts) =>
        setAccount(accounts[0]),
      );
      const _balance = await web3.getBalance(accounts[0])
      setBalance(ethers.utils.formatEther(_balance))
      const _network = await web3.getNetwork()
      console.log(_network)
      setNetwork(_network)
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  // connect this function to a disconnect button
  const disconnect = () => {
    setProvider(null);
    setAccount('');
  };
  return { connectMetamask, disconnect, provider, account, network, balance };
}

export default useMetamask;
