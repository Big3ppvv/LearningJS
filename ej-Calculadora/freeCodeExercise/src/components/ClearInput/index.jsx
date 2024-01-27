const ClearComponent = ({ clearComponent }) => {
    
    const deleteAll = (clearNumbersSimbols) => {
      clearNumbersSimbols('')
    };
  
    return (
      <div>
        <h1 onClick={() => deleteAll(clearComponent)}className="bg-red-500 text-white rounded-full text-center p-4 text-2xl">Clear</h1>
      </div>
    );
  };
  
  export default ClearComponent;
  