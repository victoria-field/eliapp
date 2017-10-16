import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router }  from 'react-router-dom';

import Modal from './components/Modal';

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

	// nextModal(newModal) {
	// 	if (this.state.currentModalIndex == this.state.modalInfo.length - 1) {

	// 	} else {
	// 		this.setState({currentModalIndex: newModal})
	// 	}
	// }

	closeModal() {
		this.setState({ show_modal: false });
	}

	render() {
		return(
			<div>
				{this.state.show_modal ? (<div className="overlay"></div>) : ''}

				<h1>React App</h1>

				{this.state.show_modal ? (
					<Modal
						closeModal={this.closeModal.bind(this)}
					/>
				) : ''}

				<button onClick={() => this.showModal()}>checkin</button>
				<h1>asdfasdf</h1>
				<button onClick={() => this.showModal()}>Update Profile</button>
			</div>
		)
	}
}

render((
	<Router>
		<App />
	</Router>
), document.getElementById('app'));
