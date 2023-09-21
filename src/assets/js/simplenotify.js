import Notify from "simple-notify";

export function pushNotify(status, title, message) {
  new Notify({
    status: status,
    title: title,
    text: message,
    effect: "fade",
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 1,
    position: "right top",
  });
}
