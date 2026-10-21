// Спільні налаштування обох застосунків SHAUMAN (клієнт і адмінка).
// anon-ключ Supabase призначений для браузера; доступ обмежують політики RLS у базі.
window.SHAUMAN_CFG = {
  supabase: { url: 'https://jfgzvwmgndfveljoahzz.supabase.co', key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmZ3p2d21nbmRmdmVsam9haHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1ODY2MzEsImV4cCI6MjEwODE2MjYzMX0.RMydVgFqEEaEisAyAWqYvW_Njt7VgJSejRajk-ukgxM' },
  clientUrl: 'https://shauman-exaa.vercel.app',
  adminUrl: 'https://shaumanadmin.vercel.app',
};
