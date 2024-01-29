const FinalResult = ({ insertNumbersSimbols, numbersAndSimbols }) => {

  const giveResult = (insertNumbersSimbols, numbersAndSimbols) => {
    try {
      const input = [...numbersAndSimbols];
      const completeInput = [(input.join(""))];
      const evaluation = completeInput.map((value) =>{
      return eval(value)
      })
      insertNumbersSimbols(evaluation);
      
    } catch (SyntaxError) {
      insertNumbersSimbols('Put a correct number')
      
    }
    
    
  }
  

  return (
    <div>
      <p onClick={() => giveResult(insertNumbersSimbols, numbersAndSimbols)} className=" cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-xl text-center p-4">=</p>
    </div>
  )
}

export default FinalResult;