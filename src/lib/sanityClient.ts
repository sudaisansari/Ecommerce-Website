import {createClient} from 'next-sanity';

export const client = createClient({
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion : "2023-06-01",
    dataset : "production",
    useCdn : true,
    token : process.env.SANITY_ACCESS_TOKEN,
})