var posts=["2024/08/26/hello-world/","2024/08/27/博客相关/使用Hexo-Github搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };