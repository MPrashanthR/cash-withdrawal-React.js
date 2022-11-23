import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {bal: 2000}

  cashBtn = val => {
    this.setState(PrevState => ({
      bal: PrevState.bal - val,
    }))
  }

  render() {
    const {bal} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {bal}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                cash={eachDenomination}
                cashBtn={this.cashBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
