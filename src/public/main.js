const PUBLIC_VAPID_KEY = 'BAQJHvwEwVcf9spCbDk9z342UGaK9oIUeQloUC7LWGVWvZks0vvV6eY9EgJXgwodsUBC1tz0hBVCXmSQf1CBLsY'

const subscription = async () => {


    //Service Worker
    const register = await navigator.serviceWorker.register('/worker.js',{
        scope:'/'
    });

    console.log('new Service Worker')

   await fetch('/subscription',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        }
    });
    console.log('Subscribed!')
}

subscription();