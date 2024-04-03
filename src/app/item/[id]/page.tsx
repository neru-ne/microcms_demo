"use client"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useSWR from 'swr';
import { useRecoilState } from "recoil";
import { itemAtom } from "@/app/recoil/itemAtom";

import { getRequest } from "@/app/api/index"
import { MainContents } from '@/app/components/layouts/MainContents'
import { PageHeader } from '@/app/components/organisms/PageHeader'
import { CommonButton } from "@/app/components/atoms/button/CommonButton";
import { TagList } from "@/app/components/atoms/list/TagList";
import { CategoryList } from "@/app/components/atoms/list/CategoryList"



//types
import { commonButtonType } from '@/app/types/components'

const NEXT_PUBLIC_MICROCMS_URL = process.env.NEXT_PUBLIC_MICROCMS_URL


export default function ItemDetail() {

  const backButton: commonButtonType = {
    mode: "link",
    linkHref: "/item",
    name: "Itemに戻る",
    blank: false,
  }

  const pathname = usePathname();
  const pageUrls = pathname.split('/');
  const len = pageUrls.length;

  const detailId = pageUrls[len - 1];


  const [item, setItem] = useRecoilState(itemAtom);


  const { data, error } = useSWR(`${NEXT_PUBLIC_MICROCMS_URL}/item/${detailId}`, getRequest);

  useEffect(() => {
    if (data) {
      setItem(data.data)
    }
    retrunDispay();
  }, [data])

  if (data) {
    // setItem(data.data)
    console.log(data.data)
  }

  const retrunDispay = () => {
    if (error) {
      console.log(error)
      if (error.response.status === 404) {
        return (
          <>
            <p className="text-xl font-bold">おや？記事がないみたい。<br />Itemへ戻って探してみて！</p>
            <div className="w-full flex justify-center">
              <CommonButton {...backButton} />
            </div>
          </>
        );
      } else {
        return (
          <>
            <p className="text-xl font-bold">取得失敗</p>
            <div className="w-full flex justify-center">
              <CommonButton {...backButton} />
            </div>
          </>

        );
      }
    } else {
      if (!data) {
        return (
          <p>loading...</p>
        )
      }
    }
  }

  return (
    <>
      <PageHeader heading={false}>商品</PageHeader>
      <MainContents>
        {retrunDispay()}
        {
          item && (
            <>
              <CategoryList
                list={item.category} className="flex flex-wrap gap-2 mb-4" keyName="item-category-"
              />
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <div className="flex flex-wrap gap-2 mt-4">

                <TagList
                  list={item.kinds}
                  className="flex flex-wrap gap-2"
                  keyName="item-kinds-"
                />
                <TagList
                  list={item.price}
                  className="flex flex-wrap gap-2"
                  keyName="item-price-"
                />
              </div>


              <div className='whitespace-pre-wrap mt-4'>
                <p className="text-xl font-bold mb-2">{item.default.lead}</p>



                <div>

                </div>


                
              </div>
              <div className="w-full flex justify-center mt-20">
                <CommonButton {...backButton} />
              </div>
            </>
          )
        }
      </MainContents>
    </>
  )
}