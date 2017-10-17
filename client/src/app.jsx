import React, { Component } from 'react';
import Modal from './components/modal.jsx';





// modal js


  class App extends Component {
  	constructor() {
  		super();

  		this.state = {
  			show_modal: false,
  			modalInfo: [
  				{imgSrc: "/01.jpg", text: 'asdf'},
  				{imgSrc: "/02.jpg", text: 'asdfasdfasdf'}
  			],
  			currentModalIndex: 0
  		}
  	}

  	showModal() {
  		this.setState({
  			show_modal: true
  		});
  	}


  	closeModal() {
  		this.setState({ show_modal: false });
  	}

  	render() {
  		return(
  			<div>
  				{this.state.show_modal ? (<div className="overlay"></div>) : ''}


  				{this.state.show_modal ? (
  					<Modal
  						closeModal={this.closeModal.bind(this)}
  					/>
  				) : ''}

  				<button onClick={() => this.showModal()}>checkin</button>
  			</div>
  		)
  	}
  }

  export default App



  // render((
  // 	<Router>
  // 		<App />
  // 	</Router>
  // ), document.getElementById('app'));
