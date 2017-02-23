import React from 'react'
import iScroll from 'iscroll'

import './iscroll.scss'
import ReactIScroll from 'react-iscroll'

class Scroll extends React.Component {

  constructor(props) {
    super(props)

    const list = [];
    const len = 30;

    for (let i = 0; i < len; i++) {
      list.push(i + 1)
    }

    this.state = {
      y: 0,
      isScrolling: false,
      list: list,
      lastId: len,
      iScrollOptions: {
        mouseWheel: true,
        scrollbars: true,
        scrollX: true,
        scrollY: true
      }
    }
  }

  _handleScrollRefresh(iScrollInstance) {
    const hasVerticalScroll = iScrollInstance.hasVerticalScroll

    if (this.state.canVerticallyScroll !== hasVerticalScroll) {
      this.setState({
        canVerticallyScroll: hasVerticalScroll
      })
    }
  };

  _handleScrollStart() {
    this.setState({
      isScrolling: true
    })
  };

  _handleScrollEnd(iScrollInstance) {
    this.setState({
      isScrolling: false,
      y: iScrollInstance.y
    })
  };

  _handleAddRow(ev) {
    ev.preventDefault()

    this.setState(({
      lastId,
      list
    }) => {
      const newId = lastId + 1;

      list.push(newId)

      return {
        lastId: newId,
        list: list
      }
    })
  };

  _handleRemoveRow(ev) {
    ev.preventDefault()

    this.setState(({
      list
    }) => {
      list.shift()
      return {
        list: list
      }
    })
  };

  _handleToggleScroll(ev) {
    ev.preventDefault()

    this.setState(({
      iScrollOptions,
      iScrollOptions: {
        scrollX,
        scrollY
      }
    }) => {
      return {
        iScrollOptions: Object.assign({}, iScrollOptions, {
          scrollX: !scrollX,
          scrollY: !scrollY
        })
      }
    })
  }

  render() {
    const {
      canVerticallyScroll,
      list,
      iScrollOptions,
      isScrolling
    } = this.state;
    const listOfLi = [];
    const len = list.length;

    let i = 0;

    for (i; i < len; i++) {
      listOfLi.push(<li key={i}>Pretty row {list[i]}<span className="beyond">I'm beyond</span></li>)
    }

    return (
      <div className='scroll'>
        <div id="header">
          <div className="buttons">
            {<button className='left' onClick={this._handleRemoveRow}>Remove first row</button>}
            <button className="right" onClick={this._handleToggleScroll}>
              { iScrollOptions.scrollX ? "Disable scroll" : "Enable scroll" }
            </button>
          </div>
          React iScroll
        </div>
        <div id="wrapper">
          <ReactIScroll iScroll={iScroll}
                        options={iScrollOptions}
                        onRefresh={this._handleScrollRefresh}
                        onScrollStart={this._handleScrollStart}
                        onScrollEnd={this._handleScrollEnd}>
            <div style={{width: "110%"}}>
              <ul>
                {listOfLi}
              </ul>
            </div>
          </ReactIScroll>
        </div>
        <div id="footer">
          <div className="buttons">
            <button onClick={this._handleAddRow} className="button">Add one row</button>
          </div>
          status: {isScrolling ? 'Scrolling' : 'Standby' } |
          can vertically scroll: {canVerticallyScroll ? 'Yes' : 'No'}
        </div>
      </div>
    )
  }
}

export default Scroll