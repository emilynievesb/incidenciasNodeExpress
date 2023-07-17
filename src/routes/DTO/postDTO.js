import { object, string, number, date } from "yup";

const postInsidenciaDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      trainer: number().strict().required(),
      idEquipo: number().strict().required(),
      idCategoriaInsidencia: number().min(1).max(2).required(),
      idTipoInsidencia: number().min(1).max(3).required(),
      descripcion: string().required(),
      fechaInsidencia: date()
        .required("La fecha es requerida")
        .transform((value, originalValue) => {
          const parsedDate = date(
            originalValue,
            "La fecha debe tener el formato AAAA-MM-DD"
          );
          return parsedDate.isValid() ? parsedDate : new Date("Invalid");
        }),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postInsidenciaDTO };
