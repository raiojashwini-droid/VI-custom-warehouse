import { z } from 'zod';

export const containerQuerySchema = z.object({
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().optional().default(20),
  search: z.string().optional(),
  status: z.string().optional(),
});

export const createContainerSchema = z.object({
  containerNumber: z.string().min(3, 'Container number is required'),
  type: z.string().default("40' High Cube Dry"),
  carrier: z.string().nullish(),
  sealNumber: z.string().nullish(),
  tareWeightKg: z.coerce.number().nullish(),
  maxPayloadKg: z.coerce.number().nullish(),
  maxVolumeCbm: z.coerce.number().nullish(),
  loadedWeightKg: z.coerce.number().nullish(),
  loadedVolumeCbm: z.coerce.number().nullish(),
  fillPercentage: z.coerce.number().nullish(),
  currentShipmentId: z.string().nullish(),
  currentShipmentNumber: z.string().nullish(),
  status: z.string().default('Available at CFS Yard'),
  location: z.string().default('Miami CFS Yard'),
  originPort: z.string().nullish(),
  dischargePort: z.string().nullish(),
  temperatureControlled: z.boolean().optional().default(false),
});

export const updateContainerSchema = createContainerSchema.partial();

