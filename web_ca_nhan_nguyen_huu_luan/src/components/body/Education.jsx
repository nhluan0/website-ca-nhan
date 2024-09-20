import { dataHocVan } from './data'
const Education = () => {
  return (
    <div className="flex lg:flex-row  sm:flex-col gap-4 p-2">
      {dataHocVan &&
        dataHocVan.length > 0 &&
        dataHocVan.map((item, index) => {
          return (
            <div key={index} className="bg-slate-300 rounded-md basis-1/3 p-4">
              <h1 className="text-3xl  uppercase p-2 font-bold  border-solid border-b-2 border-b-orange-500">
                {item?.tilte}
              </h1>
              {item.content &&
                item.content.length > 0 &&
                item?.content.map((it, idx) => {
                  return (
                    <div className="p-2 text-xl" key={idx}>
                      {it}
                    </div>
                  )
                })}
            </div>
          )
        })}
    </div>
  )
}

export default Education
