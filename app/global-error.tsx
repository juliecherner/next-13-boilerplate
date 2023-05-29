"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button
          className="bg-red-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
//try to apply global error to see what it is
