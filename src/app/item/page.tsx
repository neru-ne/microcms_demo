"use client"
import { useEffect } from "react";
import useSWR from 'swr';
import { useRecoilState } from "recoil";
import { itemListAtom } from "@/app/recoil/itemListAtom";
import Link from "next/link";

import { getRequest } from "@/app/api/index"
import { PageHeader } from '@/app/components/organisms/PageHeader'

import { MainContents } from '@/app/components/layouts/MainContents'
import { TagList } from "@/app/components/atoms/list/TagList";
import { CategoryList } from "@/app/components/atoms/list/CategoryList"

const NEXT_PUBLIC_MICROCMS_URL = process.env.NEXT_PUBLIC_MICROCMS_URL


export default function Item() {

  const [itemList, setItemList] = useRecoilState(itemListAtom);

  const params = {
    limit: 10,
    fields: 'id,name,category,kinds,price'
  };

  const { data, error } = useSWR([`${NEXT_PUBLIC_MICROCMS_URL}/item/`, params], ([url, params]) => getRequest(url, params))


  useEffect(() => {
    if (data) {
      console.log(data.data)
      setItemList(data.data);
    }
  }, [data])


  return (
    <>
      <PageHeader heading={true}>商品</PageHeader>
      <MainContents>
        {
          itemList &&
          <>
            <ul className="grid gap-4 grid-cols-3 grid-rows-3">
              {
                itemList.contents.map((item, index) => (
                  <li className='list-none rounded-xl border-solid bg-[#fbfbfb] shadow-md' key={`itemList-${index}`}>
                    <Link href={`item/${item.id}`} className="p-4 block">
                      <p className="text-lg font-bold mb-2">{item.name}</p>
                      <CategoryList
                      list={item.category} className="flex flex-wrap gap-2" keyName="item-category-"
                      />
                      <TagList
                      list={item.kinds}
                      className="mt-2 flex flex-wrap gap-2"
                      keyName="item-kinds-"
                      />
                      <TagList
                      list={item.price}
                      className="flex flex-wrap gap-2"
                      keyName="item-price-"
                      />
                    </Link>
                  </li>
                ))
              }
            </ul>

          </>
        }

      </MainContents>
    </>
  )
}
