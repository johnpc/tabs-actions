import { useState } from 'react'

function App() {
  const [urls, setUrls] = useState<string[]>([])
  const handleClick = async () => {
    const tabs = await chrome.tabs.query({});
    const urls = tabs.map(tab => `yt-dlp ${tab.url}`);
    setUrls(urls);
  }
  return (
    <>
      <div className="card">
        <button onClick={() => handleClick()}>
         Get Urls
        </button>
        <pre>
          {urls.join("\n")}
        </pre>
      </div>
    </>
  )
}

export default App