import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://luzyvzzmiohpmqrndwqk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1enl2enptaW9ocG1xcm5kd3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMDc5NTYsImV4cCI6MjA5NzY4Mzk1Nn0.lzIJQLORmKFmWvBdG2pqVEU8bCDmcRjIXbNN-NZL1_w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)