// var baseurl = '/music'
// var banner = baseurl + 'banner'

var banner = '/music/banner'
var hot = '/music/top/list?idx=9'
var recommend ='/music/personalized?limit=9'
var artists ='/music/top/artists'
var playlist ='/music/playlist/detail'
var songdetail = '/music/song/detail'
// var lyric = '/music/lyric?id=33894312'
var artistlist = '/music/artist/list?cat=1001'
var lyric =  '/music/artist/desc'
var searchhot ='/music/search/hot'
var search = '/music/search'
var songurl ='/music/song/url'
//导出，外面只要需要获取到文件的变量名字就可以了
export default{
    banner,hot,recommend,artists,playlist,songdetail,lyric,artistlist,searchhot,search,songurl

}