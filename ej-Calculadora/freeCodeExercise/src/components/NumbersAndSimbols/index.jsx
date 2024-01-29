import ClearComponent from "../ClearInput";
import FinalResult from "../FinalResult";

const NumbersAndSimbols = ({ insertNumbersSimbols, numbersAndSimbols }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const clickedNumbers = [];
  const clickedSimbols = [];


  const addValues = (insertNumbersSimbols, numbersAndSimbols, value) => {
    const paragraphContent = value.currentTarget.textContent;
    let total = '';
    
    paragraphContent in numbers ? clickedNumbers.push(paragraphContent)
      : clickedSimbols.push(paragraphContent)

    clickedNumbers.map((numbers) => {
      total += numbers
      insertNumbersSimbols(numbersAndSimbols + total)
      
    })

    clickedSimbols.map((simbols) => {
      total += simbols
      insertNumbersSimbols(numbersAndSimbols + total)
    })
    
  }

  return (
    <div className="inline-grid m-auto gap-8">

      <section className="inline-grid grid-cols-4 place-items-center mt-8 gap-8">
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-xl text-center p-4">1</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">2</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">3</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className=" cursor-pointer hover:bg-sky-700 bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">+</p>
      </section>

      <section className="inline-grid  grid-cols-4 place-items-center gap-8">
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">4</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">5</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">6</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">-</p>
      </section>

      <section className="inline-grid grid-cols-4 place-items-center gap-8">
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">7</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">8</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">9</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">*</p>
      </section>

      <section className="inline-grid grid-cols-4 place-items-center gap-8">
        <FinalResult insertNumbersSimbols={insertNumbersSimbols} numbersAndSimbols={numbersAndSimbols}/>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">0</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">.</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, numbersAndSimbols, value)} className="cursor-pointer hover:bg-sky-700 bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">/</p>
      </section>

      <section>
        <ClearComponent clearComponent={insertNumbersSimbols} />
      </section>

    </div>
  )
}

export default NumbersAndSimbols;