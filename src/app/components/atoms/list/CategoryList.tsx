import { categoryListType } from '@/app/types/components'

export const CategoryList = (props: categoryListType) => {

  const {
    list,
    className,
    keyName
  } = props;

  return (
    0 < list.length && (
      <div className={className}>
      {
        list.map((itemCategory, index) => {
          return (
            <span className={`bg-primary text-white px-2 py-1 text-[12px] rounded-lg ${itemCategory.slug}`} key={`${keyName}${index}`}>
              {itemCategory.name}
            </span>
          )
        })
      }
    </div>
    )
  )

}