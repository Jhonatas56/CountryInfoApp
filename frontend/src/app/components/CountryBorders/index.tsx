import { Border } from "@/dtos/country";
import Link from "next/link";

interface CountryBordersParams {
  borders: Border[];
}

export function CountryBorders({ borders }: CountryBordersParams) {
  return (
    <div className="flex flex-wrap gap-2">
      {borders.map((country) => (
        <Link
          key={country.countryCode}
          href={`/country/${country.countryCode}`}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
        >
          {country.commonName}
        </Link>
      ))}
    </div>
  );
}
