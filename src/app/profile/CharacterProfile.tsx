import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

interface CharacterProfileInterface {
  username: string;
}

export default function CharacterProfile({
  username,
}: CharacterProfileInterface) {
  useEffect(() => {}, [username]);

  return (
    <Card>
      <CardContent>
        <h3>Profile</h3>
        {username}
      </CardContent>
    </Card>
  );
}
