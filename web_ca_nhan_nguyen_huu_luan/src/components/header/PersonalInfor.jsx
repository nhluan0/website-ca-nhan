const PersonalInfor = () => {
  return (
    <div className="p-2">
      <div className="flex  bg-slate-400 rounded-md  ">
        <div className="flex justify-center basis-1/3 p-3 ">
          <img className="h-96 w-auto block" src="/image/anh222.jpg" />
        </div>
        <div className="basis-2/3 flex flex-col justify-center">
          <h1 className=" uppercase italic ">Nguyễn Hữu Luân</h1>
          <h1 className=" uppercase italic ">Intern fullStack Java web</h1>
          <h1 className=" ">
            <label className="not-italic font-light">Năm sinh: </label>
            12/08/1988
          </h1>
          <h1 className="  ">
            <label className="not-italic font-light">Địa chỉ: </label>
            Phú Đa-Hòa Tân Đông-Đông Hòa-Phú Yên
          </h1>
          <h1 className=" ">
            <label className="not-italic font-light">Email: </label>
            nhluan0@gmail.com
          </h1>
          <h1 className="   ">
            <label className="not-italic font-light">Phone: </label>
            0985.913.723
          </h1>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfor
