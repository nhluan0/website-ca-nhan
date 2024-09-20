import { useEffect, useState } from 'react'
import { dataCertification } from './data'
import ModalCertification from './ModalCertification'

const SlideCertification = () => {
  const [dataFilter, setDataFilter] = useState([])
  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [dataModal, setDataModal] = useState({})

  useEffect(() => {
    const initialItems = dataCertification.slice(0, 3)
    setDataFilter(initialItems)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const length = dataCertification.length
      let newIndex = index + 1

      if (newIndex >= length) {
        newIndex = 0
      }

      let certification = []
      if (length - newIndex >= 3) {
        certification = dataCertification.slice(newIndex, newIndex + 3)
      } else {
        const remainingItems = length - newIndex
        certification = [
          ...dataCertification.slice(newIndex, length),
          ...dataCertification.slice(0, 3 - remainingItems),
        ]
      }

      setDataFilter(certification)
      setIndex(newIndex)
    }, 3000)

    return () => clearInterval(interval)
  }, [index])

  const handleOpenModal = (id) => {
    setOpenModal(true)
    const data = dataCertification.filter((e) => e.id === id)
    // cuon to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    setDataModal(data[0])
  }

  function hanleCloseModal() {
    setOpenModal(false)
  }
  return (
    <>
      {openModal && dataModal && (
        <ModalCertification
          dataModal={dataModal}
          hanleCloseModal={hanleCloseModal}
        />
      )}

      <div className="relative overflow-hidden w-full">
        <div className="flex  gap-2 p-2 sm:flex-col lg:flex-row">
          {dataFilter &&
            dataFilter.length > 0 &&
            dataFilter.map((item) => {
              return (
                <div
                  onClick={() => handleOpenModal(item.id)}
                  className="card rounded bg-red-300 p-2 cursor-pointer"
                  key={item.id}
                >
                  <div>
                    <img src={item.src} alt={item.subject} className="" />
                  </div>
                  <h2 className="">{item.subject}</h2>
                  {item?.gpa && <h2>GPA: {item?.gpa}</h2>}
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default SlideCertification
