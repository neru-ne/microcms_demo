"use client"
import { useEffect } from "react";
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

  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordAtom);

  const searchApply = () => {
    console.log(searchKeyword)
  }

  return (
    <>
      <PageHeader heading={true}>検索</PageHeader>
      <MainContents>
        <SearchForm onClick={searchApply} />
      </MainContents>
    </>
  )
}
