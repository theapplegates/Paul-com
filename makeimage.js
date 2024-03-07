const cloudinary = require('cloudinary').v2;
cloudinary.config({
 cloud_name: 'paulapplegate-com',
 api_key: '642662647533687',
 api_secret: 'E_Fve1Kdyaz1Xry-6ul95bbwOiw'
});

const imageUrl = cloudinary.image("mini-pies", {
        transformation: { crop: 'fill', aspect_ratio: '16:9', gravity: 'auto', format: 'auto', quality: 'auto' }
      })
    console.log(imageUrl)
