import React, { Component } from 'react';

class Modal extends Component {
	constructor() {
		super();

		this.state = {
			start: false,
			current_image: 0,
			mood: '',
			ok_images: [
				'https://picsum.photos/200/300?image=2',
				'https://picsum.photos/200/300?image=3',
				'https://picsum.photos/200/300?image=1'
			],
			neutral_images: [
				'https://picsum.photos/200/300?image=5',
				'https://picsum.photos/200/300?image=6',
				'https://picsum.photos/200/300?image=7'
			],
			anxious_images: [
				'https://picsum.photos/200/300?image=8',
				'https://picsum.photos/200/300?image=9',
				'https://picsum.photos/200/300?image=10'
			]
		}
	}

	startRelaxation(mood) {
		this.setState({
			start: true,
			mood: mood
		});
	}

	nextImage() {
		let end = this.state.current_image === this.state[this.state.mood].length - 1;
		let current = end ? 0 : this.state.current_image + 1;

		this.setState({
			current_image: current
		});
	}

	render() {
		return(
			<div className="modal">
				<h3>Time to Relax</h3>

				{!this.state.start ?
					<div className="column">
						<p>How are you feeling?</p>
						<div className="row x-center">
							<button onClick={() => this.startRelaxation('ok_images')}>Ok</button>
							<button onClick={() => this.startRelaxation('neutral_images')}>Neutral</button>
							<button onClick={() => this.startRelaxation('anxious_images')}>Anxious</button>
						</div>
					</div>
				 : (
					<div className="column y-center">
						<img src={this.state[this.state.mood][this.state.current_image]}/>
						<button onClick={this.nextImage.bind(this)}>Next Image</button>
					</div>
				)}
				<button onClick={this.props.closeModal}>Close</button>
			</div>
		)
	}
}

//{props.index == 0 ? <button onClick={() => props.nextModal(1)}>Anxious</button> : ''}

export default Modal;
