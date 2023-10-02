import { z } from 'zod';

export interface OrphanageAttrs {
  id?: string;
  lat: string;
  lng: string;
  name: string;
  about: string;
  whatsapp: string;
  images: string[]
  firstImage?: string | null;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

export const OrphanageInfos = z.object({
  lat: z.string(),
  lng: z.string(),
  name: z.string(),
  about: z.string(),
  whatsapp: z.string(),
  images: z.array(z.string()),
  instructions: z.string(),
  opening_hours: z.string(),
  open_on_weekends: z.boolean(),
});
