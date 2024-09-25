const cds = require('@sap/cds')
const { SELECT, INSERT, UPDATE, DELETE } = cds.ql

/** Service implementation */
module.exports = cds.service.impl(function () {
    this.before(['CREATE', 'UPDATE'], 'estudiantes', function (req) {
        console.log("Estudiantes Before");
        if (req.data && !req.data.Nombre) {
            //req.info(400, 'Info - Nombre debe ser ingresado');
            //req.error(400, 'Error - Nombre debe ser ingresado');
            //req.warn(400, 'Warning - Nombre debe ser ingresado');
            req.notify(400, 'Notify - Nome precisa ser preenchido');
        }
    })
})

/** Service implementation */
module.exports = cds.service.impl(function () {
    this.before(['CREATE', 'UPDATE'], 'Cursos', function (req) {
        console.log("Cursos before");
        if (req.data && !req.data.Nombre) {
            //req.info(400, 'Info - Nombre debe ser ingresado');
            //req.error(400, 'Error - Nombre debe ser ingresado');
            //req.warn(400, 'Warning - Nombre debe ser ingresado');
            //req.notify(400, 'Grabacion Exitosa');
            req.error(400, 'Error - Nombre Curso debe ser ingresado');
        }

        if (req.data && req.data.MaxEstudiantes > 30) {
            //req.info(400, 'Info - Nombre debe ser ingresado');
            //req.error(400, 'Error - Nombre debe ser ingresado');
            //req.warn(400, 'Warning - Nombre debe ser ingresado');
            //req.notify(400, 'Grabacion Exitosa');
            req.data.MaxEstudiantes = 0;
            req.error(400, 'Error - Maximo Permitido hasta 30 Estudiantes');
        }
    })
})


module.exports = cds.service.impl(function () {
    this.after(['CREATE', 'UPDATE'], 'Cursos', function (req) {
        console.log("Cursos after");
        if (req.data.MaxEstudiantes > 0) {
            req.info(400, 'Info - Grabación Exitosa');
            //req.error(400, 'Error - Nombre debe ser ingresado');
            //req.warn(400, 'Warning - Nombre debe ser ingresado');
            //req.notify(400, 'Grabacion Exitosa');
            // req.error(400, 'Error - Nombre Curso debe ser ingresado');
        }
    })

    //Criticidad Alumnos
    this.after('READ', 'estudiantes', function (data) {
        console.log("READ after estudiantes");
        const rows = Array.isArray(data) ? data : [data];
        rows.forEach((reg) => {
            //Actualiza Criticidad
            switch (reg.status) {
                case 'A': //Activo
                    reg.critico = 3;
                    break;
                case 'I': //Inactivo
                    reg.critico = 2;
                    break;
                case 'P': //Pendiente
                    reg.critico = 1;
                    break;
            }
        })


    })

    this.on('InactivaAluno', async function (req) {
        console.log("Inactiva Alumno");
        const { estudiantes } = this.entities; //Entidad

        //Recupera ID
        const params = req.params;

        if (params != null) {
            for (let i = 0; i < params.length; i++) {
                if (params[i].ID != null) {
                    await UPDATE.entity(estudiantes, params[i].ID).set({ status: 'I', comentario: req.data.text });
                    console.log('ID: ' + params[i].ID + ' - Status:' + params[i].status);
                   
                    req.info(400, 'Alumno: ' + params[i].ID + ' ' + req.data.text + ' Estatus Actualizado con Exito');
                }
            }
        }

        req.reply();

    })

    this.on('notificaAluno', async function (req) {
        console.log("Notifica Alumno");
        req.info(400, 'Info - Notifica Alumno');


        let id;
        let alumnos;
        let query;
        let Nombre;
        let Status;
        let Curso_ID;
        let Cursos;
        let Cursos_nombre;

        const params = req.params;

        let adms = await cds.connect.to('AdminService'); //> connected via OData
        for (let i = 0; i < params.length; i++) {
            if (params[i].ID != null) {
                id = params[i].ID;
                console.log('ID: ' + id);
                query = SELECT`ID,Nombre,Fecha,status,Curso`.from`estudiantes`.where`ID = ${id}`;
                alumnos = await adms.run(query);
                if (alumnos) {
                    Nombre = alumnos[0].Nombre;
                    Curso_ID = alumnos[0].Curso_ID;
                    Status = alumnos[0].Status;
                }
                console.log('Nombre: ' + Nombre + ' - ID Curso: ' + Curso_ID);
                query = SELECT`ID,Nombre`.from`Cursos`.where`ID = ${Curso_ID}`;
                Cursos = await adms.run(query);
                if (Cursos) {
                    Cursos_nombre = Cursos[0].Nombre;
                }
                console.log('Nombre Curso: ' + Cursos_nombre);
                req.info(400, 'Alumno: ' + id + ' ' + Nombre + ' Cursando: ' + Cursos_nombre + ' Status:' + Status + ' notificacion Exitosa!');
            }
        }
    })

})


