const MyTradeJournal = () => {

    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold">My Money</h1>
        <p className="mt-4 text-lg">
          My Trade Journal is a platform designed to help traders document and analyze their trades. It provides insights to improve decision-making and track performance.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Features:</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Document trade details like entry, exit, and strategy.</li>
            <li>Generate performance reports and charts.</li>
            <li>Analyze trends and patterns to improve strategies.</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Technologies Used:</h2>
          <p>React, Node.js, MongoDB, and Tailwind CSS</p>
        </div>
      </div>
    );
  };
  
  export default MyTradeJournal;
  