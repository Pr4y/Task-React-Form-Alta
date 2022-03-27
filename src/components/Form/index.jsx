import { useState, useRef } from "react";

import style from "./style.module.css"

const Form = ({
    inputs, 
    setInputs, 
    errMsg, 
    setErrMsg, 
    imgSurat
}) => {
    const [check, setCheck] = useState(3)
    const handleInput = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const handleReset = (e) => {
        e.preventDefault()
        setCheck(3)
        setInputs({
            nama: "", 
            email: "", 
            noHp: "", 
            bgPendidikan: "",
            kelas: "",
            harapan: ""
        })
        setErrMsg({
            nama: "", 
            email: "", 
            noHp: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault ()
        const usernameRegex = /^[A-Za-z ]*$/
        const emailRegex = /(.+)@(.+)/
        const noHpRegex = /^\d{9,14}$/
        const baseError = {
            nama: "",
            email: "",
            noHp: ""
        }
        if (!inputs.nama.match(usernameRegex)){
            baseError.nama = "Nama Harus Berupa Huruf"
        }
        if (!inputs.email.match(emailRegex)){
            baseError.nama = "Email tidak valid"
        }
        if (!inputs.noHp.match(noHpRegex)){
            baseError.nama = "Nomor Handphone Harus Berupa Angka"
        }
        if(baseError.nama.length === 0 && 
            baseError.email.length === 0 && 
            baseError.noHp.length === 0) {
                alert(`Data Pendaftar ${inputs.nama} Behasil Diterima`)
            } else {
                alert ("Data Pendaftar Belum Sesuai")
            }
            setErrMsg(baseError)
    }

    

    return (  
        <form className={style.main_form} onSubmit={handleSubmit}>
            <h1>Pendaftaran Peserta Coding Bootcamp</h1>

            <div className={style.input_form}>
                <label>Nama Lengkap :</label>
                <input 
                placeholder="Masukkan Nama Lengkap Anda"
                type="text" 
                name="nama" 
                value={inputs.nama} 
                onChange= {(e) => {handleInput(e)}}
                required />
            </div>

            <div className={style.input_form}>
                <label>Email :</label>
                <input type="email" 
                placeholder="Mauskkan email anda"
                name="email" 
                value={inputs.email}
                onChange = {(e) => {handleInput(e)}}
                required/>
            </div>

            <div className={style.input_form}>
                <label>Nomor Handphone :</label>
                <input 
                type="number" 
                placeholder="Masukkan Nomor handphone Anda"
                name="noHp" 
                value={inputs.noHP} 
                onChange={(e) => {handleInput(e)}}  
                required/>
            </div>

            <div>
                <label>Latar Belakang Pendidikan :</label>
                <input 
                type="radio"
                checked={check === 1} 
                name="bgPendidikan"
                onChange={(e) => {handleInput(e); setCheck(1)}} 
                value="IT"
                required/>
                <label >IT</label>
                <input 
                type="radio" 
                checked={check === 0} 
                name="bgPendidikan"
                onChange={(e) => {handleInput(e); setCheck(0)}} 
                value="NonIT" 
                required/>
                <label>NonIT</label>
            </div>

            <div className={style.input_form}>
                <label>Kelas Coding yang Dipilih :</label>
                <select 
                name="kelas" 
                onChange={(e) => {handleInput(e)}}
                required>
                    <option value={inputs.kelas} disabled selected>Pilih Salah Satu Program</option>
                    <option value="Coding Backend with Golang">Coding Backend with Golang</option>
                    <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
                    <option value="Fullstack Developer">Fullstack Developer</option>
                </select>
            </div>

            <div className={style.input_form}>
                <label>Foto Surat Kesungguhan :</label>
                <input type="file" 
                ref={imgSurat} 
                required 
                onChange={() => {console.log(imgSurat.current.files[0].name)}}/>
            </div>

            <div className={style.input_form}>
                <label>Harapan Untuk Coding Bootcamp Ini :</label>
                <textarea 
                name="harapan" 
                rows={5} 
                value={inputs.harapan} 
                onChange={(e) => {handleInput(e)}}>

                </textarea>
            </div>
            <div>
            <ul className="">
                    {errMsg.nama.length > 0 ? <li>{errMsg.nama}</li> : <></>}
                    {errMsg.email.length > 0 ? <li>{errMsg.email}</li> : <></>} 
                    {errMsg.noHp.length > 0 ? <li>{errMsg.noHandphone}</li> : <></>} 
                </ul>
            </div>
            <div className={style.submit_form}>
            <input type="submit" value="Submit"/>
            <button onClick={(e) => {handleReset(e)}}>Reset</button>
            </div>
        </form>
    );
}
 
export default Form;