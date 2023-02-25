const express = require('express');
const router = express.Router();
const multer = require('multer');
const files = multer({dest : './upload'});
const fs = require('fs'); //file system
const uuid = require('node-uuid'); //genera nombres aleatoreos de las imagenes cargadas para q no se repitan


router.get('/', (req, res, next)=>{
    res.render('files');
});

router.post('/', files.array('imagen', 1), async(req, res, next)=>{
    try{
        let nombre_final = null;
        console.log(req.files);
        if(req.files[0].mimetype == 'image/png' || req.files[0].mimetype == 'image/jpeg'){
            //verifico tamaño
            if(req.files[0].size < 200000){
                //subir imagen al servidor

                let mimetype = req.files[0].mimetype;
                let array_mimetype = mimetype.split('/'); // ['image', 'png'];
                let extension = array_mimetype[1];
                let name_uuid = uuid();
                nombre_final = name_uuid + '.' + extension;
                fs.createReadStream(`./upload/${req.files[0].filename}`).pipe(fs.createWriteStream(`./public/images/${nombre_final}`))

                fs.unlink(`upload/${req.files[0].filename}`, (err) =>{
                    err ? console.log(err) : console.log('Eliminado correctamente');
                })
            }else{
                res.render('files', {messege : 'Asegurate que el tamaño de la imagen sea el correcto'});
            }
        }else{
            res.render('files', {messege: 'Asegurate que el formato de la imagen sea el correcto'});
        }
    }catch(error){
        console.log(error);
    }
})


module.exports = router;