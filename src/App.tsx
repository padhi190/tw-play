const tickers = [
  { symbol: 'AAPL', direction: 'up', change: 0.5, price: 150 },
  { symbol: 'TSLA', direction: 'down', change: 0.75, price: 600 },
  { symbol: 'AMZN', direction: 'up', change: 0.15, price: 3000 },
  { symbol: 'GOOGL', direction: 'down', change: 0.25, price: 2000 },
  { symbol: 'MSFT', direction: 'up', change: 0.35, price: 300 },
  { symbol: 'FB', direction: 'down', change: 0.45, price: 250 },
  { symbol: 'NVDA', direction: 'up', change: 0.55, price: 400 },
];

function App() {
  return (
    <div className="px-8">
      <h1 className="my-8 text-3xl font-semibold text-center">
        Yoohoo Finance
      </h1>
      <div className="flex gap-5 py-4 overflow-hidden select-none border-y-2 group">
        <ul className="flex justify-between flex-shrink-0 min-w-full gap-5 animate-slideIn group-hover:[animation-play-state:paused]">
          {tickers.map((ticker) => (
            <li key={ticker.symbol} className="first:pl-5 first:border-l-2">
              <div className="flex items-center gap-2">
                {ticker.direction === 'up' ? (
                  <p className="text-green-500">{`\u2191`}</p>
                ) : (
                  <p className="text-red-500">{`\u2193`}</p>
                )}
                <p>{ticker.symbol}</p>
                <p className="text-gray-500">{ticker.price}</p>
                <p
                  className={`${
                    ticker.direction === 'up'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  ({ticker.change}%)
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="flex justify-between flex-shrink-0 min-w-full gap-5 animate-slideIn group-hover:[animation-play-state:paused]">
          {tickers.map((ticker) => (
            <li key={ticker.symbol} className="first:pl-5 first:border-l-2">
              <div className="flex items-center gap-2">
                {ticker.direction === 'up' ? (
                  <p className="text-green-500">{`\u2191`}</p>
                ) : (
                  <p className="text-red-500">{`\u2193`}</p>
                )}
                <p>{ticker.symbol}</p>
                <p className="text-gray-500">{ticker.price}</p>
                <p
                  className={`${
                    ticker.direction === 'up'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  ({ticker.change}%)
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
