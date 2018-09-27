//Importing React Component
import React, {Component} from "react";
//We are using three components- Header, Cards
//Importing UI Components. This will importCard Component
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import characters from './cards.json';
import './App.css';

class App extends Component {
	state = {
		characters,
		clickedPuppyIds:[],
		score:0,
		topScore:5,
		gameStatus:""
	};

	  //shuffle the pup cards in the browser when clicked
	  shuffleCard = id => {
		let clickedPuppyIds = this.state.clickedPuppyIds;
		let currScore = this.state.score;
		if(clickedPuppyIds.includes(id)){
		  this.setState({ clickedPuppyIds: [], score: currScore, status:  "Game Over! You lost. Click to play again!" });
		  console.log('You Loose');
		  return;
		}
		else
		{
		  clickedPuppyIds.push(id)
	
		  if(clickedPuppyIds.length === 5){
			this.setState({score: 5, status: "You Won! Click to play again!", clickedPuppyIds: []});
			console.log('You Win');
			return;
		  }
	
		  this.setState({ characters, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });
		  //Get a single digit randam number for a subscript. Swap it with current subscript image
		  for (let i = characters.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[characters[i], characters[j]] = [characters[j], characters[i]];
		  }
		}
	  }

	//Render the individual components
    render() {
        return ( 
			<div className="clickGameApp">
				<header className="clickGameHeader">
					<h1 className="clickGameTitle1">Clicky Game</h1>
					{/* <h2 className="clickGameTitle2">Using React</h2> */}
					<p className="clickGameRule">Click on image to score. Prepare to loose if you want to click more than once on the same image.</p>
				</header>

        <Score total={this.state.score}
               goal={5}
               status={this.state.status}
        />
        <Wrapper>
          {this.state.characters.map(characters => (
            <Card
              shuffleCard={this.shuffleCard}
              id={characters.id}
              key={characters.id}
              image={characters.image}
            />
          ))}
        </Wrapper>
			</div>

        );
    }
};

export default App;