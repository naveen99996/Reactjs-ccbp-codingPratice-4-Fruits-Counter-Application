// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="fruits-counter-container">
        <div className="fruits-Container">
          <h1 className="count-texts">
            Bob ate <span className="count">{mangoesCount}</span>mangoes
            <span className="count">{bananasCount}</span>bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                className="fruit-image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.onClickEatMango}
                  className="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                className="fruit-image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.onClickEatBanana}
                  className="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
