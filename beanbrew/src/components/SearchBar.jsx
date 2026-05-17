import { CATEGORIES } from "../interfaces/Coffee";

export default function SearchBar({ search, setSearch, filterCat, setFilterCat }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Arama */}
      <div className="flex items-center gap-3 bg-white border border-[#EDE8E2] rounded-xl px-4 py-2.5">
        <span className="text-[#BBB] text-sm">🔍</span>
        <input
          type="text"
          placeholder="Kahve ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-sm text-[#1A1A1A] bg-transparent placeholder-[#BBB]"
        />
        {search && (
          <button onClick={() => setSearch("")} className="text-[#BBB] hover:text-danger text-sm">✕</button>
        )}
      </div>

      {/* Kategori filtresi */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setFilterCat("")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            filterCat === "" ? "bg-primary text-white border-primary" : "border-[#EDE8E2] text-[#999] bg-white"
          }`}
        >Tümü</button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilterCat(c === filterCat ? "" : c)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border capitalize transition-all ${
              filterCat === c ? "bg-primary text-white border-primary" : "border-[#EDE8E2] text-[#999] bg-white"
            }`}
          >{c}</button>
        ))}
      </div>
    </div>
  );
}
