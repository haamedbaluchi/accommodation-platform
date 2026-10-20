export const isProfileIncomplete = (user: {
  name?: string;
  city?: string;
  avatar_url?: string;
}) => {
  return !user?.name || !user?.city || !user?.avatar_url;
};