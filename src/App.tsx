import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function TagList({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-[#293038] text-[#9EABB8] hover:bg-gray-700 cursor-pointer px-4 py-1"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <MainSearchBar initialValue="" onSearch={onSearch} />
      </div>
    </div>
  );
}

function MainSearchBar({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(innerValue);
      }}
      className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg"
    >
      <Search className="text-gray-400 mr-3" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button
        className="bg-[#1A80E5] hover:bg-blue-700 text-white ml-4"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}

function Header() {
  const [topSearchBarValue, setTopSearchBarValue] = useState("");

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-4">
        <img src="/task1/logo.png" alt="Logo" className="h-auto w-5" />
        <div className="text-white font-semibold text-lg">Worctionary</div>
      </div>

      <div className="flex items-center gap-4 ">
        <div style={{ position: "relative" }}>
          <span className="absolute left-3 top-1.5">
            <Search className="text-gray-400 text-sm" />
          </span>
          <Input
            type="text"
            value={topSearchBarValue}
            onChange={(e) => setTopSearchBarValue(e.target.value)}
            placeholder="Search"
            className="pl-11 bg-gray-800 text-white border-none focus:ring-0 rounded-full"
          />
        </div>
        <Avatar style={{ width: "32px", height: "32px" }}>
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

const TAGS = [
  "NFT",
  "Metaverse",
  "Sustainable",
  "Sonder",
  "FOMO",
  "Ghosting",
] as const;
export default function App() {
  return (
    <main className="bg-[#121417] min-h-screen text-white">
      <Header />
      <HeroSection />
      <TagList title="Trending" tags={[...TAGS]} />
      <TagList title="For you" tags={[...TAGS]} />
    </main>
  );
}
