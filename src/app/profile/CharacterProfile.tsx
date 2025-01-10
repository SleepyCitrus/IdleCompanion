"use client";

import DescriptionTextItalics from "@/components/commons/DescriptionTextItalics";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPlayerProfile } from "@/lib/ApiUtils";
import { useEffect, useState } from "react";
import { LoadingCharacterProfile } from "./LoadingCharacterProfile";
import {
  fullUpgradeTiers,
  ProfileAttributes,
  UpgradeTiers,
} from "./ProfileAttributes";
import PvmStats from "./PvmStats";

interface PropsInterface {
  username: string;
}

function getProfileFieldByKey<ProfileAttributes extends object>(
  profile: ProfileAttributes,
  key: keyof ProfileAttributes
): ProfileAttributes[keyof ProfileAttributes] {
  return profile[key];
}

const createProfileDisplay = (profile: ProfileAttributes) => {
  return (
    <div className="flex flex-row flex-wrap w-full whitespace-nowrap">
      <div className="flex flex-col basis-full xs:basis-1/3">
        <p className="font-semibold text-[color:hsl(var(--stats-text-muted))] basis-1/4 min-w-[100px]">
          Username:
        </p>
        <p>{profile.username || "N/A"}</p>
      </div>
      <div className="flex flex-col basis-full xs:basis-1/3">
        <span className="font-semibold text-[color:hsl(var(--stats-text-muted))] basis-1/4 min-w-[100px]">
          Game Mode:
        </span>
        <span>{profile.gameMode || "N/A"}</span>
      </div>
      <div className="flex flex-col basis-full xs:basis-1/3">
        <span className="font-semibold text-[color:hsl(var(--stats-text-muted))] basis-1/4 min-w-[100px]">
          Guild:
        </span>
        <span>{profile.guildName || "N/A"}</span>
      </div>
    </div>
  );
};

const createUpgradesDisplay = (profile: ProfileAttributes) => {
  let upgrades = profile.upgrades;

  const upgradeDisplay = [];

  let upgradeName: keyof UpgradeTiers;
  for (upgradeName in upgrades) {
    const upgradeTier = upgrades[upgradeName];
    let maxUpgrade = upgradeTier;
    if (upgradeName in fullUpgradeTiers) {
      maxUpgrade = fullUpgradeTiers[upgradeName];
    }
    upgradeDisplay.push({
      upgradeName: upgradeName,
      upgradeTier: upgradeTier,
      maxUpgrade: maxUpgrade,
    });
  }

  return (
    <div className="rounded-md border-2 border-[color:hsl(var(--combobox-button-primary))]">
      <Table className="">
        <TableHeader className="border-b-2 border-[color:hsl(var(--combobox-button-primary))]">
          <TableRow>
            <TableHead>Upgrade Name</TableHead>
            <TableHead>Current Tier</TableHead>
            <TableHead>Max Tier</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {upgradeDisplay.map((upgrade) => {
            let upgradeCompleted = "";
            if (upgrade.upgradeTier === upgrade.maxUpgrade) {
              upgradeCompleted = "bg-primary";
            }
            return (
              <TableRow
                key={upgrade.upgradeName}
                className={upgradeCompleted}
              >
                <TableCell>{upgrade.upgradeName}</TableCell>
                <TableCell>{upgrade.upgradeTier}</TableCell>
                <TableCell>{upgrade.maxUpgrade}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default function CharacterProfile({
  username,
}: PropsInterface) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ProfileAttributes>(
    {} as ProfileAttributes
  );

  useEffect(() => {
    if (username?.length) {
      Promise.resolve()
        .then(() => setLoading(true))
        .then(() => getPlayerProfile(username))
        .then((data: ProfileAttributes) => {
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
    <div className="flex flex-col gap-2">
      {loading ? (
        <LoadingCharacterProfile />
      ) : (
        <>
          <Card>
            <CardContent>
              <h3 className="pb-2">Profile</h3>
              {createProfileDisplay(profile)}
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3>Upgrades</h3>
              <div className="pb-2">
                <DescriptionTextItalics>
                  Fully completed upgrades are highlighted in purple.
                </DescriptionTextItalics>
              </div>
              {createUpgradesDisplay(profile)}
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="pb-2">Boss Clears</h3>
              <PvmStats bossClears={profile.pvmStats}></PvmStats>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
