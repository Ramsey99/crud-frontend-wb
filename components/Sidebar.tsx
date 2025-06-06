export default function Sidebar() {
  return (
    <aside className="w-full sm:w-64 p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Category</h2>
        <label className="block"><input type="checkbox" /> Electronics</label>
        <label className="block"><input type="checkbox" /> Fashion</label>
        <label className="block"><input type="checkbox" /> Books</label>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Price Range</h2>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </aside>
  );
}
