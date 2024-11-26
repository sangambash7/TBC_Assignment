import supabase from '../utils/supabaseClient';

type langType = 'en' | 'ge';

async function getItems(table: string, lang: langType) {
  const { data, error } = await supabase
    .from(table)
    .select()
    .eq('language', lang);

  if (error) return null;
  return data;
}

async function getItemsById(table: string, lang: langType, id: number) {
  const { data, error } = await supabase
    .from(table)
    .select()
    .eq('id', id)
    .eq('language', lang);

  if (error) return null;
  return data[0];
}

export { getItems, getItemsById };
