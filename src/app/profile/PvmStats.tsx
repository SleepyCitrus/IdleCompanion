import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BossClears } from "./ProfileAttributes";

export default function PvmStats({
  bossClears,
}: {
  bossClears: BossClears;
}) {
  const statsDisplay = [];

  let boss: keyof BossClears;
  for (boss in bossClears) {
    const clearCount = bossClears[boss];
    statsDisplay.push({
      boss: boss,
      clearCount: clearCount,
    });
  }

  return (
    <div className="rounded-md border-2 border-[color:hsl(var(--combobox-button-primary))]">
      <Table>
        <TableHeader className="border-b-2 border-[color:hsl(var(--combobox-button-primary))]">
          <TableRow>
            <TableHead>Boss</TableHead>
            <TableHead>Clear Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statsDisplay.map((bossStats) => {
            return (
              <TableRow key={bossStats.boss}>
                <TableCell>{bossStats.boss}</TableCell>
                <TableCell>{bossStats.clearCount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
