const cloudinary = require('cloudinary').v2;

cloudinary.config({
 cloud_name: 'paulapplegate-com',
 api_key: '642662647533687',
 api_secret: 'E_Fve1Kdyaz1Xry-6ul95bbwOiw'
});

return cloudinary.uploader.upload("/Users/thor3/Pictures/Columbus-lab-ISS.jpg", {
   public_id: "ISS-Lab"
 })
 .then(result => console.log(result)); 
