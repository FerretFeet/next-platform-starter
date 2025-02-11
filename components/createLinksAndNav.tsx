import { DataString } from "data/__interfaces";
import Link from "next/link";
import React from "react";

export default function createLinksAndNav(
  links: DataString,
  excludedLinks: Array<string>,
) {
  const testLinks: DataString = links;
  if (!testLinks || !excludedLinks) return <></>;
  return (
    <nav className="createdLinks">
      <ul className="clList">
        {Object.keys(testLinks).map((key) => {
          if (excludedLinks.includes(key) == true) return;
          return (
            <li
              className="clListItem"
              key={`${key}-listItem`}
            >
              <Link
                href={testLinks[key]}
                className="clLink"
                key={`${key}-link`}
              >
                {key}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
