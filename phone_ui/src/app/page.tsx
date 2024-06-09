import Link from "next/link";
import { listings, Listing } from "./data";

export default function Home() {
  return (
    <main>
      <div id="template" className="flex ">
        <span className="flex-1">Image</span>
        <h2 className="flex-1">Title</h2>
        <h3 className="flex-1">Location</h3>
        <span className="flex-1">...</span>
        {/*
        // when done, turn into a compoents!
        left image ; title and under location; 3 dots in right; can hover
        */}
      </div>
      <div>
        <ul>
          {listings.map((item: Listing) => (
            <li key={item.id}>
              <Link href={`/blog/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/HelloWorld">
        <p>Test</p>
      </Link>
    </main>
  );
}
