export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-2xl font-serif font-bold">
          this is the delivery app{" "}
        </h1>
        <p>Sample menus</p>
        <div className="flex justify-around">
          <div className="border-red-300 border-2 "><h1>burger</h1>
          <p>price: </p>
          </div>
          <div className="border-red-300 border-2 "><h1>burger</h1>
          <p>price: </p>
          </div>
          <div className="border-red-300 border-2 "><h1>burger</h1>
          <p>price: </p>
          </div>
        </div>
      </div>
    </main>
  );
}
