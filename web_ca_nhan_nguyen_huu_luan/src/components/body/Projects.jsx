import { dataProject } from './data'

const Projects = () => {
  return (
    <div className="bg-slate-300 rounded-md  p-4 m-2 whitespace-normal">
      <h1 className="text-3xl  uppercase p-2 font-bold  border-solid border-b-2 border-b-orange-500">
        Dự Án
      </h1>
      {dataProject &&
        dataProject.length > 0 &&
        dataProject.map((data, index) => {
          return (
            <div
              key={index}
              className="flex sm:flex-col lgluan:flex-row border-solid border-b-2 border-b-red-400 text-xl"
            >
              <div className=" basis-1/2 pl-2 pb-2">
                <h2 className="pt-2">{data?.name}</h2>
                <div> {data?.description}</div>
                <div>
                  <h2 className="pt-2">Github:</h2>
                  <a
                    href={data?.github}
                    target="_blank"
                    className="text-blue-400"
                  >
                    {data?.github}
                  </a>
                </div>
              </div>
              <div className="basis-1/2 pl-2 pb-2">
                <h2 className="pt-2">Frontend</h2> {data?.Frontend}
                {data?.Backend && (
                  <div>
                    <h2 className="pt-2">Backend</h2> {data?.Backend}
                  </div>
                )}
                {data?.linkWeb && (
                  <div>
                    <h2 className="pt-2">Link web</h2>{' '}
                    <a
                      href={data?.linkWeb}
                      target="_blank"
                      className="text-blue-400"
                    >
                      {data?.linkWeb}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Projects
