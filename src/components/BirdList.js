import React from 'react';
import axios from 'axios';
import './Birds.css';

export default class BirdList extends React.Component {
  state = {
    birds: []
  }

  componentDidMount() {
    axios.get(`https://zapari.any.do/birds/20`)
      .then(res => {
        const birds = res.data.items;
        this.setState({ birds });
      })
  }
  render() {
    return (
      <body>
        <div class='area'></div>
      <nav class='main-menu'>
        <ul>
        {
          this.state.birds
            .map(bird =>
              <li>
                <a onClick="show()"><i class='fa fa-2x'>{<img src={bird.image} height="40px" width="40px"/>}</i><span class='nav-next'>{bird.name}</span></a>
            </li>
            
            )
        }
        </ul>
      </nav>
      </body>
    )
  }
}