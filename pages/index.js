import Image from "next/image";
import { Comic_Neue } from "next/font/google";
import Link from "next/link";

const comic = Comic_Neue({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 p-10 ${comic.className}`}
      style={{
        backgroundImage: `url("/pigeon-cup-boots-2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl">Pigeon In Yellow Boots</h1>
      <p className="text-3xl text-yellow-400">
        CA: Gv7sW9pe9khuPjCYmRUTmHNAFm8yWDJVtDVyA1DExqr4
      </p>
        <Link target="_blank" href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=Gv7sW9pe9khuPjCYmRUTmHNAFm8yWDJVtDVyA1DExqr4&fixed=in">
          <p className="bg-yellow-500 text-black p-4 text-5xl mb-2">BUY $PIGEON</p>
        </Link>
      <Image
        src="/pigeon.jpeg"
        alt="pigeon in boots"
        height={500}
        width={500}
      />
      <div className="flex gap-4">
        <Link target="_blank" href="https://twitter.com/pigeonboots">
          <Image
            src="/x-logo.webp"
            alt="twitter logo"
            height={100}
            width={100}
          />
        </Link>
        <Link
          target="_blank"
          href="https://dexscreener.com/solana/5vtivuzuoa9p9rxyuwe8rpfhtiu3eqbd4w8epcfxqbau"
        >
          <Image
            src="/dexscreener.png"
            alt="dexscreener logo"
            height={100}
            width={100}
          />
        </Link>
        <Link
          target="_blank"
          href="https://t.co/xDT6qOBGXO"
        >
          <Image
            src="/telegram.webp"
            alt="telegram logo"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <p className="text-3xl text-yellow-400">The boots stay on</p>
    </main>
  );
}
