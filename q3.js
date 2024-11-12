function SubArrayWithhigestSum(a,n){
    let ans=0;
    for(let i=0;i<n;i++)
    {
        let temp=0
        if(i+4<n)
        for(let j=i;j<i+4;j++){
            temp+=a[j];
        }
        //console.log(temp);
        ans=Math.max(ans,temp)
    }
    console.log(ans);
}




const array=[12, 3, 1, 9, 4, 12, 9, 7, 8, 12, 9, 4, 8, 8, 2, 3, 8]

SubArrayWithhigestSum(array,array.length)