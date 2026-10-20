export interface Chat {
  chat_id: string;
  title: string;
  updated_at?: string;
  created_at?: string;
  image_url: string | null;
  image_alt: string | null;

  session_id: string;
}

