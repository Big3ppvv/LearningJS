import ClearComponent from "../ClearInput";
import FinalResult from "../FinalResult";

const InsertNumbersSimbols = ({ onInsert, numbersAndSimbols }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const allNumbersAndSimbols = ['1','2','3','+','4','5','6','-','7','8','9','*','0','.','/']
  const clickedNumbers = [];
  const clickedSimbols = [];


  const addValues = (onInsert, numbersAndSimbols, value) => {
    const paragraphContent = value.currentTarget.textContent;
    let total = '';
    
    paragraphContent in numbers ? clickedNumbers.push(paragraphContent)
      : clickedSimbols.push(paragraphContent)

    clickedNumbers.map((numbers) => {
      total += numbers
      onInsert(numbersAndSimbols + total)
      
    })

    clickedSimbols.map((simbols) => {
      total += simbols
      onInsert(numbersAndSimbols + total)
    })
    
  }

  return (
    <div className="inline-grid m-auto gap-8">
      <section className="inline-grid grid-rows-1 grid-cols-4 place-items-center mt-8 gap-8">
      {allNumbersAndSimbols.map((value)=>{
          return(
              <p onClick={(value) => addValues(onInsert, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg 
              w-16 h-16 text-white text-xl text-center p-4">{value}</p>
          )
      })}
      <FinalResult onInsert={onInsert} numbersAndSimbols={numbersAndSimbols}/>
      </section>
      
      <section>
        <ClearComponent clearComponent={onInsert}/>
      </section>

    </div>
  )
}

export default InsertNumbersSimbols;