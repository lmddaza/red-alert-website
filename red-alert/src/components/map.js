import Image from "next/image";

const Map = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4 flex items-center">
        <p className="text-sm text-gray-600 ml-20 mt-2 mr-8">
          Red tide is a marine environmental event where protists, including
          algae and dinoflagellates, go through a tremendous growth period,
          called a bloom, or an algal bloom. In a 2- to 3-week period, it is
          possible for each algal cell to produce 1 million daughter cells. This
          growth may cause the water to change colors, causing what is commonly
          known as a Red Tide. Algal blooms may not result in color changes to
          the water; therefore, the technical term for this phenomenon is Algal
          Bloom. The protists may produce toxins or consume dissolved oxygen,
          and, therefore, cause damage or death to marine life.
        </p>

        <Image src="/article1.jpg" alt="Image 1" width={300} height={400} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="flex items-center">
          <Image src="/map.JPG" alt="Image 2" width={400} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Map;
