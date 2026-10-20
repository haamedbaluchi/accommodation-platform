export type PlannerStatus =
  | 'pending'
  | 'processing'
  | 'received'
  | 'accepted'
  | 'ready'
  | 'ok'
  | 'needs_clarification'
  | 'completed'
  | 'error';