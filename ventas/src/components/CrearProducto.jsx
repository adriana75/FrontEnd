import React from 'react'

const CrearProducto = () => {

    return (
        <div>
            <h1>CREAR PRODUCTO</h1>
            <form>

                <button class="button1 right"><a href="javascript: history.go(-1)">Atrás</a></button>             
                <br></br><br></br><br></br>
                <div>
                    <div>
                        <ul class="navbar">
                            <li>
                            <label for="file-upload" class="subir">
                                <i class="fas fa-cloud-upload-alt"></i> Subir archivo
                                    </label>
                                    <input id="file-upload" onchange='cambiar()' type="file" />
                                    <div id="info"></div>
                             </li>
                
                            <li>
                                <p><input type ="text" name="Id_Producto" id="Id_Producto" placeholder="Id Produto"/></p>
                                <p><input type ="text" name="Descripcion" id="Descripcion" placeholder="Descripcion"/></p>
                                <p><input type ="text" name="Valor_Unitario" id="Valor_Unitario" placeholder="Valor unitario"/></p>
                                <p>
                                        <label>Estado del producto:</label>
                                        <select id="sel1" name="sel1">
                                            <option value="11" selected>Disponible</option>
                                            <option value="22" >No disponible</option>
                                        </select>
                                    <p/>
                                    </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul class="navbar">
                                <li>

                                </li>
                            </ul>
                    </div>

                    <div class="center">
                        <button class="button1" type="submit" name="Guardar_Producto">Guardar</button>
                    </div>

                </div>

                
            </form>

            

        </div>
    )
}

export default CrearProducto