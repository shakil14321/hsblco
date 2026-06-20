export interface ProductItem {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface NavChild {
  id: number;
  title?: string;
  url?: string;
  categoryTitle?: string;
  products?: ProductItem[];
}

export interface NavbarTypes {
  id: number;
  title: string;
  url?: string;
  child?: NavChild[];
  isMegaMenu?: boolean;
}
