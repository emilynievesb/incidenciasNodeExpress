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

const postEquipoDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idTipoEquipo: number().min(1).max(4).required(),
      serialEquipo: string().required(),
      idSala: number().min(1).max(6).required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};
const postTrainerDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      nombre: string()
        .strict()
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Is not in correct format")
        .required(),
      emailPersonal: string().required(),
      emailCorporativo: string().required(),
      telefonoMovil: number()
        .required()
        .test("length", "El teléfono movil debe tener 10 dígitos", (value) => {
          if (!value) return true; // Si el campo está vacío, no realizar la validación
          const numberString = String(value);
          return numberString.length === 10;
        }),
      telfonoResidencia: number()
        .required()
        .test(
          "length",
          "El telefono de la residencia debe tener 10 dígitos",
          (value) => {
            if (!value) return true; // Si el campo está vacío, no realizar la validación
            const numberString = String(value);
            return numberString.length === 10;
          }
        ),
      telefonoEmpresa: number()
        .required()
        .test(
          "length",
          "El telefono de la empresa debe tener 10 dígitos",
          (value) => {
            if (!value) return true; // Si el campo está vacío, no realizar la validación
            const numberString = String(value);
            return numberString.length === 10;
          }
        ),
      telefonoMovilEmpresa: number()
        .required()
        .test(
          "length",
          "El telefono movil de la empresa debe tener 10 dígitos",
          (value) => {
            if (!value) return true; // Si el campo está vacío, no realizar la validación
            const numberString = String(value);
            return numberString.length === 10;
          }
        ),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postInsidenciaDTO, postEquipoDTO, postTrainerDTO };
