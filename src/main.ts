const downloadBtn = document.getElementById('download') as HTMLButtonElement

downloadBtn.addEventListener('click',async ()=>{
  const images = ['/1.png','2.png']

  //  @ts-ignore
  const dhandle = await window.showDirectoryPicker({
    mode:'readwrite'
  })
  await dhandle.requestPermission({ writable: true })

  for(let i = 0 ; i < images.length;i++){
    let imgUri = images[i]

    const res = await fetch(imgUri)
    let blob = await res.blob()

    let fileHandle = await dhandle.getFileHandle(`${i}.png`, { create: true })
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
    //  @ts-ignore
    blob = null
    console.log(2)
  }
})

export {}
