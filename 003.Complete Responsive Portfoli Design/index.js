function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector)
    // check if there are elements matching the selector and if the requested instance exsit.
    if (elements.length > instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' })
    }
}

const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

link1.addEventListener('click', function(){
    scrollToElement('.header')
})
link2.addEventListener('click', function(){
    // 上面elements[instance]定义了一个参数instance初始值为0的数组
    // 现在instance取值为1，数字索引为第二个,所以会跳转到第二个.header类
    scrollToElement('.header', 1)
})
link3.addEventListener('click', function(){
    // 现在数组instance初始值为0.跳转到第一个.colum类
    scrollToElement('.column')
})