console.log('Service Worker Works');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/51899422_112352779901660_6781741995900534784_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=Gg6sCJ4YR2EAX8sAP19&_nc_ht=scontent.fuio1-1.fna&oh=02d7040f2c9f5676e2a9fb499e4e4b7c&oe=5F1FF87F'
    });
});