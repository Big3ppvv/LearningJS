const ClearComponent = ({ clearComponent }) => {
    
    const deleteAll = (clearNumbersSimbols) => {
      clearNumbersSimbols('')
    };
  
    return (
      <div>
        <h1 onClick={() => deleteAll(clearComponent)}className="cursor-pointer hover:bg-blue-500 bg-red-500 text-white rounded-full text-center p-4 text-2xl">Clear</h1>
      </div>
    );
  };
  
  export default ClearComponent;
  