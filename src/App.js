import './App.css';
import { useState } from 'react';
import useMetamask from './useMetamask';
import ethLogo from './ethLogo.png'
import metamaskLogo from './Metamask-logo.png'
function App() {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState('')
  const { connectMetamask, account, balance} = useMetamask(setIsLoading, setErrorMessage)
  
  return (
    <div className="active">
      <h1 className="title" onClick={connectMetamask}>Hover Me!</h1>


      <div class="card">
        <div class="card__front card__part">
          <img class="card__front-square card__square" src={ethLogo} alt="NO IMG"/>
            <img class="card__front-logo card__logo" src={metamaskLogo} alt="NO IMG"/>
              <p class="card_numer">{account.slice(0,4)+" "+account.slice(4,8)+" "+account.slice(-8,-4)+" "+account.slice(-4)}</p>
              <div class="card__space-75">
                <span class="card__label">Card holder</span>
                <p class="card__info">John Doe</p>
              </div>
              <div class="card__space-25">
                <span class="card__label">Balance</span>
                <p class="card__info">{String(balance).slice(0,3)+"ETH"}</p>
              </div>
            </div>

            <div class="card__back card__part">
              <div class="card__black-line"></div>
              <div class="card__back-content">
                <div class="card__secret">
                  <p class="card__secret--last">420</p>
                </div>
                <img class="card__back-square card__square" src={metamaskLogo} alt="NO IMG"/>
                  <img class="card__back-logo card__logo" src={ethLogo} alt="NO IMG"/>

                  </div>
              </div>

            </div>
        </div>
        );
}

        export default App;
