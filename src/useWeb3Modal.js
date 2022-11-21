import Web3Modal from "web3modal";

var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.1/dist/umd/index.min.js');
document.head.appendChild(jQueryScript);

// let WalletConnectProvider = window.WalletConnectProvider.default

export default function useWeb3Modal() {
    const providerOptions = {
        walletconnect: {
            package: window.WalletConnectProvider,
            options: {
                infuraId: "8043bb2cf99347b1bfadfb233c5325c0"
            },
        },
    };

    const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions // required
    });

    async function connectWallets() {
        await web3Modal.connect();
    }
    return [connectWallets]
}
