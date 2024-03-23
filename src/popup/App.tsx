import "../global.css";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Settings, Files, Trash2 } from "lucide-react";

export default function App() {

  const openSettings = () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL("options/index.html"));
    }
  };

  return (
    <div className="w-[750px] h-[500px]">
      <header className="h-12 flex justify-between items-center px-4">
        <Label>My Copy</Label>
        <Settings onClick={openSettings} className="hover:cursor-pointer"/>
      </header>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Content</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="flex justify-end gap-1">
                <Files className="hover:cursor-pointer hover:text-green-400"/>
                <Trash2 className="hover:cursor-pointer hover:text-rose-400" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
