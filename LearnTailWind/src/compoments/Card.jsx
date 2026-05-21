function Card({img, role}) {
  return (
    <div className="relative w-90 h-90 group mx-auto ">
      <img
        src={img}
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-100 group-hover:opacity-40 rounded-2xl"
      />
      <div className="p-4 relative flex flex-col gap-y-40">
        <div className="">
          <p className="text-[20px] tracking-wider text-[#F6339A] font-bold">
            {role}
          </p>
          <p className="text-3xl tracking-wider font-bold">Vivekanand</p>
        </div>

        <div className="">
          <p className="text-sm translate-y-4 opacity-0 transition-transform group-hover:opacity-100">
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
