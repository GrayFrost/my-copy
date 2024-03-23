import "./App.css";

export default function App() {
  const openSettings = () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL("options/index.html"));
    }
  };
  return (
    <div className="popup">
      <h1></h1>popup
      <h2 onClick={openSettings}>open settings</h2>
    </div>
  );
}
