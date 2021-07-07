// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoData} = this.props
    return (
      <div className="bg-container-currency">
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <div className="img-crypto-currency-container">
          <img
            className="crypto-img"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="Cryptocurrency Tracker"
          />
        </div>
        <div className="currency-container-center">
          <div className="currencies-container">
            <div className="upper-items-currency">
              <p className="coin-type">Coin Type</p>
              <div className="inner-currency-container-usd-euro">
                <p className="currency-usd-euro">USD</p>
                <p className="currency-usd-euro">EURO</p>
              </div>
            </div>
            <ul>
              {cryptoData.map(eachCurrency => (
                <CryptocurrencyItem
                  currency={eachCurrency}
                  key={eachCurrency.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
