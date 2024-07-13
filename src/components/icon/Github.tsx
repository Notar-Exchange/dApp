/*
 * File: /src/components/client/icon/github.tsx
 * Project: netz-treasury
 * Created: Friday, 21st June 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©*
 * -----
 */

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={33}
    fill="currentColor"
    {...props}
  >
    <mask
      id="a"
      width={34}
      height={34}
      x={0}
      y={-1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M33.621-.001H.747v32.874h32.874V-.001Z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.198-.001C8.101-.001.748 7.407.748 16.572c0 7.326 4.711 13.527 11.248 15.722.817.165 1.117-.357 1.117-.796 0-.384-.027-1.7-.027-3.073-4.577.988-5.53-1.976-5.53-1.976-.735-1.92-1.825-2.414-1.825-2.414-1.497-1.015.11-1.015.11-1.015 1.66.11 2.533 1.701 2.533 1.701 1.47 2.524 3.84 1.811 4.793 1.372.136-1.07.572-1.811 1.035-2.223-3.65-.384-7.49-1.81-7.49-8.176 0-1.811.654-3.293 1.689-4.445-.164-.412-.736-2.113.163-4.39 0 0 1.39-.44 4.521 1.7a15.816 15.816 0 0 1 4.113-.548c1.389 0 2.805.192 4.113.549 3.132-2.14 4.52-1.701 4.52-1.701.9 2.277.327 3.978.164 4.39 1.062 1.152 1.689 2.634 1.689 4.445 0 6.365-3.84 7.765-7.517 8.176.599.522 1.116 1.51 1.116 3.073 0 2.223-.027 4.006-.027 4.555 0 .44.3.96 1.117.796C28.91 30.1 33.62 23.898 33.62 16.572 33.648 7.407 26.267-.001 17.198-.001Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

SvgComponent.displayName = "GithubIcon";

export default SvgComponent;
