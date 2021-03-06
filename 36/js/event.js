function getProdHtml(prod) {
    var html = '';
    html += '<li class="prod">';
    html += '<div class="cover"><a class="btn action-delete" href="#">删除</a></div>'
    html += '<a href="#">'
    html += '<img src="' + prod.img + '" alt="">'
    html += '<div class="prod-name">' + prod.name + '</div>'
    html += '<div class="prod-price">' + prod.price + '</div>'
    html += '</a>'
    html += '</li>';
    return html;
}

//获取随机照片
function getData() {
    var results = []
    for (var i = 0; i < 3; i++) {
        var rand = Math.floor(Math.random() * 100)
        var product = {
            img: 'https://picsum.photos/200/200?image=' + rand,
            name: 'Lorem ipsum',
            price: '$' + rand
        }
        results.push(product)
    }

    return results
}

$('.btn-add').on('click', function (e) {
    e.preventDefault();
    $('.prod').removeClass('hover')
    var products = getData()
    $.each(products, function (idx, prod) {
        var html = getProdHtml(prod)
        $('.prod-ct').append(html)
    })
})


$('.btn-edit').on('click', function (e) {
    e.preventDefault();
    $('.prod').toggleClass('hover')
})

$('.prod-ct').on('click', '.action-delete', function (e) {
    e.preventDefault()
    $(this).parents('.prod').remove()
})