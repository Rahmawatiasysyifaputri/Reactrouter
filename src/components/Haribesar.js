import React from "react";

class HariBesar extends React.Component{
    render(){
        return(
            <div>
            <div class = "jumbotroon text-center">
                <h1>ADIWIYATA</h1>
                <h3>Peringatan Hari Besar Adiwiyata</h3>
            </div>
            
            <div class = "container">
                <table class = "table table-striped" >
                    <thead>
                        <tr>
                            <td><b>Tanggal</b></td>
                            <td><b>Kegiatan</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <td>10 Januari</td>
                        <td>Hari Perencanaan Gerakan 1 Juta Pohon</td>
                    </tbody>
                    <tbody>
                        <td>21 Februari</td>
                        <td>Hari Peduli Sampah Nasional</td>
                    </tbody>
                    <tbody>
                        <td>22 Maret</td>
                        <td>Hari Air se-Dunia</td>
                    </tbody>
                    <tbody>
                        <td>23 Maret</td>
                        <td>Hari Meteorologi</td>
                    </tbody>
                    <tbody>
                        <td>21 Meteorologi</td>
                        <td>Hari Keanekaragaman Hayati</td>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default HariBesar;