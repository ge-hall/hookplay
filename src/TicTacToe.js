import React  from 'react';


// export class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {this.props.value}
//         </button>
//       );
//     }
//   }
  export function Square (props) {
    
      return (
        <button className="square" onClick={() => alert('click')}>
          {props.value}
        </button>
      );
    
  }
  
  export function Board(){
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            <Square value={0}/>
            <Square value={1}/>
            <Square value={2}/>
            
          </div>
          <div className="board-row">
            <Square value={3}/>
            <Square value={4}/>
            <Square value={5}/>
          </div>
          <div className="board-row">
            <Square value={6}/>
            <Square value={7}/>
            <Square value={8}/>
          </div>
        </div>
      );
    
  }
  
  export default function Game() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    
  }
  
  // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  