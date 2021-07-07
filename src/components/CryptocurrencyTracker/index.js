// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptoCurrenciesData: [], isLoading: false}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({cryptoCurrenciesData: updatedData, isLoading: true})
  }

  renderCryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state
    return <CryptocurrenciesList cryptoData={cryptoCurrenciesData} />
  }

  render() {
    const {cryptoCurrenciesData, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          this.renderCryptocurrenciesList()
        ) : (
          <div className="loader" testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
