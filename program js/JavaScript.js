document.getElementById("lanjut").addEventListener("click",Tampilan);

function Tampilan(){
    document.getElementById("lanjut").remove();
    const Nama = document.getElementById("Input-1").value;
    const NIM = document.getElementById("Input-2").value;
    const Ganti = document.getElementById("tampilkan-Input");
    const juumlahPilihan = document.getElementById("Input-3").value;

    Ganti.innerHTML="";
    for(let i=0;i<juumlahPilihan;i++){
        const div=document.createElement("div");
        const label = document.createElement("label");
        
        label.className="Lb-1";
        label.textContent="Pilihan "+(i+1)+" : ";
        const input = document.createElement("input");
        input.className="Input-1";
        input.type="text";
        input.id="Pilihan"+i;

        div.appendChild(label);
        div.appendChild(input);
        Ganti.appendChild(div);
        Ganti.appendChild(document.createElement("br"));
    }
    const btn = document.createElement("button");
    btn.textContent = "Simpan Pilihan :";
    btn.onclick = function(){
        let array =[];
        for(let i=0;i<juumlahPilihan;i++){
            array.push(document.getElementById("Pilihan"+i).value);
        }
        console.log("Nama :",Nama);
        console.log("NIM :", NIM);
        console.log("Array Pilihan : ", array);
        const hasil = document.createElement("p");
        hasil.textContent = "Pilihan Yang Kamu Masukan : "+array.join(", ");
        Ganti.appendChild(hasil);
    }
    Ganti.appendChild(btn);
}