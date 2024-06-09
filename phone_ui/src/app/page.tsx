import Link from "next/link";
import { listings, Listing } from "./data";

export default function Home() {
  return (
    <main>
      <div>
        <ul>
          {listings.map((item: Listing) => (
            <li key={item.id}>
              <Link href={`/blog/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
