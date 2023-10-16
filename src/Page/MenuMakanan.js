import React, {Component} from "react";

import ListMakanan from "../ListData/ListData";

class MenuMakanan extends Component{
    constructor(props){
        super(props)
        this.state = {
            pesan: "",
            jumlah: 0,
            tampil: true
        }
        this.nasipadang = this.nasipadang.bind(this)
        this.sate = this.sate.bind(this)
        this.soto = this.soto.bind(this)
        this.uduk = this.uduk.bind(this)
        this.kuning = this.kuning.bind(this)
        this.batal = this.batal.bind(this)

    }
    pilihpesanan(value, e){
        this.setState({[value]: e.target.value, tampil:true})
    }

  nasipadang(){
    this.setState({
        pesan: "nasi Padang",
        jumlah: this.state.jumlah +1,
        tampil : true
    })
  }

  sate(){
    this.setState({
        pesan: "Sate",
        jumlah: this.state.jumlah +1,
        tampil : true
    })
  }  

  soto(){
    this.setState({
        pesan: "soto",
        jumlah: this.state.jumlah +1,
        tampil : true
    })
  }
    
  uduk(){
    this.setState({
        pesan: "nasi uduk",
        jumlah: this.state.jumlah +1,
        tampil : true
    })
  }
      
    
  kuning(){
    this.setState({
        pesan: "nasi kuning",
        jumlah: this.state.jumlah +1,
        tampil : true
    })
  }

  batal(){
    this.setState({
        pesan: "",
        jumlah: 0,
        tampil : false
    })
  }
        render(){
            return(
                <div>
                    <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                    <table>
                        <tr>
                            <td>
                                <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.nasipadang}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                <center>
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                                <center>
                                    <button onClick={this.uduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" />
                                <center>
                                    <button onClick={this.kuning}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </table>

                    <br/>
                    <input type="text" onChange={e=>this.pilihpesanan("pesan", e)} placeholder="Masukkan Pesanan Anda"/>
                    <input type="number" onChange={e=>this.pilihpesanan("jumlah", e)} placeholder="Jumlah Pesanan"/>
                    <button onClick={this.batal}>Batalkan Semua Pesanan</button>
                    
                    {this.state.tampil === true ?(<div><h3>Pesanan Anda : {this.state.pesan}</h3><h4>Jumlah Pesanan : {this.state.jumlah}</h4></div>)
                    :(<h1><center>Anda Belum Menesan</center></h1>)}
                </div>
            )
        }

    }

    export default MenuMakanan