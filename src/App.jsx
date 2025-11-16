import Button from './Button';
import Dice from './Dice';

function App() {
  function handleRollClick(){ 
    console.log('던지기 버튼 클릭!');}

  function handleClearClick(){ console.log('처음부터 버튼 클릭!');}

  function handleDiceClick(num){
    console.log(num);
  };

  return (
    <div>
      <h1>주사위 게임</h1>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={2} onClick ={() => handleDiceClick(2)}/>
      <Dice color="purple" num={3} onClick ={() => handleDiceClick(3)}/>
    </div>
  );
}

export default App;
