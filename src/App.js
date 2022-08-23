import { useState } from 'react';
import './App.css';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';
import { AiTwotoneCopy } from 'react-icons/ai';

export default function App() {
  const [url, setUrl] = useState('');
  const [userInput, setUserInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );

      setUrl(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter link to be shortened"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button onClick={fetchData}>SUBMIT</button>

      <div>
        <textarea type="text" readOnly={true} value={url} />
      </div>
      <CopyToClipboard text={url}>
        <button>
          <AiTwotoneCopy />
        </button>
      </CopyToClipboard>
    </div>
  );
}
