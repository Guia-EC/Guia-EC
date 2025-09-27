// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://miqxvokazxmxtridobms.supabase.co'; // Cole sua URL aqui
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pcXh2b2thenhteHRyaWRvYm1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMDYyODcsImV4cCI6MjA3Mzg4MjI4N30.9HQgtaaD7WYdGO21GGHaAwGeCQDfIdNTBipbrxRrcf4'; // Cole sua chave aqui

export const supabase = createClient(supabaseUrl, supabaseAnonKey);