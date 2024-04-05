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
  link: boolean,
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
export type errorContentsAreaType = {
  data: any,
  error: any,
  buttonSetting?: commonButtonType,
}
//CustomerList
export type customerListType = {
  list: {
    fieldId: string;
    name: string;
    contents: string;
  }[],
  className: string,
  keyName: string,
}

//RepeatContents
export type repeatContentsType = {
  data: {
    [key: string]: any
  }[]
}

//PageHeader
export type pageHeaderType = {
  heading:boolean,
  children:ReactNode,
}

//searchFormType
export type searchFormType = {
  onClick: () => void,
}
