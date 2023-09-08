function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
ready(function () {
  Engpush.config({
    appId: "9a139815-6f1f-4750-b3f8-e1e1334a9464",
  });

  document.getElementById(
    "app-id"
  ).innerHTML = `App ID: ${Engpush.appId}`;
});

const status = localStorage.getItem("engpush_subscribe_status");
if (status) {
  document.getElementById(
    "subscribe-status"
  ).innerHTML = `Status: ${status}`;
}

const token = localStorage.getItem("fcm_token");
if (token) {
  document.getElementById(
    "subscribe-fcm-token"
  ).innerHTML = `FCM Token: ${token}`;
} else {
  document.getElementById(
    "subscribe-fcm-token"
  ).innerHTML = `FCM Token: Not subscribed yet`;
}
