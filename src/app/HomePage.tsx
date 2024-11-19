import PageTitle from "@/components/commons/PageTitle";

export default function HomePage() {
  return (
    <div className="flex flex-col" id="home-page-id">
      <PageTitle />

      <span>
        Welcome to Idle Companion! This is a simple project of mine
        that provides some, <i>hopefully</i>, useful resources for the
        game of Idle Clans. Please peruse the <b>Resources</b> tab at
        your own leisure.
      </span>
    </div>
  );
}
