"use client";

import { useState } from "react";
import CharacterProfile from "./CharacterProfile";
import CharacterSelect from "./CharacterSelect";

export default function CharacterPage() {
  const [username, setUsername] = useState("");

  return (
    <div
      className="flex flex-col gap-2 w-full h-full"
      id="profile-page-wrapper"
    >
      <p className="pb-4">
        Search a character's name to see its profile, stats, and
        remaining upgrades.
      </p>
      <CharacterSelect setUsername={setUsername} />

      <CharacterProfile username={username} />
    </div>
  );
}
