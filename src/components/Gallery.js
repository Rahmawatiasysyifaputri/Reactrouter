import React from "react";
import "./Galeri.css"

class Gallery extends React.Component{
    render(){
        return(
            <div>
                <div class = "jumbotroon text-center">
                    <h1>ADIWIYATA</h1>
                    <h3>Gallery Kumpulan Foto Program Adiwiyata</h3>
                </div>
                <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/gerakanpohon.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Perencanaan Gerakan 1 Juta Pohon</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/pedulisampah.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Peduli Sampah Nasional</h3>
                                        </div>
                                </div>
                            </div>
                

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/hariair.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Air se-Dunia</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/meteorologi.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Meteorologi</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/keanekaragamanhayati.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Keanekaragaman Hayati</h3>
                                        </div>
                                </div>
                            </div>  
                        </div>
                </div>
            </div>
        )
    }
}

export default Gallery;