import PageTitle from "@/components/commons/PageTitle";
import CharacterPage from "./CharacterPage";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full">
      <PageTitle />

      <CharacterPage />
    </div>
  );
}
