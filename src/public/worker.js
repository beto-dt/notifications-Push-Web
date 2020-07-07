console.log('Service Worker Works');
self.addEventListener('push', e => {
    const data = e.data.json();
    const title  = data.title;
    const options = {
        body: data.message,        
        icon: data.icon,
        image: data.image,
        actions: [
          {
            action: 'Excited',
            title: 'Excited',
            icon: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/51899422_112352779901660_6781741995900534784_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=Gg6sCJ4YR2EAX8sAP19&_nc_ht=scontent.fuio1-1.fna&oh=02d7040f2c9f5676e2a9fb499e4e4b7c&oe=5F1FF87F'
          }
            ]
              };                
    console.log(data);
    /* console.log('Notification Received'); */
    self.registration.showNotification(
        title,
        options
         );
});
function EventExcited(){
   console.log('It is the button of Excited baby');
}
//Evento for Notification CLick
self.addEventListener('notificationclick', function(event) {  
  event.notification.close();  
  if (event.action === 'Excited') {  
    EventExcited();  
  }  
}, false);

