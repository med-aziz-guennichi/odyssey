import { z } from "zod";

export const addEnterpriseSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Invalid email address"),
  taxNumber: z.string().min(5, "Tax number must be at least 5 characters long"),
  address: z.string().min(5, "Address must be at least 5 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits long"),
  website: z.string().url("Invalid URL").optional(),
  description: z
    .string()
    .max(500, "Description can't exceed 500 characters")
    .optional(),
});
