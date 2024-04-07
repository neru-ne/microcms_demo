"use client"
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import useSWR from 'swr';
import { useRecoilState } from "recoil";
import { searchKeywordAtom } from "@/app/recoil/searchKeywordAtom";

import { itemListAtom } from "@/app/recoil/itemListAtom";

import { getRequest } from "@/app/api/index"
import { PageHeader } from '@/app/components/organisms/PageHeader'
import { CommonButton } from "@/app/components/atoms/button/CommonButton";

import { MainContents } from '@/app/components/layouts/MainContents'
import { SearchForm } from '@/app/components/molecules/SearchForm'

import { Archive } from "@/app/components/organisms/Archive";
import { ErrorContentsArea } from '@/app/components/molecules/ErrorContentsArea'

//types
import { commonButtonType } from '@/app/types/components'


const NEXT_PUBLIC_MICROCMS_URL = process.env.NEXT_PUBLIC_MICROCMS_URL


export default function Search() {

  const router = useRouter();

  const [searchApplyFlg, setSearchApplyFlg] = useState<boolean>(false);
  const [searchFlg, setSearchFlg] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>("");



  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordAtom);

  let params = {
    limit: 100,
    fields: 'id,name,category,kinds,price',
    filters: '',
    q: '',
  };
  const searchParams = useSearchParams();
  const paramsQ = searchParams.get("q");

  useEffect(() => {
    if (paramsQ) {
      setSearchWord(paramsQ);
      setSearchFlg(true);
    }
  }, [])

  const searchApply = () => {

    setSearchFlg(true);
    setSearchWord(searchKeyword);

    const params = new URLSearchParams();
    params.set('q', searchKeyword);
    const newParams = params.toString();
    router.push(`/search?${newParams}`);

    setSearchApplyFlg(true);
  }
  const [itemList, setItemList] = useRecoilState(itemListAtom);

  const FetchAndRender = () => {
    console.log(searchWord)
    params.q = searchWord;

    const { data, error } = useSWR([`${NEXT_PUBLIC_MICROCMS_URL}/item/`, params], ([url, params]) => getRequest(url, params))

    useEffect(() => {
      if (data) {
        setItemList(data.data);
      }
    }, [data])

    setSearchApplyFlg(false);

    return (
      <>
        <ErrorContentsArea data={data} error={error} />
        {
          data && itemList && (
            <>
              <div className="mt-10">
                <h2 className="font-bold text-2xl mb-4">「{searchWord}」の検索結果</h2>
                <Archive {...itemList} />
              </div>
            </>
          )
        }
      </>
    )
  }

  return (
    <>
      <PageHeader heading={true}>検索</PageHeader>
      <MainContents>
        <SearchForm onClick={searchApply} />
        <div>
          {searchFlg && <FetchAndRender />}
        </div>
      </MainContents>
    </>
  )
}
