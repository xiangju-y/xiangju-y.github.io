var posts=["2022/09/29/python学习中的笔记/","2021/09/20/记录一次小米路由器4c刷机过程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };