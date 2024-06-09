import Link from "next/link";
import Image from "next/image";
import { listings, Listing } from "./data";
import CatalogEntry from "./Components/Catalog/CatalogEntry";

export default function Home() {
  return (
    <main>
      <div id="template" className="flex ">
        <CatalogEntry />
        <CatalogEntry />
        <CatalogEntry />
        <span className="flex-1">Image</span>

        {/* <Image
          className="rounded-md"
          src="/assets/landscape.jpg" // Ensure this path is correct
          width={128}
          height={128}
          alt="User Image"
        /> */}

        <h2 className="flex-1">Title</h2>
        <h3 className="flex-1">Location</h3>
        <span className="flex-1">...</span>
        {/*
         * Steps to Create New Catalog Entry Component:
         * 1. Start by creating the new CatalogEntry component.
         * 2. Develop the remaining components as needed.
         * 3. Once all components are completed, convert them into a cohesive component.
         *
         *
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
