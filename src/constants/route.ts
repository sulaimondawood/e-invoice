const dashboard = "/dashboard";

export const BASE_ROUTES = {
  invoice: dashboard + "/invoice",
  dashboard,
};

export const ROUTES = {
  createInvoice: BASE_ROUTES.invoice + "/create",
};
