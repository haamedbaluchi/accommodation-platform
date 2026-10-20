export const MODAL_ITEMS = {
  AUTH:"auth",
  DESTINATIONS: "destinations_modal",
  DATE: "date_modal",
  BUDGET: "budget_modal",
  TRAVELERS:"travelers_modal",
  NEWTRIP:"new_trip_modal",
  RESERVEFLIGHTTICKET:"reserve_flight_ticket",
  RESERVEHOTEL:"reserve_hotel",
  GUIDEMODAL:"guide_modal",
  DRAWERMAIN:"drawer_main",
  NULL: "null",
} as const; 

export type ModalType = (typeof MODAL_ITEMS)[keyof typeof MODAL_ITEMS];
