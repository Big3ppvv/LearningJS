import ClearComponent from "../ClearInput";

const NumbersAndSimbols = ({insertNumbersSimbols}) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const clickedNumbers = [];
  const clickedSimbols = [];
  console.log(clickedNumbers);

  const addValues = (insertNumbersSimbols, value) => {
    const paragraphContent = value.currentTarget.textContent;
    paragraphContent in numbers ? clickedNumbers.push(paragraphContent)
    : clickedSimbols.push(paragraphContent)
  }
  
  return (
    <div className="inline-grid m-auto gap-8">

      <section className="inline-grid grid-cols-4 place-items-center mt-8 gap-8">
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-xl text-center p-4">1</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">2</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">3</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">+</p>
      </section>

      <section className="inline-grid  grid-cols-4 place-items-center gap-8">
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">4</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">5</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">6</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">-</p>
      </section>

      <section className="inline-grid grid-cols-4 place-items-center gap-8">
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">7</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">8</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">9</p>
        <p onClick={() => addValues(insertNumbersSimbols)} className="bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">*</p>
      </section>

      <section className="inline-grid grid-cols-4 place-items-center gap-8">
        <p className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4 numbers">=</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, value)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">0</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, value)} className="bg-slate-900 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">.</p>
        <p onClick={(value) => addValues(insertNumbersSimbols, value)} className="bg-green-500 rounded-lg w-16 h-16 text-white text-2xl text-center p-4">/</p>
      </section>

      <section>
        <ClearComponent clearComponent={insertNumbersSimbols}/>
      </section>

    </div>
  )
}

export default NumbersAndSimbols;