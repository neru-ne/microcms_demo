//setActiveCategory
export type setActiveCategoryType = {
  data: {
    id: string;
    name: string;
    slug: string;
  }[],
  ID:string,
}

// meta
export type typeMetaData = {
  title: string
  description: string
  url: string
  type: string
  imageUrl: string
}

export type typeMetaDataObj = {
  [K in string]: typeMetaData;
};
