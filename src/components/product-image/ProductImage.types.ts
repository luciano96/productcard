import { z } from "zod";

export const PropTypes = z.object({
    src: z.string(),
});

export type PropTypes = z.infer<typeof PropTypes>;