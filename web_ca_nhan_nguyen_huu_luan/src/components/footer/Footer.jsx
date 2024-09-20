const Footer = () => {
  return (
    <div className=" rounded-md text-xl flex flex-col justify-center items-center h-60 bg-slate-700 text-white m-2">
      <div>
        {new Date().toLocaleDateString('vi-Vn', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
      <div>Copyright by zịt ù</div>
    </div>
  )
}

export default Footer
