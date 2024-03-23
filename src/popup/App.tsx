import '../global.css';
import "./App.css";
import { Button } from "@/components/ui/button";


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
      <h1>popup</h1>
      <Button onClick={openSettings}>open settings</Button>
    </div>
  );
}
