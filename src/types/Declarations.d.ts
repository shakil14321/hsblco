/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-simple-maps" {
  import * as React from "react";

  export interface GeographyProps {
    geography?: any;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    [key: string]: any;
  }

  export const ComposableMap: React.FC<any>;
  export const Geographies: React.FC<any>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<any>;
  export const Annotation: React.FC<any>;
  export const ZoomableGroup: React.FC<any>;
}
