
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(import.meta.env.VITE_supabaseUrl , import.meta.env.VITE_supabaseKey)

export const insert = async (model, params) => {
    console.log(model, params)

    const {data, error} = await supabase.from(model).insert([params.data]);

    if(error) {
        return console.error(error);
    }
    return data;
}

export default {insert};