import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://ldpdarqekzvhheerhhhp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkcGRhcnFla3p2aGhlZXJoaGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMTYyODgsImV4cCI6MjA0NzY5MjI4OH0.LOnEj2NIrrQhSgoTjt1Q2UpaO1Gipshj2eZUjClrj_M'
);

export default supabase;
