import { ReactNode } from "react";

//CommonButton
export type commonButtonType = {
  mode: "button" | "link",
  linkHref: "" | string,
  name: string,
  blank:boolean,
  onClick?: () => void,
}
//CategoryList
export type categoryListType = {
  list:{
    id: string;
    name: string;
    slug: string;
  }[],
  className:string,
  keyName:string,
}
//TagList
export type tagListType = {
  list:string[],
  className:string,
  keyName:string,
}
//ItemSlideshow
export type itemSlideshowType = {
  list:{
    url: string;
    height: string;
    width: string;
  }[],
  className:string,
  keyName:string,
}
//ErrorContentsArea
export type errorContentsArea = {
  data: any,
  error: any,
  buttonSetting?: commonButtonType,
}

//PageHeader
export type pageHeaderType = {
  heading:boolean,
  children:ReactNode,
}
