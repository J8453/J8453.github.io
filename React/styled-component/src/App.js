import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { color, space, background } from 'styled-system';

const theme = {
  colors: {
  	green: '#49a09d',
  	yellow: '#ffedbc',
  	pink: '#d6a4a4',
  	grey: '#757f9a',
  },
  background: {
  	green: 'linear-gradient(to left, #49a09d, #eaecc6)',
  	yellow: 'linear-gradient(to right, #FFEDBC, #ED4264)',
  	pink: 'linear-gradient(to right, #D6A4A4, #DAE2F8)',
  	grey: 'linear-gradient(to top, #757f9a, #d7dde8)',
  }
}

class Boxes extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      selected: 'yellow'
  	};
  }

  handleClick(color) {
  	this.setState((state, props)=>{
  	  return { selected : color };
  	})
  }

  render() {
  	return(
  	  <div>
  	    <div className="Boxes">
          <Box
            name="yellow"
            onClick={this.handleClick.bind(this, 'yellow')}
            selected={this.state.selected} />
          <Box
          name="pink"
          onClick={this.handleClick.bind(this, 'pink')}
            selected={this.state.selected} />
          <Box
            name="grey"
            onClick={this.handleClick.bind(this, 'grey')}
            selected={this.state.selected} />
          <Box
            name="green"
            onClick={this.handleClick.bind(this, 'green')}
            selected={this.state.selected} />
        </div>
        <Title color={this.state.selected}>
          click the cubes to<br/> toggle styles
        </Title>
  	    <Background background={this.state.selected} />
  	  </div>
  	)
  }
}

const Box = (props) => {
  return(
    <StyledBox
    bg={props.name}
    m="10px 20px"
    selected={props.selected}
    onClick={props.onClick} />
  )
}

const StyledBox = styled.div`
  ${color}
  ${space}
  border: 3px solid white;
  outline: 1px solid #00000070;
  width: 40px;
  height: 40px;
  opacity: ${ props => props.selected===props.bg ? 1 : 0.5 };
  transition: all 0.2s ease-in;

  &:hover {
  	cursor: pointer;
  	opacity: 1;
  }
`

const Background = styled.div`
  ${background}
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: -1;
`

const Title = styled.div`
  ${color}
  font-size: 3em;
  font-family: 'Montserrat', sans-serif;
  width: 450px;
  height: 150px;
  position: relative;
  top: -100px;
  left: 100px;
  text-shadow: -1px -1px 0 #00000070, 1px -1px 0 #00000070, -1px 1px 0 #00000070, 1px 1px 0 #00000070;
  opacity: 0.9;
`


function App() {
  return (
  	<ThemeProvider theme={theme}>
	  <Boxes />
	</ThemeProvider>
  );
}

export default App;
