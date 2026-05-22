function Card({img, role}) {
  return (
    <div className="relative w-70 h-80 group mx-auto bg-black rounded-2xl overflow-hidden shadow-[0px_0px_50px_#FFE786] dark:shadow-[0px_0px_50px_#101044] text-white">
      <img
        src={img}
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-100 group-hover:opacity-40 "
      />
      <div className="p-4 relative flex flex-col gap-y-40">
        <div className="">
          <p className="text-[20px] tracking-wider text-[#F6339A] font-bold">
            {role}
          </p>
          <p className="text-3xl tracking-wider font-bold text-white">Vivekanand</p>
        </div>

        <div className="">
          <p className="opacity-0 transition-transform translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            perferendis hic asperiores quibusdam quidem voluptates doloremque
            reiciendis nostrum harum. Repudiandae?
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
