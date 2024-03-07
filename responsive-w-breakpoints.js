const cloudinary = require('cloudinary').v2;

cloudinary.config({
 cloud_name: 'paulapplegate-com',
 api_key: '642662647533687',
 api_secret: 'E_Fve1Kdyaz1Xry-6ul95bbwOiw'
});


cloudinary.uploader.upload("src/assets/images/gallery/mini-pies.jpg", {
   public_id: "mini-pies",
   responsive_breakpoints: {
     create_derived: true,
     bytes_step: 20000,
     min_width: 200,
     max_width: 1000,
     transformation: { crop: 'fill', aspect_ratio: '16:9', gravity: 'auto', quality: 'auto', format: 'auto' }
   }
 })
 .then(result => {
     console.log(result); // Log the result inside the .then block
 })
 .catch(error => {
     console.error("Upload error:", error); // Handle potential errors
 });

