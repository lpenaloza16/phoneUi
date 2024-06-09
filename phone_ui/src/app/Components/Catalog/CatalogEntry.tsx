// import Image from "next/image";
import CatalogImage from "./CatalogImage";
import TitleAndLocation from "./TitleAndLocation";
import CatalogMenu from "./CatalogMenu";

function CatalogEntry() {
  return (
    <div className="flex">
      <CatalogImage />
      <TitleAndLocation />
      <CatalogMenu />
    </div>
  );
}

export default CatalogEntry;

/*
Component Layout:
         * - Left: Image
         * - Center: Title with location underneath
         * - Right: Three dots (menu), with hover functionality
*/
