"use client";

export default function Sidebar() {
  return (
    <aside className="w-full sm:w-64 flex flex-col gap-4">
      <div className="bg-blue-800 text-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Category</h3>
          <div className="flex flex-col gap-1 text-sm">
            {["All", "Electronics", "Clothing", "Home"].map((cat, index) => (
              <label key={index} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  defaultChecked={cat === "All"}
                  className="appearance-none w-4 h-4 rounded-full border-2 border-white checked:border-4 checked:border-white transition-all"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            // value={0}
            className="w-full start"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-sm text-gray-800 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Cacyroy</h2>

        <div className="mb-4">
          <div className="flex flex-col gap-1 text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="caycroy"
                defaultChecked
                className="appearance-none w-4 h-4 rounded-full border-2 border-black checked:border-4 checked:border-blue-500 transition-all"
              />
              All
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="caycroy"
                className="appearance-none w-4 h-4 rounded-full border-2 border-black checked:border-4 checked:border-blue-500 transition-all"
              />
              Electronics
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="caycroy"
                className="appearance-none w-4 h-4 rounded-full border-2 border-black checked:border-4 checked:border-blue-500 transition-all"
              />
              Clothing
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="caycroy"
                className="appearance-none w-4 h-4 rounded-full border-2 border-black checked:border-4 checked:border-blue-500 transition-all"
              />
              Home
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Price</h3>
          <input
            type="text"
            placeholder="5000"
            className="w-full px-2 py-1 border rounded text-sm"
          />
        </div>
      </div>
    </aside>
  );
}
