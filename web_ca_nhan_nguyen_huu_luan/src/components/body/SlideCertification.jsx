import { useEffect, useRef, useState } from 'react'
import { dataCertification } from './data'
import ModalCertification from './ModalCertification'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const SlideCertification = () => {
  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [dataModal, setDataModal] = useState({})
  const ref = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex >= dataCertification.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleOpenModal = (id) => {
    setOpenModal(true)
    const data = dataCertification.filter((e) => e.id === id)
    let pos = ref.current.getBoundingClientRect().top

    // cuon to top
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    })
    setDataModal(data[0])
  }

  function hanleCloseModal() {
    setOpenModal(false)
  }
  return (
    <div className="m-2 ">
      {openModal && dataModal && (
        <ModalCertification
          dataModal={dataModal}
          hanleCloseModal={hanleCloseModal}
        />
      )}

      <div className="relative overflow-hidden w-full bg-slate-400">
        <div className="relative flex justify-center ">
          {dataCertification &&
            dataCertification.length > 0 &&
            dataCertification.map(
              (item, idx) =>
                index === idx && (
                  <div
                    className=" relative rounded  p-2"
                    key={item.id}
                    style={{
                      transition: 'transform 0.5s ease-in-out',
                      height: '340px',
                    }}
                  >
                    <div
                      onClick={() => handleOpenModal(item.id)}
                      className="cursor-pointer"
                    >
                      <img src={item.src} alt={item.subject} className="w-96" />
                    </div>
                    <h3 className="text-center" ref={ref}>
                      {item.subject}
                    </h3>
                    {item?.gpa && (
                      <h3 className="text-center">GPA: {item?.gpa}</h3>
                    )}
                    <FaChevronCircleLeft
                      className="absolute size-8 top-1/2 left-0 z-10 
                       opacity-50 cursor-pointer hover:opacity-35"
                      style={{ transform: 'translate(0%,-90%)' }}
                      onClick={() =>
                        setIndex((prevIndex) =>
                          prevIndex == 0
                            ? dataCertification.length - 1
                            : prevIndex - 1
                        )
                      }
                    />
                    <FaChevronCircleRight
                      className="absolute hover:opacity-35 top-1/2 right-0 
                      size-8 z-10 opacity-50 cursor-pointer"
                      style={{ transform: 'translate(0%,-90%)' }}
                      onClick={() =>
                        setIndex((prevIndex) =>
                          prevIndex >= dataCertification.length - 1
                            ? 0
                            : prevIndex + 1
                        )
                      }
                    />
                  </div>
                )
            )}

          <div className="absolute bottom-16 z-10 flex pb-1">
            {dataCertification &&
              dataCertification.length > 0 &&
              dataCertification.map((item, idx) => (
                <button
                  key={item.id}
                  className={index == idx ? 'bg-slate-300' : 'bg-blue-500'}
                  onClick={() => setIndex(idx)}
                ></button>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideCertification
