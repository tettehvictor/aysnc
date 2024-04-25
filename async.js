async function fetchData() {
    // asynchronous operation goes in here ES5

    // await keyword
   const data = await fetch('https://jsonplaceholder.typicode.com/posts')
//    console.log(data)
   const response = await data.json()
   console.log(response)
}

const fetchData2 = async () => {
    // asynchronous operation goes in here ES6
}

async function fetchAlbums(){
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/albums')
        const res =await data.json()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
fetchData()
fetchAlbums()