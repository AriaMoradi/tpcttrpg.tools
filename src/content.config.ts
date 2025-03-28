import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const index = defineCollection({ 
    loader: glob({ pattern: "**/*.json", base: import.meta.env.INDEX_ROOT || "./content" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        files: z
            .object({
                name: z.string(),
                path: z.string(),
                size: z.number(),
                description: z.string().optional(),
                telegram_file_id: z.string().optional(),
            }).array(),
    }).array(),
});

export const collections = { index };