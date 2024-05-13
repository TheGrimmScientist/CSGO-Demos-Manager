import React from 'react';
import type { SVGAttributes } from 'react';

type Props = SVGAttributes<SVGElement>;

export const ThroughSmokeKillIcon = React.forwardRef(function ThroughSmokeKillIcon(
  props: Props,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg viewBox="0 0 32.074 32.074" enableBackground="new 0 0 32.074 32.074" ref={ref} {...props}>
      <path
        opacity="0.5"
        fill="currentColor"
        d="M24.126,13.219c0.061-0.28,0.094-0.57,0.094-0.868c0-2.229-1.807-4.035-4.035-4.035c-0.62,0-1.208,0.14-1.733,0.391c-0.47-1.822-2.124-3.168-4.093-3.168c-2.334,0-4.226,1.892-4.226,4.226c0,0.235,0.02,0.464,0.057,0.689c-0.407-0.214-0.871-0.336-1.363-0.336c-1.623,0-2.939,1.316-2.939,2.939c0,0.631,0.2,1.213,0.538,1.692c-2.385,0.345-4.218,2.398-4.218,4.879c0,2.723,2.207,4.931,4.931,4.931c1.11,0,2.134-0.367,2.957-0.985c0.811,0.404,1.725,0.633,2.692,0.633c1.221,0,2.358-0.364,3.308-0.987c1.066,0.942,2.465,1.515,4,1.515c1.639,0,3.124-0.653,4.213-1.713c2.431-0.304,4.313-2.377,4.313-4.891C28.623,15.552,26.646,13.438,24.126,13.219z M15.605,14.831c-0.078,0.318-0.405,0.514-0.719,0.435c-1.175-0.286-1.924,0.285-2.27,0.653c-0.608,0.646-0.845,1.562-0.604,2.332c0.078,0.251-0.018,0.524-0.236,0.67c-0.218,0.147-0.506,0.133-0.709-0.034c-0.335-0.276-1.125-0.499-1.749-0.196c-0.72,0.348-0.853,1.277-0.838,1.994c0.007,0.329-0.254,0.6-0.582,0.606c-0.005,0-0.008,0-0.012,0c-0.323,0-0.588-0.258-0.594-0.582c-0.041-2.033,0.929-2.807,1.509-3.088c0.627-0.304,1.329-0.319,1.939-0.171c0.045-0.846,0.4-1.694,1.013-2.345c0.89-0.946,2.133-1.308,3.42-0.992C15.489,14.191,15.684,14.513,15.605,14.831z"
      />
      <g>
        <rect x="28.658" y="10.64" fill="currentColor" width="2.591" height="0.709" />
        <rect
          x="27.907"
          y="8.898"
          transform="matrix(0.7026 -0.7116 0.7116 0.7026 2.022 23.3421)"
          fill="currentColor"
          width="2.057"
          height="0.707"
        />
        <rect
          x="28.801"
          y="11.791"
          transform="matrix(0.7032 -0.711 0.711 0.7032 -0.4614 24.534)"
          fill="currentColor"
          width="0.707"
          height="2.058"
        />
        <rect
          x="27.367"
          y="12.681"
          transform="matrix(0.9028 -0.43 0.43 0.9028 -3.0539 13.2196)"
          fill="currentColor"
          width="0.708"
          height="1.371"
        />
        <rect
          x="26.983"
          y="8.23"
          transform="matrix(0.5382 -0.8428 0.8428 0.5382 5.543 27.2831)"
          fill="currentColor"
          width="1.371"
          height="0.707"
        />
        <path fill="currentColor" d="M18.037,12.013l7.63,0.004l2.054-1.137l-2.164-1.042h-7.521V12.013z" />
      </g>
      <linearGradient
        id="gradientId"
        gradientUnits="userSpaceOnUse"
        x1="18.0374"
        y1="10.9091"
        x2="15.8948"
        y2="10.9091"
      >
        <stop offset="0" style={{ stopColor: 'currentColor' }} />
        <stop offset="1" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
      </linearGradient>
      <rect x="15.895" y="9.838" fill="url(#gradientId)" width="2.143" height="2.143" />
    </svg>
  );
});