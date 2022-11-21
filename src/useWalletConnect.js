import { useState } from 'react'


export default function useWalletConnect() {
  var jQueryScript = document.createElement('script');
  jQueryScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.1/dist/umd/index.min.js');
  document.head.appendChild(jQueryScript);

  const [isConnected, setIsConnected] = useState(false)
  const walletConnect = async () => {
    const WalletConnectProvider = window.WalletConnectProvider
    var provider = new WalletConnectProvider.default({
      rpc: {
        1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
        137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
        80001: "https://matic-mumbai.chainstacklabs.com/",
        56: "https://bsc-dataseed.binance.org/"
      },
      bridge: 'https://bridge.walletconnect.org',
    });
    console.log(provider.connected);
    await provider.enable();
    setIsConnected(provider.connected)
  }
  return [isConnected, walletConnect]
}
