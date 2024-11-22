"use client";

import { Card, CardContent } from "@/components/ui/card";
import { getPlayerProfile } from "@/lib/ApiUtils";
import { CharacterProfileInterface } from "@/lib/CharacterUtils";
import { useEffect, useState } from "react";

interface PropsInterface {
  username: string;
}

export default function CharacterProfile({
  username,
}: PropsInterface) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<CharacterProfileInterface>(
    {} as CharacterProfileInterface
  );

  const generateText = (profile: CharacterProfileInterface) => {
    let profileKey: keyof CharacterProfileInterface;

    let summary: string = "";
    for (profileKey in profile) {
      summary = summary + profile[profileKey].toString();
    }
    console.log("profileKey", summary, profile);

    return <div>{summary}</div>;
  };

  useEffect(() => {
    if (username?.length) {
      Promise.resolve()
        .then(() => setLoading(true))
        .then(() => getPlayerProfile(username))
        .then((data: CharacterProfileInterface) => {
          console.log("data", data);
          setProfile(data);
        })
        .catch((err) => {
          console.error("testerror", err);
        })
        .then(() => setLoading(false));
    }
  }, [username]);

  return (
    <Card>
      <CardContent>
        <h3>Profile</h3>
        {generateText(profile)}
      </CardContent>
    </Card>
  );
}
