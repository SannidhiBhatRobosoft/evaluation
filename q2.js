function arrayWithSortedFrequency(a,n){
    var mp=new Map();
    let ans=[]
    for( let i=0;i<n;i++)
    {
        if(mp.has(a[i]))
            mp.set(a[i], mp.get(a[i]) + 1)
          else
            mp.set(a[i], 1)
    }
    const mapSort1 = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));
    //console.log(mapSort1);
    mapSort1.forEach((v,k)=>{
        for(let j=0;j<v;j++)
            ans.push(k)
    })
    console.log(ans);
}


const array=[12, 3, 1, 9, 4, 12, 9, 7, 8, 12, 9, 4, 8, 8, 2, 3, 8]

arrayWithSortedFrequency(array,array.length)