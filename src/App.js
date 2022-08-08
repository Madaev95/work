

function App() {
  // 1

  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

  const positive = array.filter(function(item){
    if(item > 0){
      return(true)
    }
  })

  console.log(positive);

  // 2

  const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 23
  ];

  const message2 = messages.filter(function(item){
    if(item.error ===false){
      return true

    }
  });

  console.log(message2);

  // 3

  const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

  const word2 = words.map(function(item){
    if(item.length < 5) {
      return("*")
    }
    return item
  });

  console.log(word2);

  // 4

  const half = (number) =>  number / 2

  console.log(half(4));


  const showConsole = () => {

    console.log("expo");

  }
showConsole();



const concatWords = (first, second) => first + second

console.log(concatWords(10, 10));


// 5

function justText() {
  return 'expo'
}
console.log(justText());


function logging(text) {
  console.log(text);
}
logging("текст");


function add(x,y){
  const z = 3;
  return (z * x * y)
}
console.log(add(2, 3));

function onlyPosive(number) {
  if(number < 0) {
    return false
  }
  return true
}
console.log(onlyPosive(0));



  return (
    <div className="App">

    </div>
  );
}

export default App;

