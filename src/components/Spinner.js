import React, { PureComponent } from 'react'
import loading2 from './loading2.gif'
export class Spinner extends PureComponent {
  render() {
    return (
      <div className='justify-content-center'>
        <img src={loading2} alt="load"  />
      </div>
    )
  }
}

export default Spinner
