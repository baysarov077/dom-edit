let block = document.createElement('div')
let text = document.createElement('p')

text.innerHTML = 'lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptatem incidunt cumque in! In, omnis repellends.'
block.style.width = '300px'
block.style.margin = 'auto'
block.style.border = '1px solid red'
block.style.borderRadius = '10px'
block.style.paddingLeft = '10px'
block.append(text)

document.body.prepend(block)

let listBlock = document.createElement('div')
let link1 = document.createElement('a')
let link2 = document.createElement('a')
let link3 = document.createElement('a')

listBlock.style.display = 'flex'
listBlock.style.justifyContent= 'space-between'
listBlock.style.width = '280px'
listBlock.style.margin = 'auto'
listBlock.style.marginTop = '10px'

link1.innerHTML = 'intocode'
link2.innerHTML = 'google'
link3.innerHTML = 'instagram'

link1.href = 'https://intocode.ru/'
link2.href = 'https://google.com/'
link3.href = 'https://instagram.com'

link1.target = '_blank'
link2.target = '_blank'
link3.target = '_blank'



listBlock.append(link1, link2, link3)
block.after(listBlock)
