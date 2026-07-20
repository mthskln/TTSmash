import { createClient } from '@supabase/supabase-js';

// This "publishable key" is designed to be public — safe to ship in client-side code.
const supabaseUrl = 'https://ebpylfkajtawppktghml.supabase.co';
const supabaseKey = 'sb_publishable_f-3_MfXHBwIwsPHYm5hsDQ_ZMmJSM5x';

export const supabase = createClient(supabaseUrl, supabaseKey);
