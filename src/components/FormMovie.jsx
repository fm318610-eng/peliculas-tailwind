import GridMovie from "./GridMovie";
import { useForm } from "react-hook-form";

const FormMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const crearPelicula = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(crearPelicula)}
        className="border border-slate-700 p-8
    rounded-lg bg-slate-800 transition-colors"
      >
        {/* Campo: Nombre */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-slate-200">
            Nombre pelicula
          </label>
          <input
            type="text"
            placeholder="Ej: Titanic"
            className="w-full border border-slate-600 rounded p-2 bg-slate-700 text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500/80"
            name="nombrePelicula"
            {...register("pelicula", {
              required: "El nombre de la pelicula es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la pelicula debe contener como minimo 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre de la pelicula debe contener como maximo 100 caracteres",
              },
            })}
          />
          <p className="text-sm text-red-600 mt-2">
            {errors.pelicula?.message}
          </p>
        </div>
        {/* Campo: Descripcion */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-slate-200">
            Descripción
          </label>
          <textarea
            rows="3"
            placeholder="Resumen de la trama..."
            className="w-full border border-slate-600 rounded p-2 bg-slate-700 text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500/80"
            name="descripcion"
            {...register("detalle", {
              required: "El detalle de la pelicula es un dato obligatorio",
              minLength: {
                value: 10,
                message:
                  "El detalle de la pelicula debe contener como minimo 10 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "El nombre de la pelicula debe contener como maximo 250 caracteres",
              },
            })}
          />
          <p className="text-sm text-red-600 mt-2">{errors.detalle?.message}</p>
        </div>

        {/* Campo: Categoria */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-slate-200">
            Categoria
          </label>
          <select
            className="w-full border border-slate-600 rounded p-2 bg-slate-700 text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500/80"
            name="categoria"
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una categoria</option>
            <option value="aventura">Aventura</option>
            <option value="comedia">Comedia</option>
            <option value="romance">Romance</option>
            <option value="terror">Terror</option>
          </select>
          <p className="text-sm text-red-600 mt-2">{errors.categoria?.message}</p>
        </div>
        {/* Botón */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-medium
            hover:bg-blue-700 transition-colors w-full sm:w-auto cursor-pointer"
        >
          Enviar Pelicula
        </button>
      </form>
      <GridMovie></GridMovie>
    </section>
  );
};
export default FormMovie;
