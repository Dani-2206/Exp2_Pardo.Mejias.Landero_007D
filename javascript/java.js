function validacion()
            {
                nom= document.getElementById('nombre').value;
                apellido= document.getElementById('apellidos').value;
                ed = document.getElementById('edad').value; 
                genero = document.getElementByName('genero').selectedIndex;
                fono = document.getElementById('NumeroT').value;
                fecha = document.getElementById('fechaN').value;
                nombreE= document.getElementById('email').value;
                nomU= document.getElementById('nombreU').value;
                contra= document.getElementById('contraseña').value;
                contra2= document.getElementById('contraseña2').value;


                if(nom == null || nom.length==0 || /^\s+$/.test(nom))
                {
                    alert('Error.. debe ingresar un nombre');
                    document.getElementById('nombre').value="";
                    document.datos.nom.focus();
                    return false;
                }
                
                if(isNaN(ed) || ed.length == 0)
                 {
                    alert('Error...debe ingresar una edad válida');
                    document.getElementById('edad').value="";
                    document.datos.ed.focus();
                    return false;
                }

                if (genero == null)
                {
                    alert('Seleccione un genero');
                    document.datos.genero.focus();
                    return false;
                }

                if(!(/^\d{9}$/.test(fono)) )
                {
                    alert('Error...debe ingresar un teléfono válido');
                    document.getElementById('NumeroT').value="";
                    document.datos.fono.focus();
                    return false;
                }    

                if(fecha  == null)
                {
                    alert('Error.. debe ingresar una fecha');
                    document.getElementById('fechaN').value="";
                    document.datos.fachaN.focus();
                    return false;
                }


                if(apellidos == null || apellidos.length==0 || /^\s+$/.test(apellidos))
                {
                    alert('Error.. debe ingresar un apellido');
                    document.getElementById('apellidos').value="";
                    document.datos.apellidos.focus();
                    return false;
                }


                if(nombreE == null || apellidos.length==0 )
                {
                    alert('Error.. debe ingresar un email valido');
                    document.getElementById('email').value="";
                    document.datos.nombreE.focus();
                    return false;
                }

                if(nomU == null || apellidos.length==0 )
                {
                    alert('Error.. debe ingresar un nombre de usuario ');
                    document.getElementById('nombreU').value="";
                    document.datos.nomU.focus();
                    return false;
                }

                if(contra == null || apellidos.length==0 )
                {
                    alert('Error.. debe ingresar una contraseña ');
                    document.getElementById('contraseña').value="";
                    document.datos.contra.focus();
                    return false;
                }

                if(contra2 == null || apellidos.length==0 )
                {
                    alert('Error.. debe colcoar colocar denuevo la contraseña');
                    document.getElementById('contraseña2').value="";
                    document.datos.contra2.focus();
                    return false;
                }

                if(contra2 != contra)
                {
                    alert('Error.. deben ser iguales');
                    document.getElementById('contraseña2').value="";
                    document.datos.contra2.focus();
                    return false;
                }

                

                return true;
            }