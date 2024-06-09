import Image from "next/image";
function CatalogImage() {
  return (
    <Image
      className="rounded-md"
      src="/assets/landscape.jpg" // Ensure this path is correct
      width={128}
      height={128}
      alt="User Image"
    />
  );
}

export default CatalogImage;
