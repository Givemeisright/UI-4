import $ from "jquery";
import "./app2.css";


const $tabBar = $("#app2 .tabBar")
const $tabContent = $("#app2 .tabContent")

$tabBar.on("click", "li", e => {
    // 监听父元素
    const $index = $(e.currentTarget).index();
    // 当前点击的元素
    $tabBar.children()
    .eq($index).addClass('selected')
    .siblings().removeClass('selected');

    $tabContent.children()
    .eq($index).addClass('active')
    .siblings().removeClass('active')

})
$tabBar
    .children()
    .eq(0)
    .trigger('click')