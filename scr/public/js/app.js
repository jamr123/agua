
const publicVapidKey ="BDoQeJFcxz8Js-P3-ghvVv5OEssDK4WWWecAIP53PGzNw7ZEN93ZuwaejgiUQyVG1HBB3T4XeflH5ILi9t6JTc0";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('Service worker registered.');
          setTimeout(send,3000);
        });
  });
}




async function send() {

  const register = await navigator.serviceWorker.register("/sw.js");

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });

  await localStorage.setItem("notification",JSON.stringify(subscription));
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

