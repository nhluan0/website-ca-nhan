import { IoMdCloseCircleOutline } from 'react-icons/io'
const ModalCertification = ({ dataModal, hanleCloseModal }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-500 z-10 opacity-30"></div>
      <div
        className=" sm:w-full lg:w-custom absolute top-1/2 left-1/2  bg-slate-500 z-20 flex justify-center"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img src={dataModal.src} className="relative" />
        <IoMdCloseCircleOutline
          className="cursor-pointer hover:opacity-50 text-3xl absolute top-0 right-0 bg-white font-bold m-5 z-30"
          onClick={hanleCloseModal}
        />
      </div>
    </>
  )
}

export default ModalCertification
