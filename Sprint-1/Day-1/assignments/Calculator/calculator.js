const add = (x,y)=>{
    return x+y
}
const sub=(x,y)=>{
    return x-y
}
const div=(x,y)=>{
    return x/y
}
const mul=(x,y)=>{
    return x*y
}

const sin = (x)=>{
   return Math.sin(x)
}
const cos = (x)=>{
    return Math.sin(x)
}
const tan = (x)=>{
    return Math.sin(x)
}

const random=(x,y)=>{
    return Math.floor(
        Math.random()*(y-x)+x
    )
}

module.exports={add,sub,div,mul,sin,cos,tan,random}