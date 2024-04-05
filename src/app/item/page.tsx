"use client"
import { useEffect } from "react";
import useSWR from 'swr';
import { useRecoilState } from "recoil";
import { itemListAtom } from "@/app/recoil/itemListAtom";

import { getRequest } from "@/app/api/index"
import { PageHeader } from '@/app/components/organisms/PageHeader'

import { MainContents } from '@/app/components/layouts/MainContents'
import { Archive } from "@/app/components/organisms/Archive";
import { ErrorContentsArea } from '@/app/components/molecules/ErrorContentsArea'


const NEXT_PUBLIC_MICROCMS_URL = process.env.NEXT_PUBLIC_MICROCMS_URL


export default function Item() {

  const [itemList, setItemList] = useRecoilState(itemListAtom);

  const params = {
    limit: 1,
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
        <ErrorContentsArea data={data} error={error} />
        {
          itemList && <Archive {...itemList} />
        }
      </MainContents>
    </>
  )
}
