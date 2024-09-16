/*const obj = {
    count : 0,
    increment(){
        this.count++;
    },
    getCount(){
        return (() => this.count)();
    }
};
obj.increment();
obj.increment();
console.log(obj.getCount());*/

/*const obj = {
    data : [1,2,3],
    getData(){
        return this.data.map(x=>x*2)
    }
};
const newData = obj.getData.bind({data: [4,5,8,9,7,5,4,34]})();
console.log(newData);*/



for(let i =0; i <= 20; i++ ){
    
    console.log(i**2)
    
}