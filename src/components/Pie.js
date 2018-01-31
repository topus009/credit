import React, {Component} from 'react';
import PieChart from 'react-minimal-pie-chart';

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { value: 25, key: 1, color: '#32C4D1' },
        { value: 75, key: 2, color: '#E9EDF0' },
      ],
    }
  }

  render() {
    const {data} = this.state;
    return (
      <div className='pie_block'>
        <PieChart
          data={data}
          lineWidth={50}
          paddingAngle={2}
          radius={48}
          startAngle={-90}
          totalValue={100}
        />
      </div>
    )
  }
}

export default Pie;
